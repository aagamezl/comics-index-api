import * as path from 'path'

import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core'
import { buildSchema } from 'type-graphql'

const PORT: number = Number(process.env.PORT ?? 4000)

const bootstrap = async (): Promise<void> => {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, 'modules/**/*Resolver.{ts,js}')],
    // or create the file with schema in selected path
    emitSchemaFile: path.resolve(process.cwd(), '__snapshots__/schema/schema.gql')
  })

  // Create the GraphQL server
  const server = new ApolloServer({
    context: ({ req, res }: any) => ({ req, res }),
    introspection: true,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    schema
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.info(`🚀 Server ready at ${url}`)
}

bootstrap().catch(error => console.error(error))
