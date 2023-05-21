import { Column, Entity, ManyToOne } from 'typeorm'

import { Field, ObjectType } from 'type-graphql'

import { BaseModel } from './../../shared/types'
import { User } from './../user/UserEntity'

@ObjectType()
@Entity()
export class Format extends BaseModel {
  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  name: string

  @Field(() => User)
  @ManyToOne(() => User, {
    nullable: false,
    lazy: true,
    onDelete: 'CASCADE'
  })
  user: Promise<User>
}
