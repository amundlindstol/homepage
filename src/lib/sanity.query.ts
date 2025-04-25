import { groq } from 'next-sanity'

// Query schema datasets
export const projectExperienceQuery = groq`*[_type == "projectExperience"] {
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  cover {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  content,
}`

export const singleProjectExperienceQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  content,
  cover {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
}`
