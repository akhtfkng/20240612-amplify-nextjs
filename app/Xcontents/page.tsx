// 'use client';

import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const client = new S3Client();
const input = {
  Bucket: process.env.CONTENTS_BUCKET_NAME,
};
const command = new ListObjectsCommand(input);
const response = await client.send(command);


export default async function Page() {
    <>
      <h1>
        xcontents
      </h1>
      <p>{JSON.stringify(response)}</p>
    </>
  );
}