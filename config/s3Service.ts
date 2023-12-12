import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: fromEnv(),
});

const bucketName = process.env.AWS_BUCKET_NAME;

export async function uploadFileToS3(file: File) {
  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: file,
  };

  return await s3Client.send(new PutObjectCommand(params));
}
