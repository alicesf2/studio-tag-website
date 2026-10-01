import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'image',
          type: 'image',
        }),
      ],
    }),
  ],
})
