import { Field, InputType } from 'type-graphql'

import { Sort } from './../../../shared/types'

@InputType()
export class UserOrderByInput {
  @Field(() => Sort, { nullable: true })
  firstName?: Sort

  @Field(() => Sort, { nullable: true })
  lastName?: Sort

  @Field(() => Sort, { nullable: true })
  email?: Sort

  @Field(() => Sort, { nullable: true })
  type?: Sort
}
