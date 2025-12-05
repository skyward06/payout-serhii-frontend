import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';
import { usePostContext } from 'src/libs/Post/Context/usePostContext';

import { SEO } from 'src/components/SEO';

import { PostView } from 'src/sections/Post/View';
import { getCoverImageUrl } from 'src/sections/Post/utils/getCoverImageUrl';

export default function PostViewPage() {
  const { post } = usePostContext();

  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Blog`}</title>
      </Helmet>

      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        image={getCoverImageUrl(post?.coverImage ?? '')}
        type="article"
      />

      <PostView post={post} />
    </>
  );
}
