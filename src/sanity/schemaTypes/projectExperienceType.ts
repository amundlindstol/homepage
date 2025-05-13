import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const projectExperienceType = defineType({
	name: 'projectExperience',
	type: 'document',
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'customer',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				documentInternationalization: {
					exclude: true,
				},
			},
		}),
		defineField({
			name: 'cover',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
				}),
			],
		}),
		defineField({
			name: 'customerDescription',
			type: 'blockContent',
		}),
		defineField({
			name: 'projectDescription',
			type: 'blockContent',
		}),
		defineField({
			name: 'projectRole',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'role',
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							type: 'string',
							icon: DocumentTextIcon,
						}),
						defineField({
							name: 'description',
							type: 'blockContent',
						}),
					],
				}),
			],
		}),
		defineField({
			name: 'skills',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: { type: 'skill' },
				}),
			],
			options: {
				aiAssist: { exclude: true }, // TODO remove
			},
		}),
		defineField({
			name: 'dateFrom',
			type: 'date',
			options: {
				aiAssist: { exclude: true }, // TODO remove
			},
		}),
		defineField({
			name: 'dateTo',
			type: 'date',
			options: {
				aiAssist: { exclude: true }, // TODO remove
			},
		}),
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'cover',
			subtitle: 'customer',
		},
		prepare(selection) {
			return { ...selection, subtitle: selection.subtitle }
		},
	},
	orderings: [
		{
			title: 'Date from',
			name: 'dateFromDesc',
			by: [
				{
					field: 'dateFrom',
					direction: 'desc',
				},
			],
		},
	],
})
