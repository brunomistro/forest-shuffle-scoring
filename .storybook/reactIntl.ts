const locales = ["en", "de"];

const messages = locales.reduce(
  (acc, lang) => ({
    ...acc,
    [lang]: require(`../src/translations/${lang}.json`), // whatever the relative path to your messages json is
  }),
  {},
);

export default {
  defaultLocale: "en",
  locales,
  messages,
};
