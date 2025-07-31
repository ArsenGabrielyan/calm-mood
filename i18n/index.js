const en = require("./translations.en.json");
const ru = require("./translations.ru.json");
const hy = require("./translations.hy.json");

const i18n = {
     translations: {en,ru,hy},
     defaultLang: "en",
     useBrowserDefault: true,
     languageDataStore: "localStorage",
}

module.exports = i18n