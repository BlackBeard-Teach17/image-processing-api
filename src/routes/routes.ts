import path from "path";
import express from "express";

import resizeImage from "../utils/imageProcessor";
import checkFileExtension, { checkDir, imageValidator } from "../utils/helpers";

const routes = express.Router();

routes.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<unknown> => {
    const filename: string = req.query.filename as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);

    console.log(filename, width, height);
    imageValidator(filename, width, height); // check if the user entered all the parameters and if the width and height are numbers

    const originalImagePath = path.join(
      __dirname,
      "../../public/images",
      `${filename}.jpg`
    );

    /**
     * check if the image the user wants to resize exists and if not send an error message
     * @param originalImagePath The path of the original image
     * @returns                 void if the image exists or error message if it doesn't
     */
    if (checkDir(originalImagePath) === false) {
      return res.status(400).send("Image not found!");
    }

    const fileformat = path.extname(originalImagePath);
    checkFileExtension(fileformat); // check if the file extension is valid
    const resizedImagePath = path.join(
      __dirname,
      "../../public/images/thumbnail",
      `${filename}-resized${width}x${height}+${fileformat}`
    );

    /**
     * check if the image is already resized and if it is send the cached image
     * @param resizedImagePath The path of the resized image
     * @returns                void if the image is already resized
     *
     */
    if (checkDir(resizedImagePath) === true) {
      console.log("Image already resized!");
      return res.status(200).sendFile(resizedImagePath); // send the cached image
    }

    /**
     * resize the image and send it to the user
     * @param width            The width of the image
     * @param height           The height of the image
     * @param originalImagePath The path of the original image
     * @param resizedImagePath  The path of the resized image
     * @returns                 void if the image is resized successfully or Error if it fails to resize the image
     */
    try {
      await resizeImage({
        width,
        height,
        originalImagePath,
        resizedImagePath,
      });
    } catch (error) {
      return res
        .status(400)
        .send("Error occurred during processing the image!");
    }
    console.log("Image resized successfully!");
    res.status(200).sendFile(resizedImagePath);
  }
);

export default routes;
