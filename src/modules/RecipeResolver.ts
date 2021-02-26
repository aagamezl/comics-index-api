import {
  Query,
  Resolver
} from 'type-graphql'

import { Recipe } from './Recipe'

@Resolver()
export class RecipeResolver {
  private readonly recipesCollection: Recipe[] = []

  @Query(() => [Recipe])
  async recipes (): Promise<Recipe[]> {
    console.log('recipes')

    return this.recipesCollection
  }
}
