import { Sort } from '.'

export type SortByType<Type> = {
  [Property in keyof Type]?: Sort
}

// export interface SortByType<Type = any> {
//   [P in K]: Sort;
// }
