/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CONTENTS_BUCKET_NAME: process.env.CONTENTS_BUCKET_NAME,
        CONTENTS_URL: process.env.CONTENTS_URL,
    },
};

export default nextConfig;