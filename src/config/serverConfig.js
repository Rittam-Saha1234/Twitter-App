import dotenv from 'dotenv'

dotenv.config(); //Load environment variable from .env file

export const PORT = process.env.PORT || 3000;  //process.env: This is a Node.js object that holds all the environment variables available during runtime.

export const MONGO_URL= process.env.MONGO_URL; //Define a MONGO_URL variable

export const AWS_REGION = process.env.AWS_REGION;

export const AWS_BUCKET_NAME =process.env.AWS_BUCKET_NAME;

export const AWS_ACCESS_KEY_ID= process.env.AWS_ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;