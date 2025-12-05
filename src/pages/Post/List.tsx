import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config';

import { PostView } from 'src/sections/Post/List';

export default function PostViewPage() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.site.name} - Blog`}</title>
      </Helmet>

      <PostView />
    </>
  );
}
