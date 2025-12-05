import { gql } from 'src/__generated__/gql';

export const FETCH_POSTS = gql(/* GraphQL */ `
  query Posts($data: PostStatusInput!, $sort: String, $page: String) {
    posts(data: $data, sort: $sort, page: $page) {
      posts {
        slug
        title
        content
        _updatedAt
        description
        metaTitle
        metaDescription
        metaKeywords {
          title
          slug
          description
        }
        metaTags {
          title
          slug
          description
        }
        coverImage {
          _type
          asset {
            _ref
            _type
          }
        }
      }
      total
    }
  }
`);

export const FETCH_POST_BY_SLUG = gql(/* GraphQL */ `
  query PostBySlug($data: PostSlugInput!) {
    postBySlug(data: $data) {
      slug
      title
      content
      metaTitle
      _updatedAt
      description
      metaDescription
      metaTags {
        slug
        title
        description
      }
      metaKeywords {
        slug
        title
        description
      }
      coverImage {
        _type
        asset {
          _ref
          _type
        }
      }
    }
  }
`);
