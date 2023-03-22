/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /docs/getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
*/


export const leftNavItems = [
  {
    name: 'Introduction',
    parentSlug: 'introduction',
    url: '/docs/introduction/overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/docs/introduction/overview/',
      },
      {
        name: 'Other resources',
        url: '/docs/introduction/resources/',
      },
      {
        name: 'Feedback',
        url: '/docs/introduction/feedback/',
      },
    ],
  },
  {
    name: 'Getting started',
    parentSlug: 'getting-started',
    url: '/docs/getting-started/overview/',
    subMenuItems1: [
      {
        name: 'Getting started',
        url: '/docs/getting-started/overview/',
      },
      {
        name: 'Installing and updating Postman',
        url: '/docs/getting-started/installation-and-updates/',
      },
      {
        name: 'Navigating Postman',
        url: '/docs/getting-started/navigating-postman/',
      },
      {
        name: 'Sending your first request',
        url: '/docs/getting-started/sending-the-first-request/',
      },
      {
        name: 'Managing your account',
        url: '/docs/getting-started/postman-account/',
      },
      {
        name: 'Customizing your Postman profile',
        url: '/docs/getting-started/postman-profile/',
      },
      {
        name: 'Syncing your work',
        url: '/docs/getting-started/syncing/',
      },
      {
        name: 'Exploring the Public API Network',
        url: '/docs/getting-started/exploring-public-api-network/',
      },
      {
        name: 'Creating your first collection',
        url: '/docs/getting-started/creating-the-first-collection/',
      },
      {
        name: 'About the Postman Agent',
        url: '/docs/getting-started/about-postman-agent/',
      },
      {
        name: 'Using the Scratch Pad',
        url: '/docs/getting-started/using-scratch-pad/',
      },
      {
        name: 'Creating a workspace',
        url: '/docs/getting-started/creating-your-first-workspace/',
      },
      {
        name: 'Setting up Postman',
        url: '/docs/getting-started/settings/',
      },
      {
        name: 'Importing and exporting data',
        url: '/docs/getting-started/importing-and-exporting-data/',
      },
      {
        name: 'Using a custom proxy',
        url: '/docs/getting-started/proxy/',
      },
      {
        name: 'Troubleshooting app issues',
        url: '/docs/getting-started/troubleshooting-inapp/',
      },
    ],
  },
  {
    name: 'Sending requests',
    parentSlug: 'sending-requests',
    url: '/docs/sending-requests/requests/',
    subMenuItems1: [
      {
        name: 'Building requests',
        url: '/docs/sending-requests/requests/',
      },
      {
        name: 'Authorizing requests',
        url: '/docs/sending-requests/authorization/',
      },
      {
        name: 'Receiving responses',
        url: '/docs/sending-requests/responses/',
      },
      {
        name: 'Grouping requests in collections',
        url: '/docs/sending-requests/intro-to-collections/',
      },
      {
        name: 'Using variables',
        url: '/docs/sending-requests/variables/',
      },
      {
        name: 'Managing environments',
        url: '/docs/sending-requests/managing-environments/',
      },
      {
        name: 'Visualizing responses',
        url: '/docs/sending-requests/visualizer/',
      },
      {
        name: 'Specifying examples',
        url: '/docs/sending-requests/examples/',
      },
      {
        name: 'Using cookies',
        url: '/docs/sending-requests/cookies/',
      },
      {
        name: 'Working with certificates',
        url: '/docs/sending-requests/certificates/',
      },
      {
        name: 'Generating client code',
        url: '/docs/sending-requests/generate-code-snippets/',
      },
      {
        name: 'Troubleshooting requests',
        url: '/docs/sending-requests/troubleshooting-api-requests/',
      },
      {
        name: 'Capturing request data',
        subParentSlug: 'capturing-request-data',
        slug: '/docs/sending-requests/capturing-request-data/capture-overview/',
        subMenuItems2: [
          {
            name: 'Capturing request data overview',
            url: '/docs/sending-requests/capturing-request-data/capture-overview/',
          },
          {
            name: 'Capturing HTTP requests',
            url: '/docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
          {
            name: 'Capturing HTTPS traffic',
            url: '/docs/sending-requests/capturing-request-data/capturing-https-traffic/',
          },
          {
            name: 'Using Postman Interceptor',
            url: '/docs/sending-requests/capturing-request-data/interceptor/',
          },
          {
            name: 'Syncing cookies',
            url: '/docs/sending-requests/capturing-request-data/syncing-cookies/',
          },
        ],
      },
      {
        name: 'Querying with GraphQL',
        url: '/docs/sending-requests/graphql/graphql/',
      },
      {
        name: 'Using gRPC requests',
        subParentSlug: 'grpc',
        slug: '/docs/sending-requests/grpc/grpc-client-overview/',
        subMenuItems2: [
          {
            name: 'gRPC overview',
            url: '/docs/sending-requests/grpc/grpc-client-overview/',
          },
          {
            name: 'Using the gRPC request interface',
            url: '/docs/sending-requests/grpc/grpc-request-interface/',
          },
          {
            name: 'Invoking your first gRPC request',
            url: '/docs/sending-requests/grpc/first-grpc-request/',
          },
          {
            name: 'Working with service definitions',
            url: '/docs/sending-requests/grpc/using-service-definition/',
          },
          {
            name: 'Scripting in gRPC requests',
            url: '/docs/sending-requests/grpc/scripting-in-grpc-request/',
          },
          {
            name: 'gRPC test examples',
            url: '/docs/sending-requests/grpc/test-examples/',
          },
          {
            name: 'Postman Sandbox API',
            url: '/docs/sending-requests/grpc/postman-sandbox-api/',
          },
          {
            name: 'Using gRPC mock servers',
            url: '/docs/sending-requests/grpc/using-grpc-mock/',
          },
          {
            name: 'Using gRPC examples',
            url: '/docs/sending-requests/grpc/using-grpc-examples/',
          },
          {
            name: 'Understanding gRPC types',
            url: '/docs/sending-requests/grpc/understanding-grpc-types/',
          },
        ],
      },
      {
        name: 'Using WebSocket requests',
        url: '/docs/sending-requests/websocket/websocket/',
      },
      {
        name: 'Using SOAP requests',
        url: '/docs/sending-requests/soap/making-soap-requests/',
      },
    ],
  },
  {
    name: 'Writing scripts',
    parentSlug: 'writing-scripts',
    url: '/docs/writing-scripts/intro-to-scripts/',
    subMenuItems1: [
      {
        name: 'Scripting in Postman',
        url: '/docs/writing-scripts/intro-to-scripts/',
      },
      {
        name: 'Writing pre-requests scripts',
        url: '/docs/writing-scripts/pre-request-scripts/',
      },
      {
        name: 'Writing tests',
        url: '/docs/writing-scripts/test-scripts/',
      },
      {
        name: 'Running tests with monitors',
        url: '/docs/writing-scripts/test-with-monitors/',
      },
      {
        name: 'Script references',
        subParentSlug: 'script-references',
        slug: '/docs/writing-scripts/script-references/test-examples/',
        subMenuItems2: [
          {
            name: 'Test script examples',
            url: '/docs/writing-scripts/script-references/test-examples/',
          },
          {
            name: 'Dynamic variables',
            url: '/docs/writing-scripts/script-references/variables-list/',
          },
          {
            name: 'Postman JavaScript reference',
            url: '/docs/writing-scripts/script-references/postman-sandbox-api-reference/',
          },
        ],
      },
    ],
  },
  {
    name: 'Using collections',
    parentSlug: 'collections',
    url: '/docs/collections/collections-overview/',
    subMenuItems1: [
      {
        name: 'Collections overview',
        url: '/docs/collections/collections-overview/',
      },
      {
        name: 'Using collections',
        url: '/docs/collections/using-collections/',
      },
      {
        name: 'Running collections',
        subParentSlug: 'running-collections',
        slug: '/docs/collections/running-collections/running-collections-overview/',
        subMenuItems2: [
          {
            name: 'Running collections overview',
            url: '/docs/collections/running-collections/running-collections-overview/',
          },
          {
            name: 'Using the Collection Runner',
            url: '/docs/collections/running-collections/intro-to-collection-runs/',
          },
          {
            name: 'Scheduling collection runs',
            url: '/docs/collections/running-collections/scheduling-collection-runs/',
          },
          {
            name: 'Viewing scheduled collection runs',
            url: '/docs/collections/running-collections/viewing-scheduled-collection-runs/',
          },
          {
            name: 'Scheduling collection runs with monitors',
            url: '/docs/collections/running-collections/scheduling-collection-runs-monitors/',
          },
          {
            name: 'Triggering runs with webhooks',
            url: '/docs/collections/running-collections/collection-webhooks/',
          },
          {
            name: 'Building request workflows',
            url: '/docs/collections/running-collections/building-workflows/',
          },
          {
            name: 'Importing data files',
            url: '/docs/collections/running-collections/working-with-data-files/',
          },
        ],
      },
      {
        name: "Using Live Collections",
        subParentSlug: 'live-collections',
        slug: '/docs/collections/live-collections/live-collections-overview/',
        subMenuItems2: [
          {
            name: 'Live Collection overview',
            url: '/docs/collections/live-collections/live-collections-overview/',
          },
          {
            name: 'Live Collection setup',
            url: '/docs/collections/live-collections/live-collections-setup/',
          },
          {
            name: 'Updating Live Collections',
            url: '/docs/collections/live-collections/update-live-collections/',
          },
          {
            name: 'Live Collection settings',
            url: '/docs/collections/live-collections/live-collections-settings/',
          },
        ],
      },
      {
        name: 'Using Newman CLI',
        subParentSlug: 'using-newman-cli',
        slug: '/docs/collections/using-newman-cli/command-line-integration-with-newman/',
        subMenuItems2: [
          {
            name: 'Running collections on the command line with Newman',
            url: '/docs/collections/using-newman-cli/command-line-integration-with-newman/',
          },
          {
            name: 'Installing and running Newman',
            url: '/docs/collections/using-newman-cli/installing-running-newman/',
          },
          {
            name: 'Newman command options',
            url: '/docs/collections/using-newman-cli/newman-options/',
          },
          {
            name: 'Uploading files in Newman',
            url: '/docs/collections/using-newman-cli/newman-file-uploads/',
          },
          {
            name: 'Using Newman custom reporters',
            url: '/docs/collections/using-newman-cli/newman-custom-reporters/',
          },
          {
            name: 'Newman with Docker',
            url: '/docs/collections/using-newman-cli/newman-with-docker/',
          },
          {
            name: 'CI with Postman API',
            url: '/docs/collections/using-newman-cli/continuous-integration/',
          },
          {
            name: 'Integrating with Travis CI',
            url: '/docs/collections/using-newman-cli/integration-with-travis/',
          },
          {
            name: 'Integrating with Jenkins',
            url: '/docs/collections/using-newman-cli/integration-with-jenkins/',
          },
        ],
      },
    ],
  },
  {
    name: 'Using Postman Flows',
    parentSlug: 'postman-flows',
    url: '/docs/postman-flows/gs/flows-overview/',
    subMenuItems1: [
      {
        name: 'Getting started',
        subParentSlug: 'gs',
        slug: '/docs/postman-flows/gs/flows-overview/',
        subMenuItems2: [
          {
            name: 'Postman Flows overview',
            url: '/docs/postman-flows/gs/flows-overview/',
          },
          {
            name: 'About blocks and messages',
            url: '/docs/postman-flows/gs/blocks-information/',
          },
          {
            name: 'The Postman Flows interface',
            url: '/docs/postman-flows/gs/the-interface/',
          },
        ],
      },
      {
        name: 'Postman Flows tutorials',
        subParentSlug: 'tutorials',
        slug: '/docs/postman-flows/tutorials/building-your-first-flow/',
        subMenuItems2: [
          {
            name: 'Building your first flow',
            url: '/docs/postman-flows/tutorials/building-your-first-flow/',
          },
          {
            name: 'Passing data between blocks',
            url: '/docs/postman-flows/tutorials/passing-data-between-blocks/',
          },
          {
            name: 'Running requests in sequence',
            url: '/docs/postman-flows/tutorials/running-requests-in-sequence/',
          },
          {
            name: 'Using authorization with Postman Flows',
            url: '/docs/postman-flows/tutorials/using-auth-with-flows/',
          },
          {
            name: 'Using response data in a request',
            url: '/docs/postman-flows/tutorials/using-response-data-in-a-request/',
          },
          {
            name: 'Using webhooks with Postman Flows',
            url: '/docs/postman-flows/tutorials/webhooks/',
          },
          {
            name: 'Creating charts, tables, and output',
            url: '/docs/postman-flows/tutorials/creating-charts-tables-and-output/',
          },
        ],
      },
      {
        name: 'Flows Query Language',
        subParentSlug: 'flows-query-language',
        slug: '/docs/postman-flows/flows-query-language/introduction-to-fql/',
        subMenuItems2: [
          {
            name: 'Introduction to Flows Query Language',
            url: '/docs/postman-flows/flows-query-language/introduction-to-fql/',
          },
          {
            name: 'Getting basic values',
            url: '/docs/postman-flows/flows-query-language/getting-basic-values/',
          },
          {
            name: 'Selecting conditional data',
            url: '/docs/postman-flows/flows-query-language/conditional-data-selection/',
          },
          {
            name: 'Returning structured data',
            url: '/docs/postman-flows/flows-query-language/returning-structured-results/',
          },
          {
            name: 'Manipulating data',
            url: '/docs/postman-flows/flows-query-language/data-manipulation/',
          },
          {
            name: 'FQL function reference',
            url: '/docs/postman-flows/flows-query-language/function-reference/',
          },
        ],
      },
      {
        name: 'Postman Flows reference',
        subParentSlug: 'reference',
        slug: '/docs/postman-flows/reference/blocks-list/',
        subMenuItems2: [
          {
            name: 'Postman Flows blocks',
            url: '/docs/postman-flows/reference/blocks-list/',
          },
          {
            name: 'Postman Flows data types',
            url: '/docs/postman-flows/reference/data-types/',
          },
        ]
      },
    ],
  },
  {
    name: 'Using the Postman CLI',
    parentSlug: 'postman-cli',
    url: '/docs/postman-cli/postman-cli-overview/',
    subMenuItems1: [
      {
        name: 'Postman CLI overview',
        url: '/docs/postman-cli/postman-cli-overview/',
      },
      {
        name: 'Installing the Postman CLI',
        url: '/docs/postman-cli/postman-cli-installation/',
      },
      {
        name: 'Postman CLI command options',
        url: '/docs/postman-cli/postman-cli-options/',
      },
      {
        name: 'Running a collection with the Postman CLI',
        url: '/docs/postman-cli/postman-cli-run-collection/',
      },
    ],
  },
  {
    name: 'Collaborating in Postman',
    parentSlug: 'collaborating-in-postman',
    url: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
    subMenuItems1: [
      {
        name: 'Working with your team',
        subParentSlug: 'working-with-your-team',
        slug: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
        subMenuItems2: [
          {
            name: 'Collaboration overview',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaboration-overview/',
          },
          {
            name: 'Enabling team discovery',
            url: '/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/',
          },
          {
            name: 'Collaborating in team workspaces',
            url: '/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/',
          },
          {
            name: 'Discussing your work',
            url: '/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/',
          },
        ],
      },
      {
        name: 'Defining roles',
        url: '/docs/collaborating-in-postman/roles-and-permissions/',
      },
      {
        name: 'Requesting access',
        url: '/docs/collaborating-in-postman/requesting-access-to-collections/',
      },
      {
        name: 'Sharing your work',
        url: '/docs/collaborating-in-postman/sharing/',
      },
      {
        name: 'Your Private API Network',
        url: '/docs/collaborating-in-postman/adding-private-network/',
      },
      {
        name: 'Using version control',
        subParentSlug: 'using-version-control',
        slug: '/docs/collaborating-in-postman/using-version-control/version-control-overview/',
        subMenuItems2: [
          {
            name: 'Version control overview',
            url: '/docs/collaborating-in-postman/using-version-control/version-control-overview/',
          },
          {
            name: 'Forking Postman entities',
            url: '/docs/collaborating-in-postman/using-version-control/forking-entities/',
          },
          {
            name: 'Creating pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/creating-pull-requests/',
          },
          {
            name: 'Reviewing pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/reviewing-pull-requests/',
          },
          {
            name: 'Watching pull requests',
            url: '/docs/collaborating-in-postman/using-version-control/watching-pull-requests/',
          },
        ],
      },
      {
        name: 'Managing public elements',
        url: '/docs/collaborating-in-postman/manage-public-elements/',
      },
      {
        name: 'Using workspaces',
        subParentSlug: 'using-workspaces',
        slug: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
        subMenuItems2: [
          {
            name: 'Creating workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/creating-workspaces/',
          },
          {
            name: 'Using and managing workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/managing-workspaces/',
          },
          {
            name: 'Partner Workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/partner-workspaces/'
          },
          {
            name: 'Public workspaces',
            url: '/docs/collaborating-in-postman/using-workspaces/public-workspaces/'
          },
          {
            name: 'Viewing workspace activity',
            url: '/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/',
          },
          {
            name: 'Resolving team conflicts',
            url: '/docs/collaborating-in-postman/using-workspaces/conflicts/',
          },
        ],
      },
    ],
  },
  {
    name: 'Designing and developing your API',
    parentSlug: 'designing-and-developing-your-api',
    url: '/docs/designing-and-developing-your-api/the-api-workflow/',
    subMenuItems1: [
      {
        name: 'API development overview',
        url: '/docs/designing-and-developing-your-api/the-api-workflow/',
      },
      {
        name: 'Creating an API',
        url: '/docs/designing-and-developing-your-api/creating-an-api/',
      },
      {
        name: 'Importing an API',
        url: '/docs/designing-and-developing-your-api/importing-an-api/',
      },
      {
        name: 'Using API version control',
        subParentSlug: 'versioning-an-api',
        slug: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
        subMenuItems2: [
          {
            name: 'API version control overview',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/versioning-an-api-overview/',
          },
          {
            name: 'Using a remote Git repository',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/using-external-git-repo/',
          },
          {
            name: 'Managing changes using Git',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/managing-git-changes/',
          },
          {
            name: 'Publishing an API version',
            url: '/docs/designing-and-developing-your-api/versioning-an-api/api-versions/',
          },
        ],
      },
      {
        name: 'Developing an API',
        subParentSlug: 'developing-an-api',
        slug: '/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/',
        subMenuItems2: [
          {
            name: 'Editing an API definition',
            url: '/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/',
          },
          {
            name: 'Adding elements to an API',
            url: '/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/',
          },
          {
            name: 'Generating server code',
            url: '/docs/designing-and-developing-your-api/developing-an-api/generating-server-code/',
          },
          {
            name: 'Validating APIs',
            url: '/docs/designing-and-developing-your-api/developing-an-api/validating-elements-against-schema/',
          },
        ],
      },
      {
        name: 'Testing an API',
        url: '/docs/designing-and-developing-your-api/testing-an-api/',
      },
      {
        name: 'Deploying an API',
        subParentSlug: 'deploying-an-api',
        slug: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
        subMenuItems2: [
          {
            name: 'Deploying an API overview',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-overview/',
          },
          {
            name: 'Deploying an AWS API',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-aws/',
          },
          {
            name: 'Deploying an Apigee API',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/',
          },
          {
            name: 'Deploying an Azure API',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/',
          },
        ],
      },
      {
        name: 'Observing an API',
        subParentSlug: 'observing-an-api',
        slug: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
        subMenuItems2: [
          {
            name: 'Observing an API',
            url: '/docs/designing-and-developing-your-api/observing-an-api/observing-an-api/',
          },
          {
            name: 'Viewing New Relic metrics',
            url: '/docs/designing-and-developing-your-api/observing-an-api/new-relic-apm/',
          },
          {
            name: 'Viewing Datadog metrics',
            url: '/docs/designing-and-developing-your-api/observing-an-api/datadog-apm/',
          },
        ],
      },
      {
        name: 'Managing and sharing APIs',
        url: '/docs/designing-and-developing-your-api/managing-apis/',
      },
      {
        name: 'Mocking an API',
        subParentSlug: 'mocking-data',
        slug: '/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/',
        subMenuItems2: [
          {
            name: 'Setting up mock servers',
            url: '/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/',
          },
          {
            name: 'Creating dynamic mock responses',
            url: '/docs/designing-and-developing-your-api/mocking-data/creating-dynamic-responses/',
          },
          {
            name: 'Mocking with examples',
            url: '/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/',
          },
          {
            name: 'Mocking with the Postman API',
            url: '/docs/designing-and-developing-your-api/mocking-data/mock-with-api/',
          },
          {
            name: 'Understanding example matching',
            url: '/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/',
          },
        ],
      },
    ],
  },
  {
    name: 'Documenting your API',
    parentSlug: 'publishing-your-api',
    url: '/docs/publishing-your-api/documenting-your-api/',
    subMenuItems1: [
      {
        name: 'Generating API documentation',
        url: '/docs/publishing-your-api/documenting-your-api/',
      },
      {
        name: 'Writing your docs',
        url: '/docs/publishing-your-api/authoring-your-documentation/',
      },
      {
        name: 'Publishing your docs',
        url: '/docs/publishing-your-api/publishing-your-docs/',
      },
      {
        name: 'Viewing documentation',
        url: '/docs/publishing-your-api/viewing-documentation/',
      },
      {
        name: 'Using custom domains',
        url: '/docs/publishing-your-api/custom-doc-domains/',
      },
      {
        name: 'Run in Postman',
        subParentSlug: 'run-in-postman',
        slug: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
        subMenuItems2: [
          {
            name: 'Using Run in Postman buttons',
            url: '/docs/publishing-your-api/run-in-postman/introduction-run-button/',
          },
          {
            name: 'Creating Run in Postman buttons',
            url: '/docs/publishing-your-api/run-in-postman/creating-run-button/',
          },
          {
            name: 'Coding with Run in Postman',
            url: '/docs/publishing-your-api/run-in-postman/run-button-API/',
          },
        ],
      },
    ],
  },
  {
    name: 'Monitoring your API',
    parentSlug: 'monitoring-your-api',
    url: '/docs/monitoring-your-api/intro-monitors/',
    subMenuItems1: [
      {
        name: 'Monitoring your APIs',
        url: '/docs/monitoring-your-api/intro-monitors/',
      },
      {
        name: 'Monitoring API uptime',
        url: '/docs/monitoring-your-api/uptime-monitors/',
      },
      {
        name: 'Setting up a collection-based monitor',
        url: '/docs/monitoring-your-api/setting-up-monitor/',
      },
      {
        name: 'Viewing collection-based monitor results',
        url: '/docs/monitoring-your-api/viewing-monitor-results/',
      },
      {
        name: 'Managing monitor usage',
        url: '/docs/monitoring-your-api/monitor-usage/',
      },
      {
        name: 'Running monitors using static IPs',
        url: '/docs/monitoring-your-api/using-static-IPs-to-monitor/',
      },
      {
        name: 'Troubleshooting monitors',
        url: '/docs/monitoring-your-api/troubleshooting-monitors/',
      },
      {
        name: 'Monitoring FAQs',
        url: '/docs/monitoring-your-api/faqs-monitors/',
      },
    ],
  },
  {
    name: 'API Governance',
    parentSlug: 'api-governance',
    url: '/docs/api-governance/api-governance-overview/',
    subMenuItems1: [
      {
        name: 'API Governance and API Security in Postman',
        url: '/docs/api-governance/api-governance-overview/',
      },
      {
        name: 'API definition',
        subParentSlug: 'api-definition',
        slug: '/docs/api-governance/api-definition/api-definition-warnings/',
        subMenuItems2: [
          {
            name: 'Rule violations in the API definition',
            url: '/docs/api-governance/api-definition/api-definition-warnings/',
          },
          {
            name: 'OpenAPI 3.0 rules',
            url: '/docs/api-governance/api-definition/openapi3/',
          },
          {
            name: 'OpenAPI 2.0 rules',
            url: '/docs/api-governance/api-definition/openapi2/',
          },
        ],
      },
      {
        name: 'Requests',
        subParentSlug: 'api-testing',
        slug: '/docs/api-governance/api-testing/api-testing-warnings/',
        subMenuItems2: [
          {
            name: 'Warnings in API requests',
            url: '/docs/api-governance/api-testing/api-testing-warnings/',
          },
          {
            name: 'Security warnings',
            url: '/docs/api-governance/api-testing/security-warnings/',
          },
        ],
      },
      {
        name: 'Configurable rules',
        subParentSlug: 'configurable-rules',
        slug: '/docs/api-governance/configurable-rules/configurable-rules-overview/',
        subMenuItems2: [
          {
            name: 'Configurable rules overview',
            url: '/docs/api-governance/configurable-rules/configurable-rules-overview/',
          },
          {
            name: 'Configuring API Governance rules',
            url: '/docs/api-governance/configurable-rules/configuring-api-governance-rules/',
          },
          {
            name: 'Configuring API Security rules',
            url: '/docs/api-governance/configurable-rules/configuring-api-security-rules/',
          },
          {
            name: 'Using Spectral in Postman',
            url: '/docs/api-governance/configurable-rules/spectral/',
          },
        ],
      },
    ],
  },
  {
    name: 'Administration',
    parentSlug: 'administration',
    url: '/docs/administration/managing-your-team/managing-your-team/',
    subMenuItems1: [
      {
        name: 'Managing your team',
        subParentSlug: 'managing-your-team',
        slug: '/docs/administration/managing-your-team/managing-your-team/',
        subMenuItems2: [
          {
            name: 'Managing your team',
            url: '/docs/administration/managing-your-team/managing-your-team/',
          },
          {
            name: 'Managing user groups',
            url: '/docs/administration/managing-your-team/user-groups/',
          },
          {
            name: 'Configuring domain verification and capture',
            url: '/docs/administration/managing-your-team/configuring-domain-capture/',
          },
        ],
      },
      {
        name: 'Purchasing Postman',
        url: '/docs/administration/buying/',
      },
      {
        name: 'Billing',
        url: '/docs/administration/billing/',
      },
      {
        name: 'About resource usage',
        url: '/docs/administration/resource-usage/',
      },
      {
        name: 'About Postman Enterprise',
        url: '/docs/administration/about-postman-enterprise/'
      },
      {
        name: 'Configuring team settings',
        url: '/docs/administration/team-settings/',
      },
      {
        name: 'Using audit logs',
        url: '/docs/administration/audit-logs/',
      },
      {
        name: 'Token scanner',
        url: '/docs/administration/token-scanner/',
      },
      {
        name: 'Onboarding checklist',
        url: '/docs/administration/onboarding-checklist/',
      },
      {
        name: 'Migrating data between teams',
        url: '/docs/administration/team-merge/',
      },
      {
        name: 'Single Sign-On (SSO)',
        subParentSlug: 'sso',
        slug: '/docs/administration/sso/intro-sso/',
        subMenuItems2: [
          {
            name: 'Intro to SSO',
            url: '/docs/administration/sso/intro-sso/',
          },
          {
            name: 'Configuring SSO for a team',
            url: '/docs/administration/sso/admin-sso/',
          },
          {
            name: 'Signing in to an SSO team',
            url: '/docs/administration/sso/user-sso/',
          },
          {
            name: 'Microsoft AD FS',
            url: '/docs/administration/sso/microsoft-adfs/',
          },
          {
            name: 'Azure AD',
            url: '/docs/administration/sso/azure-ad/',
          },
          {
            name: 'Duo',
            url: '/docs/administration/sso/duo/',
          },
          {
            name: 'Google Workspace',
            url: '/docs/administration/sso/google-workspace/',
          },
          {
            name: 'Okta',
            url: '/docs/administration/sso/okta/',
          },
          {
            name: 'OneLogin',
            url: '/docs/administration/sso/onelogin/',
          },
          {
            name: 'Ping Identity',
            url: '/docs/administration/sso/ping-identity/',
          },
        ],
      },
      {
        name: 'SCIM provisioning',
        subParentSlug: 'scim-provisioning',
        slug: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
        subMenuItems2: [
          {
            name: 'SCIM provisioning overview',
            url: '/docs/administration/scim-provisioning/scim-provisioning-overview/',
          },
          {
            name: 'Configuring SCIM with Okta',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-okta/',
          },
          {
            name: 'Configuring SCIM with Azure AD',
            url: '/docs/administration/scim-provisioning/configuring-scim-with-azure-ad/',
          },
          {
            name: `Configuring SCIM with OneLogin`,
            url: `/docs/administration/scim-provisioning/configuring-scim-with-onelogin/`
          }
        ],
      },
      {
        name: 'Updating your team to the current version of Postman',
        url: '/docs/administration/updating/',
      },
      {
        name: 'Managing Enterprise deployment',
        url: '/docs/administration/managing-enterprise-deployment/',
      },
      {
        name: 'Admin FAQs',
        url: '/docs/administration/admin-faqs/',
      },
    ],
  },
  {
    name: 'Using reports',
    parentSlug: 'reports',
    url: '/docs/reports/reports-overview/',
    subMenuItems1: [
      {
        name: 'Reports overview',
        url: '/docs/reports/reports-overview/',
      },
      {
        name: 'Summary reports',
        url: '/docs/reports/summary-reports/',
      },
      {
        name: 'Team details reports',
        url: '/docs/reports/team-details-reports/',
      },
      {
        name: 'All Workspaces reports',
        url: '/docs/reports/all-workspaces-reports/',
      },
      {
        name: 'All APIs reports',
        url: '/docs/reports/all-apis-reports/',
      },
      {
        name: 'API Security reports',
        url: '/docs/reports/api-security-reports/',
      },
      {
        name: 'API Governance reports',
        url: '/docs/reports/api-governance-reports/',
      },
      {
        name: 'Token Scanner reports',
        url: '/docs/reports/security-audit-reports/',
      },
    ],
  },
  {
    name: 'Developer resources',
    parentSlug: 'developer',
    url: '/docs/developer/resources-intro/',
    subMenuItems1: [
      {
        name: 'Developing with Postman utilities',
        url: '/docs/developer/resources-intro/',
      },
      {
        name: 'Postman API',
        url: '/docs/developer/intro-api/',
      },
      {
        name: 'Echo API',
        url: '/docs/developer/echo-api/',
      },
      {
        name: 'Collection SDK',
        url: '/docs/developer/collection-sdk/',
      },
      {
        name: 'Postman Runtime library',
        url: '/docs/developer/runtime-library/',
      },
      {
        name: 'Code generator library',
        url: '/docs/developer/code-generators/',
      },
      {
        name: 'Postman Collection conversion',
        url: '/docs/developer/collection-conversion/',
      },
    ],
  },
  {
    name: 'Integrations',
    parentSlug: 'integrations',
    url: '/docs/integrations/intro-integrations/',
    subMenuItems1: [
      {
        name: 'Integrating with Postman',
        url: '/docs/integrations/intro-integrations/',
      },
      {
        name: 'Custom Webhooks',
        url: '/docs/integrations/webhooks/',
      },
      {
        name: 'Installed apps',
        url: '/docs/integrations/installed-apps/'
      },
      {
        name: 'CI integrations',
        url: '/docs/integrations/ci-integrations/',
      },
      {
        name: 'Available integrations',
        subParentSlug: 'available-integrations',
        slug: '/docs/integrations/available-integrations/apimatic/',
        subMenuItems2: [
          {
            name: 'APIMatic',
            url: '/docs/integrations/available-integrations/apimatic/',
          },
          {
            name: 'Apigee API Gateway',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-apigee/',
          },
          {
            name: 'AWS API Gateway',
            url: '/docs/integrations/available-integrations/aws-api-gateway/',
          },
          {
            name: 'Azure API Management',
            url: '/docs/designing-and-developing-your-api/deploying-an-api/deploying-an-api-azure/',
          },
          {
            name: 'Azure DevOps',
            url: '/docs/integrations/available-integrations/azure-devops/',
          },
          {
            name: 'Azure Pipelines',
            url: '/docs/integrations/available-integrations/ci-integrations/azure-pipelines/',
          },
          {
            name: 'BigPanda',
            url: '/docs/integrations/available-integrations/bigpanda/',
          },
          {
            name: 'Bitbucket',
            url: '/docs/integrations/available-integrations/bitbucket/',
          },
          {
            name: 'Bitbucket Pipelines',
            url: '/docs/integrations/available-integrations/ci-integrations/bitbucket-pipelines/',
          },
          {
            name: 'CircleCI',
            url: '/docs/integrations/available-integrations/ci-integrations/circleci/',
          },
          {
            name: 'Coralogix',
            url: '/docs/integrations/available-integrations/coralogix/',
          },
          {
            name: 'Datadog',
            url: '/docs/integrations/available-integrations/datadog/',
          },
          {
            name: 'Dropbox',
            url: '/docs/integrations/available-integrations/dropbox/',
          },
          {
            name: 'GitHub',
            url: '/docs/integrations/available-integrations/github/',
          },
          {
            name: 'GitHub Actions',
            url: '/docs/integrations/available-integrations/ci-integrations/github-actions/',
          },
          {
            name: 'GitLab',
            url: '/docs/integrations/available-integrations/gitlab/',
          },
          {
            name: 'GitLab CI/CD',
            url: '/docs/integrations/available-integrations/ci-integrations/gitlab-ci/',
          },
          {
            name: 'Jenkins',
            url: '/docs/integrations/available-integrations/ci-integrations/jenkins/',
          },
          {
            name: 'Keen',
            url: '/docs/integrations/available-integrations/keen/',
          },
          {
            name: 'Lightstep',
            url: '/docs/integrations/available-integrations/lightstep/',
          },
          {
            name: 'Microsoft Power Automate',
            url: '/docs/integrations/available-integrations/microsoft-power-automate/',
          },
          {
            name: 'Microsoft Teams',
            url: '/docs/integrations/available-integrations/microsoft-teams/',
          },
          {
            name: 'New Relic',
            url: '/docs/integrations/available-integrations/new-relic/',
          },
          {
            name: 'OpenAPI',
            url: '/docs/integrations/available-integrations/working-with-openAPI/',
          },
          {
            name: 'Opsgenie',
            url: '/docs/integrations/available-integrations/opsgenie/',
          },
          {
            name: 'PagerDuty',
            url: '/docs/integrations/available-integrations/pagerduty/',
          },
          {
            name: 'Slack',
            url: '/docs/integrations/available-integrations/slack/',
          },
          {
            name: 'Splunk',
            url: '/docs/integrations/available-integrations/splunk/',
          },
          {
            name: 'Splunk On-Call',
            url: '/docs/integrations/available-integrations/splunk-on-call/',
          },
          {
            name: 'Statuspage',
            url: '/docs/integrations/available-integrations/statuspage/',
          },
          {
            name: 'Travis CI',
            url: '/docs/integrations/available-integrations/ci-integrations/travis-ci/',
          },
        ],
      },
    ],
  },
];

// export default parentSlugItems;
