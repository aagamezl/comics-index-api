import { Args, Authorized, ClassType, Ctx, InputType, Query, Resolver } from 'type-graphql'
import { getRepository, Repository, SelectQueryBuilder } from 'typeorm'

import { AppContext } from './AppContext'
import { PaginatedResponse } from './PaginatedResponseType'
import { QueryArgsGeneric } from './QueryArgsGenericType'
import { generateMethodName } from './../utils'
import { FiltersExpression, Operator, QueryOperation } from './query'
import { SortByType } from '.'

export function BaseResolver<TEntity, TOrder> (
  TEntityClass: ClassType<TEntity>, TOrderClass: ClassType<TOrder>
): any {
  type Constructor<T = any> = { new(...args: any[]): T }

  type SortType = SortByType<TEntity>
  const TOrderClass2: new (...args: any[]) => SortType = TOrderClass

  @InputType()
  class UserOrderByInput extends TOrderClass2{ }

  // Types for pagination and filtering
  const GetAllResponse = PaginatedResponse(TEntityClass)
  type GetAllResponseType = InstanceType<typeof GetAllResponse>

  const GetAllArgs = QueryArgsGeneric(FiltersExpression, UserOrderByInput)
  // type GetAllArgs = InstanceType<typeof GetAllArgs>
  type GetAllArgsType = InstanceType<typeof GetAllArgs>

  @Resolver({ isAbstract: true })
  abstract class BaseResolverClass {
    repository: Repository<TEntity>

    constructor () {
      this.repository = getRepository(TEntityClass)
    }

    // @Authorized()
    @Query(() => GetAllResponse, { name: `${generateMethodName(TEntityClass.name, true)}` })
    async getAll (
      @Ctx() context: AppContext,
        @Args() { where = { filters: [] }, take, skip, order }: GetAllArgsType
    ): Promise<GetAllResponseType> {
      console.log(where, take, skip, order)
    }
  }

  return BaseResolverClass
}
