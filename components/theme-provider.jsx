"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

//we are using this to wrap the app in the theme provider so that we can use the theme provider in the app. we need dark mode in the app.
//we are using next-themes to implement dark mode in the app.
