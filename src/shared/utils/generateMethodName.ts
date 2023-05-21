import { pluralize } from './pluralize'

export const generateMethodName = (entityName: string, isPlural: boolean = false): string => {
  const entityNameAsTitle = entityName.slice(0, 1).toLowerCase() + entityName.slice(1)
  const pluralName = isPlural ? pluralize(entityNameAsTitle) : entityNameAsTitle

  return ((entityNameAsTitle === pluralName) && isPlural) ? `getAll${entityName}` : pluralName
}

export const snakeCase = (value: string): string => {
  const result = value.replace(/([A-Z])/g, ' $1').trim()

  return result.split(' ').join('_').toLowerCase()
}
