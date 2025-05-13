'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/lib/sanity.api'
import { schema } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { assist } from '@sanity/assist'

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schemaTypes' folder
	schema,
	plugins: [
		assist({
			// TODO remove
			translate: {
				document: {
					// The name of the field that holds the current language
					// in the form of a language code e.g. 'en', 'fr', 'nb_NO'.
					// Required
					languageField: 'language',
					// Optional extra filter for document types.
					// If not set, translation is enabled for all documents
					// that has a field with the name defined above.
					documentTypes: ['projectExperience'],
				},
			},
		}),
		structureTool({ structure }),
		// Vision is for querying with GROQ from inside the Studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
		documentInternationalization({
			// Required configuration
			supportedLanguages: [
				{ id: 'no', title: 'Norwegian' },
				{ id: 'en', title: 'English' },
			],
			schemaTypes: ['projectExperience'],
		}),
	],
})
