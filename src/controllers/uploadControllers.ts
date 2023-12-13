import dotenv from 'dotenv';
dotenv.config();
import { uuid } from 'uuidv4';
import multer from 'multer';
import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import { S3 } from 'aws-sdk';
import fs from 'fs';



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');

    },
    filename: function (req, file, cb) {
        cb(null, uuid() + '-' + file.originalname);
    },
   


    });


    

const upload = multer({ storage: storage });

const uploadToS3 = async (req: Request, res: Response, next: NextFunction) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded',
            });
        }

        if (!req.file.path) {
            return res.status(400).json({
                message: 'No file path',
            });
        }

      
        const s3 = new S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });


        const fileStream = fs.createReadStream(req.file.path);
     

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME as string,
            Key: req.file.filename,
            Body: fileStream,
            ContentType: req.file.mimetype,
        };
        console.log(params)
        const data2 = await s3.upload(params).promise();        

        res.status(200).json({
            message: 'File uploaded successfully',
            location: data2.Location,
        });
    } catch (error) {
     
        next(error);
    }
};


export { uploadToS3, upload };