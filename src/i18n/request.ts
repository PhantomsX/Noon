import { getRequestConfig } from "next-intl/server";

// The dual-tree layouts pass `locale` + `messages` to NextIntlClientProvider
// directly, so no request-time locale detection happens. next-intl still
// requires a config file to exist; this returns a static default and never
// reads cookies()/headers().
export default getRequestConfig(async () => {
  return {
    locale: "en",
    messages: (await import("../../messages/en.json")).default,
  };
});
