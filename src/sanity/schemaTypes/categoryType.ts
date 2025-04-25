import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
	name: 'skill',
	title: 'Skill',
	type: 'document',
	icon: TagIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'category',
			type: 'string',
			initialValue: 'Other',
			options: {
				list: [
					{ title: 'Language', value: 'Language' },
					{ title: 'Framework', value: 'Framework' },
					{ title: 'Database', value: 'Database' },
					{ title: 'Infrastructure', value: 'Infrastructure' },
					{ title: 'Platform', value: 'Platform' },
					{ title: 'Tools', value: 'Tools' },
					{ title: 'Methodology and process', value: 'Methodology and process' },
					{ title: 'Other', value: 'Other' },
				],
			},
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		}),
	],
})
