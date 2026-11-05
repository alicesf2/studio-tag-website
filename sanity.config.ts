import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'TAG Website',

  projectId: '2r5p4ytl',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'event', S, context}),
            orderableDocumentListDeskItem({type: 'plant', S, context}),

            // Optional configuration
            // orderableDocumentListDeskItem({
            //   type: 'project',
            //   title: 'Projects',
            //   icon: Paint,
            //   // Required if using multiple lists of the same 'type'
            //   id: 'orderable-en-projects',
            //   // See notes on adding a `filter` below
            //   filter: `__i18n_lang == $lang`,
            //   params: {
            //     lang: 'en_US',
            //   },
            //   createIntent: false, // do not add an option for item creation
            //   menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
            //   // pass from the structure callback params above
            //   S,
            //   context,
            // }),

            // ... all other desk items, e.g. all other document types not already included
            // @see https://www.sanity.io/docs/studio/structure-builder-cheat-sheet#k4eb3b1891dc2
            ...S.documentTypeListItems().filter(
              (item) => !['event', 'plant'].includes(item.getId()),
            ),
          ])
      },
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
