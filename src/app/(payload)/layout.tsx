import type { ReactNode } from "react";
import config from "@payload-config";
import { RootLayout } from "@payloadcms/next/layouts";
import "@payloadcms/next/css";
import { importMap } from "./admin/importMap.js";
import { serverFunction } from "./serverFunction";
import "./custom.scss";

export default function PayloadLayout({ children }: { children: ReactNode }) {
  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  });
}
