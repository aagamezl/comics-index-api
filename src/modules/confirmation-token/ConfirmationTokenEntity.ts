import {
  Column,
  Entity,
  ManyToOne
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

import { BaseModel } from './../../shared/types'
import { User } from './../user/UserEntity'

@ObjectType()
@Entity()
export class ConfirmationToken extends BaseModel {
  @Field()
  @Column()
  token: string

  @Field()
  @Column()
  expiration: Date

  @Column({ type: 'uuid', name: 'userId' })
  userId!: string

  @Field(() => User)
  @ManyToOne(() => User, {
    nullable: false,
    lazy: true,
    onDelete: 'CASCADE'
  })
  user: Promise<User>
}
