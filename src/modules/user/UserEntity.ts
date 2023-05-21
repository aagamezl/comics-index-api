import {
  Column,
  Entity,
  OneToMany,
  OneToOne
} from 'typeorm'

import { Field, ObjectType } from 'type-graphql'

import { BaseModel } from './../../shared/types'
import { ConfirmationToken } from './../confirmation-token/ConfirmationTokenEntity'
import { Format } from './../format/FormatEntity'
import { UserType } from './types'

@ObjectType()
@Entity()
export class User extends BaseModel {
  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

  @Field()
  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Field(() => UserType)
  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.USER
  })
  type: UserType

  @Field(() => Format, { nullable: true })
  @OneToOne(() => Format, async (format) => await format.user, {
    lazy: true,
    onDelete: 'CASCADE'
  })
  format: Promise<Format>

  @OneToMany(() => ConfirmationToken, async (confirmationToken) => await confirmationToken.user, {
    lazy: true,
    onDelete: 'CASCADE'
  })
  tokens: Promise<ConfirmationToken[]>
}
