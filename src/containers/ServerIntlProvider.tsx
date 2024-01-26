"use client";

import { ReactNode, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import { DEFAULT_LOCALE } from "@/constants";
import translations from "@/translations";

interface ServerIntlProviderProps {
  children: ReactNode;
}

const ServerIntlProvider = ({ children }: ServerIntlProviderProps) => {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const browserLocale = navigator.language?.split(/[-_]/)[0];
    if (browserLocale) {
      setLocale(browserLocale);
    }
  }, []);

  return (
    <IntlProvider messages={translations[locale]} locale={locale}>
      {children}
    </IntlProvider>
  );
};

export default ServerIntlProvider;
