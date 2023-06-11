import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

const resize = async (
  filename: string | undefined,
  width: number | undefined,
  height: number | undefined
): Promise<void> => {
  if (!filename || !width || !height) {
    throw new Error('Must provide values for filename, width and height');
  }
  const imagePath = `./assets/images/full/${filename}.jpg`;
  const thumbFiles = await fsPromises.readdir('./assets/images/thumb/');
  const exist = thumbFiles.filter(
    (name) => name == `${filename}_${width}_${height}.jpg`
  ).length;

  if (exist) {
    console.log('File already exists');
    return;
  }

  const newImage = await sharp(imagePath).resize({ width, height }).toBuffer();

  await fsPromises.writeFile(
    `./assets/images/thumb/${filename}_${width}_${height}.jpg`,
    newImage
  );
};

export default resize;
