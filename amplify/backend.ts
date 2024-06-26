import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  // data,
  // storage,
});

backend.addOutput({
  storage: {
    aws_region: "us-east-1",
    bucket_name: "amplify-contents-20240612",
  },
});