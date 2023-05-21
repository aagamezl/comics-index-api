import {
  Query,
  Resolver
} from 'type-graphql'

import { Comic } from './ComicEntity'

@Resolver(Comic)
export class ComicResolver {
  private readonly ComicsCollection: Comic[] = []

  @Query(() => [Comic])
  async comics (): Promise<Comic[]> {
    console.log('Comics')

    return this.ComicsCollection
  }
}
