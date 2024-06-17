// 'use client';
import Button from '@mui/material/Button';

import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client();

export default async function Page() {
  const input = {
    Bucket: process.env.CONTENTS_BUCKET_NAME,
  };
  const command = new ListObjectsV2Command(input);
  const response = await client.send(command);
  console.log("Buckets: ");
  console.log(response);
  return (
    <>
      <p>{JSON.stringify(response)}</p>
      <Button variant="contained">Hello world</Button>;
    </>
  );
}