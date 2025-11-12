import express from 'express';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

import multer from 'multer';
import {createThumbnail} from './src/middlewares/upload.js';

const upload = multer({dest: 'uploads/'});

const catRouter = express.Router();

catRouter.route('/').get(getCat).post(upload.single('file'), postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

catRouter.post('/', upload.single('image'), createThumbnail, (req, res) => {
  res.json({message: 'File uploaded and thumbnail created!'});
});

export default catRouter;
