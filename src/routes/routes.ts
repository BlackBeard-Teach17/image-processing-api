import path from 'path';
import express from 'express';

import resizeImage from '../utils/imageProcessor';
import checkFileExtension, { checkDir, imageValidator } from '../utils/helpers';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response): Promise<unknown> => {
    const filename: string = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);

    console.log(filename, width, height);
    imageValidator(filename, width, height); // check if the user entered all the parameters and if the width and height are numbers

    const originalImagePath = path.join(__dirname, '../../public/images', `${filename}.jpg`);

   // check if the image that the user want to resize exists
   if (checkDir(originalImagePath) === false) {
       return res.status(400).send('Image not found!');
   }

   const fileformat = path.extname(originalImagePath);
   checkFileExtension(fileformat);// check if the file extension is valid
   const resizedImagePath = path.join(__dirname, '../../public/images/thumbnail', `${filename}-resized${width}x${height}+${fileformat}`);

   // check if the resized image already exists
   if (checkDir(resizedImagePath) === true) {
         console.log('Image already resized!');
         return res.status(200).sendFile(resizedImagePath); // send the cached image
   }
   
    // resize the image and send it
    try {
        await resizeImage({
            width ,
            height,
            originalImagePath,
            resizedImagePath,
        }); 
    } catch (error) {
        return res.status(400).send('Error occurred during processing the image!');
    }
    console.log('Image resized successfully!');
    res.status(200).sendFile(resizedImagePath);
});


export default routes;