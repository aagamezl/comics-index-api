import {
  Arg,
  Authorized,
  Ctx,
  ID,
  Mutation,
  Query,
  Resolver
} from 'type-graphql'

import { BaseResolver } from './../../shared/types'
import { UserOrderByInput } from './types/UserOrderByInputType'
import { User } from './UserEntity'

@Resolver(User)
export class UserResolver extends BaseResolver(User, UserOrderByInput) {

}
