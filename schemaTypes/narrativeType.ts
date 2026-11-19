import {defineField, defineType, defineArrayMember} from 'sanity'

export const narrativeType = defineType({
  name: 'narrative',
  title: 'Narrative',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      type: 'string',
    }),
    defineField({
      name: "text",
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: "intro",
      type: "string",
    }),
    defineField({
      name: 'plantView',
      type: 'string'
    }),
    defineField({
      name: "historyView",
      type: "string"
    }),
    defineField({
      name: "eventView",
      type: "string"
    })
  ],
})
