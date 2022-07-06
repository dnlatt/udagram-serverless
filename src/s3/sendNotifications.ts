import { S3Handler, S3Event } from 'aws-lambda'
import 'source-map-support/register'

export const handler: S3Handler = async (event: S3Event) => {
  console.log('Processing SNS event ', JSON.stringify(event))
  for (const record of event.Records) {
    const key = record.s3.object.key 
    console.log('Processing S3 event', key)
  }
}