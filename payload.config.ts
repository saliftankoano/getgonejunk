import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, "src", "app", "(payload)", "admin", "importMap.js"),
    },
    meta: {
      titleSuffix: " - Get Gone Junk Removal Admin",
    },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "leads",
      admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "phone", "email", "source", "status", "createdAt"],
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "phone",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "details",
          type: "textarea",
        },
        {
          name: "source",
          type: "text",
        },
        {
          name: "photoCount",
          type: "number",
          required: true,
          min: 0,
          defaultValue: 0,
        },
        {
          name: "status",
          type: "select",
          options: [
            { label: "New", value: "new" },
            { label: "Contacted", value: "contacted" },
            { label: "Closed", value: "closed" },
          ],
          defaultValue: "new",
          required: true,
        },
      ],
    },
  ],
});
