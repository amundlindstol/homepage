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
			options: {
				source: 'title',
				documentInternationalization: {
					exclude: true,
				},
			},
		}),
		defineField({
			name: 'image',
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
		}),
		defineField({
			name: 'dateFrom',
			type: 'datetime',
			options: {
				documentInternationalization: {
					exclude: true,
				},
			},
		}),
		defineField({
			name: 'dateTo',
			type: 'datetime',
			options: {
				documentInternationalization: {
					exclude: true,
				},
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
			media: 'image',
		},
		prepare(selection) {
			return { ...selection, subtitle: 'subtitle' }
		},
	},
})
