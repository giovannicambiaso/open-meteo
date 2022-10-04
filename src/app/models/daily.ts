export interface DailyUnits {
    time: string;
    weathercode: string;
}

export interface Daily {
    time: string[];
    weathercode: number[];
}

export interface Root {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    daily_units: DailyUnits;
    daily: Daily;
}
