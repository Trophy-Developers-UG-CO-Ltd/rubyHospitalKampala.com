/**
 * Internationalization configuration
 */

export const languages = {
  en: {
    code: "en",
    name: "English",
    direction: "ltr",
  },
  lg: {
    code: "lg",
    name: "Luganda",
    direction: "ltr",
  },
  sw: {
    code: "sw",
    name: "Swahili",
    direction: "ltr",
  },
} as const;

export const defaultLanguage = "en" as const;
export const supportedLanguages = Object.keys(languages) as Array<keyof typeof languages>;

export function isValidLanguage(lang: string): lang is keyof typeof languages {
  return lang in languages;
}
