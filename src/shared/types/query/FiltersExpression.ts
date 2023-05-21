import { Field, InputType, registerEnumType } from 'type-graphql'

export enum Operator {
  AND = 'AND',
  OR = 'OR'
}

registerEnumType(Operator, {
  name: 'Operator',
  description: 'All possible query operators'
})

export enum QueryOperation {
  EQ = 'EQ',
  NE = 'NE',
  IN = 'IN',
  LIKE = 'LIKE',
  GE = 'GE',
  GT = 'GT',
  LE = 'LE',
  LT = 'LT'
}

export const operators = {
  [QueryOperation.EQ]: '=',
  [QueryOperation.NE]: '<>',
  [QueryOperation.GE]: '>=',
  [QueryOperation.GT]: '>',
  [QueryOperation.LE]: '<=',
  [QueryOperation.LT]: '<'
}

registerEnumType(QueryOperation, {
  name: 'QueryOperation',
  description: 'All possible query operations'
})

@InputType()
export class Join {
  @Field()
  left!: string

  @Field()
  right!: string
}

@InputType()
export class Filter {
  @Field(() => QueryOperation)
  operation!: QueryOperation

  @Field(() => [String])
  values!: string[]

  @Field()
  field!: string

  @Field(() => Operator, { nullable: true })
  operator?: Operator
}

@InputType()
export class FiltersExpression {
  @Field(() => [Join], { nullable: true })
  join?: Join[]

  @Field(() => [Filter])
  filters!: Filter[]
}
