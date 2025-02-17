import { Where } from '../../../../types';
import { SanitizedCollectionConfig } from '../../../../collections/config/types';
import { Column } from '../Table/types';

export type Props = {
  enableColumns?: boolean
  enableSort?: boolean
  modifySearchQuery?: boolean
  handleSortChange?: (sort: string) => void
  handleWhereChange?: (where: Where) => void
  collection: SanitizedCollectionConfig
}

export type ListControls = {
  where?: unknown
  columns?: Partial<Column>[]
}
