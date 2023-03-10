export type TranslatedAircraftType = {
    Id: string
    AircraftClassId?: string
    CreationDate: Date
    LastModerationDate: Date
    DisplayName: string
    TypeName: string
    FlightsCount: number
    TimeBetweenOverhaul: number
    HightimeAirframe: number
    AirportMinSize: number
    EmptyWeight: number
    EstimatedCruiseFF: number
    Baseprice: number
    FuelTotalCapacityInGallons: number
    NumberOfEngines: number
    Seats: number
    NeedsCopilot: boolean
    MaximumCargoWeight: number
    MaximumRangeInHour: number
    MaximumRangeInNM: number
    DesignSpeedVS0: number
    DesignSpeedVS1: number
    DesignSpeedVC: number
    IsDisabled: boolean
    LuxeFactor: number
    GliderHasEngine: boolean
    StandardSeatWeight: number
    IsFighter: boolean
    OnAirSyncedAt?: Date|null
    UpdatedAt?: Date|null
    CreatedAt?: Date
    AircraftClass?: any|null
    EngineType?: any|null;
    FuelType?: any|null;
}
