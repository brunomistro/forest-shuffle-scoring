import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

import ServerIntlProvider from "@/containers/ServerIntlProvider";
import { GameContextProvider } from "@/contexts/GameContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forest Shuffle Scoring",
  description: "Simplify scoring of Forest Shuffle plays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ServerIntlProvider>
          <CssVarsProvider defaultMode="system">
            <CssBaseline />
            <GameContextProvider>{children}</GameContextProvider>
          </CssVarsProvider>
        </ServerIntlProvider>
      </body>
    </html>
  );
}
