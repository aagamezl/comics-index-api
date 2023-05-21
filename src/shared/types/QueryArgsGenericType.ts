import { Max, Min } from 'class-validator'
import { ArgsType, ClassType, Field, Int } from 'type-graphql'

export function QueryArgsGeneric<TWhere, TOrder> (
  TWhereClass: ClassType<TWhere>, TOrderClass: ClassType<TOrder>
): ClassType {
  @ArgsType()
  class QueryArgsGenericClass {
    @Field(() => TWhereClass, { nullable: true })
    where: TWhere

    @Field(() => TOrderClass, { nullable: true })
    order?: TOrder

    @Field(() => Int, { nullable: true, defaultValue: 0 })
    @Min(0)
    skip?: number

    @Field(() => Int, { nullable: true, defaultValue: 25 })
    @Min(1)
    @Max(1000)
    take?: number = 25
  }

  return QueryArgsGenericClass
}
