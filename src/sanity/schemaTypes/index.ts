import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { projectExperienceType } from './projectExperienceType'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, categoryType, projectExperienceType],
}
