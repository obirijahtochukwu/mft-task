import type { CollectionConfig } from 'payload'

const Students: CollectionConfig = {
  slug: 'students',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'image', type: 'text' },
    { name: 'comment', type: 'text' },
    { name: 'online', type: 'checkbox' },
    { name: 'date', type: 'text' },
    {
      name: 'subjects',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'lessons', type: 'text' },
        { name: 'score', type: 'number' },
        { name: 'logo', type: 'text' },
      ],
    },
  ],
}

export default Students
