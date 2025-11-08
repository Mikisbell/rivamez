// lib/sanity.js
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/config';

// Cliente para fetch de datos
export const client = createClient(sanityConfig);

// Helper para construir URLs de imágenes
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Queries comunes
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      featured,
      tags,
      mainImage,
      "author": author->{name, role, image},
      "categories": categories[]->{title, slug, color, icon}
    }`
  );
}

export async function getFeaturedPost() {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc) [0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      mainImage,
      "author": author->{name, role, image},
      "categories": categories[]->{title, slug, color, icon}
    }`
  );
}

export async function getPostsByCategory(categorySlug) {
  return client.fetch(
    `*[_type == "post" && references(*[_type=="category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      mainImage,
      "author": author->{name, role, image},
      "categories": categories[]->{title, slug, color, icon}
    }`,
    { categorySlug }
  );
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      tags,
      mainImage,
      body,
      "author": author->{name, role, image, bio},
      "categories": categories[]->{title, slug, color, icon}
    }`,
    { slug }
  );
}

export async function getAllCategories() {
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color,
      icon,
      "postCount": count(*[_type == "post" && references(^._id)])
    }`
  );
}
