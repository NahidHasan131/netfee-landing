"use client";

import { useEffect, useState } from "react";
import "../language/i18n/i18n"; 

export function I18nProvider({ children }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return <>{children}</>;
}
