import { InputResponse, TranslatedResponse } from "../types";
import { ILogger, IBotContext, IAircraftClassTranslator, IAircraftEngineTranslator, IAircraftTranslator, IAircraftTypeTranslator, ITranslator, IVirtualAirlineTranslator, IAirportTranslator, ICompanyTranslator, IMemberTranslator, INotificationTranslator, IVARoleTranslator, IFlightTranslator, IEmployeeTranslator, } from ".";

export interface IProcessor {
    App: IBotContext;
    Logger: ILogger;
    Input: InputResponse|undefined;
    Translated: TranslatedResponse|undefined;
    Translators: {
        AircraftClass: IAircraftClassTranslator;
        AircraftType: IAircraftTypeTranslator;
        AircraftEngine: IAircraftEngineTranslator;
        Aircraft: IAircraftTranslator;
        VirtualAirline: IVirtualAirlineTranslator;
        Member: IMemberTranslator;
        Company: ICompanyTranslator;
        VARole: IVARoleTranslator;
        Airport: IAirportTranslator;
        Notification: INotificationTranslator;
        Flight: IFlightTranslator;
        Employee: IEmployeeTranslator;
    };
}
