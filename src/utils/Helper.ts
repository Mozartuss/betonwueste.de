import ReactGA from "react-ga4";
import { Cookies } from "react-cookie-consent";

export const prevAll = (element: HTMLDivElement): HTMLDivElement[] => {
    const result: HTMLDivElement[] = [];

    while ((element = element.previousElementSibling as HTMLDivElement)) result.push(element);
    return result;
};

export interface IData {
    [key: string | number]: IDataEntry[];
}

export interface IDataEntry {
    AGS: number;
    municipality: string;
    municipality_short: string;
    total: number;
    date: string;
    living: number;
    living_percent: number;
    industry: number;
    industry_percent: number;
    misc_industry_living: number;
    misc_industry_living_percent: number;
    transport_infrastructure: number;
    transport_infrastructure_percent: number;
    nature: number;
    nature_percent: number;
    water: number;
    water_percent: number;
    mining: number;
    mining_percent: number;
    used_area: number;
    used_area_percent: number;
    demographic: number;
}

export const districts = [
    "Bayern",
    "Mittelfranken",
    "Niederbayern",
    "Oberbayern",
    "Oberfranken",
    "Oberpfalz",
    "Schwaben",
    "Unterfranken",
];

export const years = [1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];

export const initGA = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        ReactGA.set({ anonymizeIp: true });
        ReactGA.send("pageview");
    }
};

export const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
};

export const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
        initGA();
    }
};
