import sharp from 'sharp';
import path from 'path';
//import fs from 'fs';

const createThumbnail = async (req, res, next) => {
  try {
    if (!req.file) {
      return next();
    }

    const originalPath = req.file.path;
    const {filename, destination} = req.file;

    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);
    const thumbName = `${baseName}_thumb.png`;
    const thumbPath = path.join(destination, thumbName);

    await sharp(originalPath).resize(160, 160).png().toFile(thumbPath);

    console.log(`Thumbnail created: ${thumbPath}`);
    next();
  } catch (error) {
    console.error('Error creating thumbnail:', error);
    next(error);
  }
};

export {createThumbnail};
