import { useEffect } from "react";
import { z } from "zod";
import { en, tr } from "zod/locales";
import { getLocale } from "@/paraglide/runtime";

const zodLocaleFactories = {
  en,
  tr,
} as const;

export function useInitZod() {
  const locale = getLocale();

  useEffect(() => {
    loadZodLocale(locale);
  }, [locale]);
}

function loadZodLocale(locale: string) {
  const normalizedLocale = locale.toLowerCase();
  const baseLocale = normalizedLocale.split("-")[0];
  const localeFactory =
    zodLocaleFactories[
      (normalizedLocale in zodLocaleFactories
        ? normalizedLocale
        : baseLocale) as keyof typeof zodLocaleFactories
    ] ?? en;

  z.config(localeFactory());
}
