import { gql } from 'src/__generated__/gql';

export const PUBLIC_UPLOAD_PRESIGNED_URLS = gql(/* GraphQL */ `
  query PublicUploadPresignedURLs($data: PresignedURLRequests!) {
    publicUploadPresignedURLs(data: $data) {
      id
      url
      contentType
    }
  }
`);

export const COMPLETE_UPLOAD = gql(/* GraphQL */ `
  mutation CompleteUpload($data: [CompleteUploadInput!]!) {
    completeUpload(data: $data) {
      id
      url
      size
      mimeType
      isPublic
      originalName
    }
  }
`);
