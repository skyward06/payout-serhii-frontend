import type { CoverImage } from 'src/__generated__/graphql';

import imageUrlBuilder from '@sanity/image-url';

import { client } from 'src/utils/sanity/client';

// ----------------------------------------------------------------------

const builder = imageUrlBuilder(client);

export function getCoverImageUrl(coverImage: CoverImage | string): string {
  if (typeof coverImage === 'string') {
    return coverImage;
  }

  return builder.image(coverImage).url();
}
