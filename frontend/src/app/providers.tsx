"use client";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/system";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
