import { groq } from 'next-sanity'

// Query schema datasets
export const projectExperienceQuery = groq`*[_type == "projectExperience"] {
	_id,
  title,
  customer,
  dateFrom,
  dateTo,
  "slug": slug.current,
  cover {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
} | order(dateFrom desc)`

export const singleProjectExperienceQuery = groq`*[_type == "projectExperience" && slug.current == $slug][0] {
  _id,
  title,
  customer,
  dateFrom,
  dateTo,
  "slug": slug.current,
  cover {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  customerDescription[],
  projectDescription[],
  projectRole,
}`
