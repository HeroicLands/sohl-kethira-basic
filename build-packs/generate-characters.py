#!./venv/bin/python3

import yaml
import os
import json
import copy
import argparse
import random
import string
from unidecode import unidecode
import re

parser = argparse.ArgumentParser()
parser.add_argument("dataDir", help="folder where data files are located")
parser.add_argument("outputDir", help="folder where generated files should be placed")
args = parser.parse_args()

items = []


class MaxDepthExceededError(Exception):
    """Exception raised when recursion exceeds the maximum allowed depth."""

    pass


def deep_replace(dict1, dict2, max_depth=10):
    """
    Creates a deep copy of dict1 and performs a deep replace with values from dict2,
    limiting recursion to a maximum depth.
    """

    def recursive_replace(d1, d2, depth):
        if depth > max_depth:
            raise MaxDepthExceededError(
                f"Maximum recursion depth of {max_depth} exceeded."
            )
        if not d1:
            return copy.deepcopy(d2)
        if not d2:
            return copy.deepcopy(d1)
        for key, value in d2.items():
            if key in d1:
                if isinstance(value, dict) and isinstance(d1[key], dict):
                    # If both values are dictionaries, recurse
                    recursive_replace(d1[key], value, depth + 1)
                else:
                    # Replace the value
                    d1[key] = copy.deepcopy(value)
            else:
                # Add new key-value pairs from dict2
                d1[key] = copy.deepcopy(value)

    # Create a deep copy of dict1
    result = copy.deepcopy(dict1)
    # Perform the deep replace with depth tracking
    if dict2:
        recursive_replace(result, dict2, depth=1)
    return result


def randId():
    random_string = "".join(
        random.choice(string.ascii_letters + string.digits) for i in range(16)
    )
    return random_string


def read_json_files_to_dict(directory_path, existing_array):
    # Check if the directory exists
    if not os.path.isdir(directory_path):
        raise ValueError(
            f"The specified path '{directory_path}' is not a directory or does not exist."
        )

    # Iterate through all files in the directory
    for filename in os.listdir(directory_path):
        # Construct full file path
        file_path = os.path.join(directory_path, filename)

        # Check if the file is a JSON file
        if os.path.isfile(file_path) and filename.endswith(".json"):
            try:
                # Read and parse the JSON file
                with open(file_path, "r") as file:
                    json_data = json.load(file)
                existing_array.append(json_data)
            except Exception as e:
                print(f"Error reading file '{filename}': {e}")

    return existing_array


def get_item(itemdesc, custom=False):
    result = None
    name = itemdesc["name"]
    type = itemdesc["type"]
    id = itemdesc.get("_id", randId())
    if not custom:
        for item in items:
            if item.get("name") == name and item.get("type") == type:
                result = deep_replace(item, itemdesc)
                break
    if not result:
        result = copy.deepcopy(itemdesc)
    result["_id"] = id
    return result


def clean_effects(effects, parentId, parentType):
    result = []
    for effect in effects:
        neweffect = copy.deepcopy(effect)
        key = f"!{parentType}.effects!{parentId}.{effect['_id']}"
        neweffect["_key"] = key
        result.append(neweffect)
    return result


def copy_item(itemdesc):
    if not (itemdesc["name"] and itemdesc["type"]):
        raise ValueError(f"Name and type are required, name={name}, type={type}")

    name = itemdesc["name"]
    itemName = name
    if "itemName" in itemdesc:
        itemName = itemdesc["itemName"]
        del itemdesc["itemName"]
    itemdesc["name"] = itemName

    custom = False
    if "custom" in itemdesc:
        custom = itemdesc["custom"]
        del itemdesc["custom"]

    newitem = get_item(itemdesc, custom)

    newitem["name"] = name

    if "_key" in newitem:
        del newitem["_key"]

    nestedItems = newitem.get("system", {}).get("nestedItems", {})
    if nestedItems:
        ary = []
        for ni in nestedItems:
            nitem = copy_item(ni)
            ary.append(nitem)
        newitem["system"]["nestedItems"] = ary

    if "effects" in newitem:
        for effect in newitem["effects"]:
            if "_key" in effect:
                del effect["_key"]
    return newitem


# Load all standard SoHL Items
read_json_files_to_dict("build/characteristics", items)
read_json_files_to_dict("build/mysteries", items)
read_json_files_to_dict(
    "../../Song-of-Heroic-Lands-FoundryVTT/build-packs/build/characteristics", items
)
read_json_files_to_dict(
    "../../Song-of-Heroic-Lands-FoundryVTT/build-packs/build/mysteries", items
)
read_json_files_to_dict(
    "../../Song-of-Heroic-Lands-FoundryVTT/build-packs/build/possessions", items
)

stats = {
    "systemId": "sohl",
    "systemVersion": "0.9.0",
    "coreVersion": "12.330",
    "createdTime": 0,
    "modifiedTime": 0,
    "lastModifiedBy": "TMJsvJWT6ytpHZ0M",
}

with open(f"{args.dataDir}/characters.yaml", "r", encoding="utf8") as infile:
    charsData = yaml.safe_load(infile)

for char in charsData:
    print(f"Processing Character {char['name']}")
    fname = char["name"] + "_" + char["_id"]
    fname = unidecode(fname)
    fname = re.sub(r"[^0-9a-zA-Z]+", "_", fname) + ".json"
    pname = args.outputDir + "/" + fname
    actorid = char["_id"]
    actorkey = f"!actors!{actorid}"

    out = copy.deepcopy(char)
    if "metadata" in out:
        del out["metadata"]
    out["_key"] = actorkey
    out["effects"] = clean_effects(out.get("effects", []), actorid, "actors")
    itemary = []
    for itemdesc in out.get("items", []):
        newitem = copy_item(itemdesc)
        itemid = newitem["_id"]
        itemkey = f"!actors.items!{actorid}.{itemid}"
        newitem["_key"] = itemkey
        newitem["effects"] = clean_effects(newitem.get("effects", []), itemid, "items")
        itemary.append(newitem)
    out["items"] = itemary
    with open(pname, "w", encoding="utf8") as outfile:
        json.dump(out, outfile, indent=2, ensure_ascii=False)

with open(f"{args.dataDir}/folders.yaml", "r", encoding="utf8") as infile:
    foldersData = yaml.safe_load(infile)

for folder in foldersData:
    print(f"Processing Folder {folder['name']}")
    fname = folder["name"] + "_" + folder["id"]
    fname = unidecode(fname)
    fname = re.sub(r"[^0-9a-zA-Z]+", "_", fname) + ".json"
    pname = args.outputDir + "/" + fname

    out = {
        "name": folder["name"],
        "sorting": "a",
        "folder": folder["parentFolderId"] or None,
        "type": "Item",
        "_id": folder["id"],
        "color": folder["color"],
        "flags": {},
        "_stats": stats,
        "ownership": {"default": 3},
        "_key": "!folders!" + folder["id"],
    }
    with open(pname, "w", encoding="utf8") as outfile:
        json.dump(out, outfile, indent=2, ensure_ascii=False)
