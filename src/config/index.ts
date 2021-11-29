import i18n from "i18n-js";
import * as Localization from "expo-localization";


// Setting app locale
i18n.locale = Localization.locale.includes("en") ? "en" : Localization.locale;
