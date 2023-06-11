import express from 'express';
import resize from '../../resizing/index';

const routes = express.Router();
let imagePath = '';

routes.get('/', async (req, res) => {
  const filename: string | undefined = req.query.filename?.toString();
  const width: number | undefined = parseInt(
    req.query.width as unknown as string
  );
  const height: number | undefined = parseInt(
    req.query.height as unknown as string
  );

  let response
  let status = 200;

  try {
    await resize(filename, width, height);
    
    imagePath = `./images/thumb/${filename}_${width}_${height}.jpg`;

    response = `<div><img src="${imagePath}" style="max-width: 100%;"></div>`;
  } catch (error) {
    response = `<div>${error}</div>`;
    status = 500;
  }

  res.status(status).send(response);
});

export default routes;
