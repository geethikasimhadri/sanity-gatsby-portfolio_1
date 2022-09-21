export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '632b944a2b8a1f00bbbc4b83',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-aob1uo1k',
                  apiId: '8de9b8d9-02fe-4d29-a9c7-09d5e4da6fe4'
                },
                {
                  buildHookId: '632b944bf4b195009b03988a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-j17sbejs',
                  apiId: '5c380344-ed4d-4cee-b16c-3db281b01eda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geethikasimhadri/sanity-gatsby-portfolio_1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-j17sbejs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
