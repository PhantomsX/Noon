const locales = ["en", "ar"] as const;

declare module "next-intl" {
  interface AppConfig {
    // ...
    Locale: (typeof locales)[number];
  }
}
