import fs from "fs";

/**
 *
 * @param extname The file extension
 * @returns       void if the file extension is valid
 * @throws        Error if the file extension is invalid
 */
const checkFileExtension = (extname: string): void => {
  const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  if (!validExtensions.includes(extname)) {
    throw new Error("Invalid file extension");
  }
};

/**
 * check if the directory exists
 * @param dirPath The directory path
 * @returns       true if the directory exists and false if it doesn't
 */
const checkDir = (dirPath: string): Boolean => {
  const folderExists = fs.existsSync(dirPath);
  if (folderExists === false) {
    return false;
  }
  return true;
};

/**
 *
 * @param dirPath The directory path
 * @returns       void if the directory is created successfully
 * @throws        Error if it fails to create the directory
 */
const createDir = (dirPath: string): void => {
  try {
    fs.mkdirSync(dirPath);
  } catch (err) {
    console.error(err);
  }
};

/**
 *  check if the user entered all the parameters and if the width and height are numbers
 * @param filename The filename of the image
 * @param width    The width of the image
 * @param height   The height of the image
 * @returns        void if the parameters are valid
 * @throws         Error if the parameters are invalid
 */
const imageValidator = (
  filename: string,
  width: number,
  height: number
): void => {
  if (!filename || !width || !height) {
    throw new Error("please make sure that you entered all the parameters");
  }
  if (isNaN(width) || isNaN(height)) {
    throw new Error("please make sure that you entered valid width and height");
  }
};

export default checkFileExtension;
export { checkDir, createDir, imageValidator };
