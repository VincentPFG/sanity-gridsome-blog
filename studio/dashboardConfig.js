export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5e0609f82799fce1f0d448f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-b5ho7bqg',
                  apiId: '8086f21c-f850-412f-b465-f45fd126bdb0'
                },
                {
                  buildHookId: '5e0609f9e516babcb686e815',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-3eiu9eqv',
                  apiId: 'd23781a2-8751-4d87-aa59-10cbb7c5b105'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VincentPFG/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-3eiu9eqv.netlify.com', category: 'apps'}
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
