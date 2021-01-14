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
                  buildHookId: '5fffa9ef12680517ba34db42',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hzmrtpf7',
                  apiId: '4eb3dd9b-1be6-4420-9061-2cadb80d291d'
                },
                {
                  buildHookId: '5fffa9ef8de95c15f08edef8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-31wkffcm',
                  apiId: 'e0de73f3-f480-4cb8-98b4-ac440ffc09fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roynewsite/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-31wkffcm.netlify.app', category: 'apps'}
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
