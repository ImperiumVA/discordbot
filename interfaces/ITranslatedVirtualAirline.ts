import { ITranslatedResponse } from ".";

export interface ITranslatedVirtualAirline extends ITranslatedResponse {
    Id:                                     string;
    Name:                                   string;
    AirlineCode:                            string;
    ApiKey?:                                 string;
    OwnerId?:                                string;
    InitalOwnerEquity:                      number;
    PercentDividendsToDistribute:           number;
    LastDividendsDistribution:              Date;
    ImageName:                              string;
    ForceAssignJobsToPilots:                Boolean;
    AutomaticallyAssignJobWhenTaken:        Boolean;
    AutomaticallyAssignJobWhenLoaded:       Boolean;
    RestrictEmployeesUsage:                 Boolean;
    RestrictLoadingVAJobsIntoNonVAAircraft: Boolean;
    RestrictLoadingNonVAJobsIntoVAAircraft: Boolean;
    MemberCount:                            number;
    LastConnection:                         Date;
    LastReportDate:                         Date;
    Reputation:                             number;
    CreationDate:                           Date;
    DifficultyLevel:                        number;
    UTCOffsetinHours:                       number;
    Paused:                                 Boolean;
    Level:                                  number;
    LevelXP:                                number;
    TransportEmployeeInstant:               Boolean;
    TransportPlayerInstant:                 Boolean;
    ForceTimeInSimulator:                   Boolean;
    UseSmallAirports:                       Boolean;
    UseOnlyVanillaAirports:                 Boolean;
    EnableSkillTree:                        Boolean;
    CheckrideLevel:                         number;
    EnableLandingPenalities:                Boolean;
    EnableEmployeesFlightDutyAndSleep:      Boolean;
    AircraftRentLevel:                      number;
    EnableCargosAndChartersLoadingTime:     Boolean;
    InSurvival:                             Boolean;
    PayBonusFactor:                         number;
    EnableSimFailures:                      Boolean;
    DisableSeatsConfigCheck:                Boolean;
    RealisticSimProcedures:                 Boolean;
    TravelTokens:                           number;
}
