// 'use client';

import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const client = new S3Client();

export const S3ListObjects = async () => {

  const input = {
    Bucket: process.env.CONTENTS_BUCKET_NAME,
  };
  const command = new ListObjectsCommand(input);
  const response = await client.send(command);

  console.log("Buckets: ");
  console.log(response);
  return response;
};




export default async function Page() {
    <>
      <h1>
        xcontents
      </h1>
      <p>{JSON.stringify(S3ListObjects)}</p>
    </>
  );
}