import type { CompleteUploadInput } from 'src/__generated__/graphql';

import { useCallback } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';

import { COMPLETE_UPLOAD, PUBLIC_UPLOAD_PRESIGNED_URLS } from './query';

export function usePublicUploadPresignedURLs() {
  const [publicUploadPresignedUrls, { loading, data, error }] = useLazyQuery(
    PUBLIC_UPLOAD_PRESIGNED_URLS
  );

  return { loading, urls: data?.publicUploadPresignedURLs ?? [], error, publicUploadPresignedUrls };
}

export function useCompleteUpload() {
  const [submit, { loading, error }] = useMutation(COMPLETE_UPLOAD);

  const completeUpload = useCallback(
    (data: CompleteUploadInput[]) => submit({ variables: { data } }),
    [submit]
  );

  return { loading, error, completeUpload };
}
