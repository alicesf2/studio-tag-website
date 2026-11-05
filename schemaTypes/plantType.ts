import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'scientific',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: "gifts",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "description",
              type: "string",
            }),
            defineField({
              name: "sources",
              type: "array",
              of: [
                defineArrayMember({
                  type: "string",
                })
              ]
            })
          ]
        })
      ]
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
