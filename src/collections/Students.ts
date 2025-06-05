import type { CollectionConfig } from "payload";

const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "image",
      type: "text",
      admin: {
        description: "Paste image URL here",
      },
    },
    { name: "comment", type: "text" },
    { name: "online", type: "checkbox" },
    { name: "date", type: "text" },
    {
      name: "subjects",
      type: "array",
      fields: [
        {
          name: "name",
          type: "select",
          options: [
            { label: "Math", value: "math" },
            { label: "Science", value: "science" },
            { label: "Grammer", value: "grammer" },
          ],
          required: true,
        },
        { name: "lessons", type: "text" },
        { name: "score", type: "number" },
      ],
    },
  ],
};

export default Students;
