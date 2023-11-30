import swaggerAutogen  from 'swagger-autogen'
const outputFile = './swagger-docs/swagger.json';
const endpointsFiles = ['./app/routes/*.js'];
const config = {

    info: {
      title: 'Gibg API',
      description: 'Example of CRUD API ',
      version: '1.0.0',
    },
    externalDocs: {                // <<< this will add the link to your swagger page
      description: "swagger.json", // <<< link text
      url: "./swagger.json"         // <<< and the file added below in api.get(...)
    }, 
    securityDefinitions: {
     apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x_access_token', // Change this to the header name you're using
        },
      petstore_auth: {
          type: "oauth2",
          authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
          flow: "implicit",
          scopes: {
              read_pets: "read your pets",
              write_pets: "modify pets in your account"
          },
          security: [
            {
              apiKeyAuth: [], // Reference the security scheme defined above
            },
          ],
      },
      
  },
    
  tags: [ ],
  host: 'localhost:5000',
  schemes: ['http', 'https'],
  
};

 //const swaggerSpec = swaggerJsdoc(options)

// function swaggerDocs(app, port) {
//   // Swagger Page
//    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//   // Docs in JSON format
//   app.get('/swagger.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.send(swaggerSpec)
//   })
//   console.info(`Docs available at http://localhost:${port}/docs`)
// }

swaggerAutogen(outputFile, endpointsFiles, config);

//export default swaggerDocs
