//translationsService.js;
const getTranslations = () => {
  // makes network call to retrieve translations
  // then parses result into an object of the below shape
  const result = {
    strings: {
      "british-english": {
        keyOne: "string-one",
      },
      malaysian: {
        keyOne: "string-satu",
      },
    },
  };
  return result;
};
module.exports = getTranslations;

//testSubject.js;
const getTranslations = require("../helpers/translationsService");
const moduleWeAreTesting = (language, bool = true) => {
  const trans = getTranslations();
  const getString = (stringKey) => {
    return trans["strings"][language][stringKey];
  };
  const res = bool ? getString("agree") : getString("disagree");
  return `They say: ${res}`;
};
module.exports = moduleWeAreTesting;

jest.mock("../helpers/translationsService", () => () => ({
  strings: {
    polish: {
      agree: "tak",
      disagree: "nie",
    },
    malaysian: {
      agree: "ya",
      disagree: "tidak",
    },
  },
}));
