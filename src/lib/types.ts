import React from "react";
import { SoundsType } from "./sounds";

export interface ISounds {
      id: SoundsType;
      url: string;
      Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export type LangCodeType = 'en' | 'hy' | 'ru' | 'ka';
export type CountryCodeType = 'us' | 'am' | 'ru' | 'ge';
export interface ILanguage{
      code: LangCodeType,
      countryCode: CountryCodeType,
      label: string
}
export type PlayBackType = "idle" | "playing" | "paused"