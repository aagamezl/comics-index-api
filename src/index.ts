import * as path from 'path'

import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

const PORT: number = Number(process.env.PORT) ?? 4000

const bootstrap = async (): Promise<void> => {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, 'modules/**/*.{ts,js}')],
    // or create the file with schema in selected path
    emitSchemaFile: path.resolve(__dirname, '__snapshots__/schema/schema.gql')
  })

  // Create the GraphQL server
  const server = new ApolloServer({
    introspection: true,
    playground: true,
    schema
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap().catch(error => console.error(error))
