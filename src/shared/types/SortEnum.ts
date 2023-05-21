import { registerEnumType } from 'type-graphql'

export enum Sort {
  ASC = 'ASC',
  DESC = 'DESC'
}

registerEnumType(Sort, {
  name: 'Sort',
  description: 'All possible sorting types'
})
