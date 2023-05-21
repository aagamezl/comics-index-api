import { registerEnumType } from 'type-graphql'

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

registerEnumType(UserType, {
  name: 'UserType',
  description: 'All possible User types'
})
