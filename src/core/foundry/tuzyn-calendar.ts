export const TUZYN_RECKONING: BuiltinCalendarData = {
    shortcode: "tuzrec",
    label: "KETHBAS.CalendarSettings.tuzyn",
    config: {
        name: "Tuzyn Reckoning",
        description: "The Tuzyn Reckoning calendar of Venarive.",
        years: {
            yearZero: 720,
            firstWeekday: 0,
        },
        era: {
            name: "KETHBAS.Calendar.Tuzyn.EraName",
            abbrev: "KETHBAS.Calendar.Tuzyn.EraAbbr",
            beforeName: "KETHBAS.Calendar.Tuzyn.BeforeEraName",
            beforeAbbrev: "KETHBAS.Calendar.Tuzyn.BeforeEraAbbr",
            description: "From the founding of Meldyrn on the Isle of Hârn",
            hasYearZero: false,
        },
        months: {
            values: Array.from({ length: 12 }, (_unused, i) => ({
                name: `KETHBAS.Calendar.Tuzyn.Month.${i}.label`,
                abbreviation: `KETHBAS.Calendar.Tuzyn.Month.${i}.abbr`,
                ordinal: i + 1,
                days: 30,
            })),
        },
        days: {
            values: Array.from({ length: 10 }, (_unused, i) => ({
                name: `KETHBAS.Calendar.Tuzyn.Weekday.${i}.label`,
                abbreviation: `KETHBAS.Calendar.Tuzyn.Weekday.${i}.abbr`,
                ordinal: i + 1,
            })),
            daysPerYear: 360,
            hoursPerDay: 24,
            minutesPerHour: 60,
            secondsPerMinute: 60,
        },
        seasons: {
            values: [
                {
                    name: "KETHBAS.Calendar.Tuzyn.Season.0.label",
                    monthStart: 1,
                    monthEnd: 3,
                },
                {
                    name: "KETHBAS.Calendar.Tuzyn.Season.1.label",
                    monthStart: 4,
                    monthEnd: 6,
                },
                {
                    name: "KETHBAS.Calendar.Tuzyn.Season.2.label",
                    monthStart: 7,
                    monthEnd: 9,
                },
                {
                    name: "KETHBAS.Calendar.Tuzyn.Season.3.label",
                    monthStart: 10,
                    monthEnd: 12,
                },
            ],
        },
    },
};
