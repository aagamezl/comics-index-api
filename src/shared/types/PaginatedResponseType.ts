import { ClassType, Field, Int, ObjectType } from 'type-graphql'

export function PaginatedResponse<TItem> (TItemClass: ClassType<TItem>): ClassType {
  @ObjectType(`Paginated${TItemClass.name}Response`)
  class PaginatedResponseClass {
    @Field(() => [TItemClass])
    rows: TItem[]

    @Field(() => Int)
    count: number
  }

  return PaginatedResponseClass
}
