export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6074034773558d398ba7ba09',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3f4s6be4',
                  apiId: '4f8395c1-37c8-409a-8c65-d17d7d4a5c63'
                },
                {
                  buildHookId: '607403470da393205fbe0d48',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-keeddh8y',
                  apiId: 'c8e5c71e-a95f-435e-9e93-9234e9f6354a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesmandelbaum/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-keeddh8y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
