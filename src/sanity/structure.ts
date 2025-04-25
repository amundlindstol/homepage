import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Blog')
		.items([
			S.documentTypeListItem('projectExperience').title('Project Experience'),
			S.documentTypeListItem('skill').title('Skill'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) => item.getId() && !['projectExperience', 'skill'].includes(item.getId()!)
			),
		])
