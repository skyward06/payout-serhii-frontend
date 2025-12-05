import type { CoverImage } from 'src/__generated__/graphql';

export type PostType = {
  __typename?: 'Post';
  slug: string;
  title: string;
  content: string;
  _updatedAt: any;
  metaTitle: string;
  description: string;
  metaDescription: string;
  metaTags: {
    __typename?: 'PostMetaTag';
    slug: string;
    title: string;
    description: string;
  }[];
  coverImage?: CoverImage | string | null;
  metaKeywords: {
    __typename?: 'PostMetaKeyword';
    slug: string;
    title: string;
    description: string;
  }[];
};

export type PostContextValue = {
  post: PostType;
};
