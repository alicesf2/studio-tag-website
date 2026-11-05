import {defineArrayMember, defineField, defineType} from 'sanity'

export const narrativeType = defineType({
  name: 'narrative',
  title: 'Narrative',
  type: 'document',
  fields: [
    defineField({
      name: 'orderRank',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
  ],
})
