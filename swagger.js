import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger-docs/swagger.json' assert { type: "json" };

//const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  // Docs in JSON format
  app.get('./swagger-docs/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  console.info(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs
