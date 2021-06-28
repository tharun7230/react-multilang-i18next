import en from "./public/locales/en";
import de from "./public/locales/de";
import fr from "./public/locales/fr";

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if(language === 'EN') {
    langData = en;
  }else if(language === 'DE') {
    langData = de;
  }else if(language === 'FR') {
    langData = fr;
  }

  return langData[key];
}