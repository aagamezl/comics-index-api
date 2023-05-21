import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Comic {
  @Field()
  title: string

  @Field({ deprecationReason: 'Use `title` instead' })
  get name (): string {
    return this.title
  }
}
