"use server";

import config from "@payload-config";
import { handleServerFunctions } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";

export async function serverFunction(args: unknown) {
  return handleServerFunctions({
    ...(args as Record<string, unknown>),
    config,
    importMap,
  } as Parameters<typeof handleServerFunctions>[0]);
}
