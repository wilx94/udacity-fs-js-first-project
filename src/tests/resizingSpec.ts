import resize from '../resizing';
import { promises as fsPromises } from 'fs';

const thumbPath = './assets/images/thumb/';

beforeEach(async () => {
  const files = await fsPromises.readdir(thumbPath);

  files.forEach((file) => fsPromises.unlink(`${thumbPath}/${file}`));
});

it('it creates a new file with the dimensions provided', async () => {
  await resize('encenadaport', 100, 100);
  const files = await fsPromises.readdir(thumbPath);

  expect(files).toContain('encenadaport_100_100.jpg');
});

it('throws an error when a parameter is not provided', async () => {
  await expectAsync(resize(undefined, 100, 100)).toBeRejectedWith(
    new Error('Must provide values for filename, width and height')
  );
  await expectAsync(resize('blue', undefined, 100)).toBeRejectedWith(
    new Error('Must provide values for filename, width and height')
  );
  await expectAsync(resize('blue', 100, undefined)).toBeRejectedWith(
    new Error('Must provide values for filename, width and height')
  );
});

it('throws an error if width or height is a negative number', async () => {
  await expectAsync(resize('blue', -100, 100)).toBeRejectedWith(
    new Error('Values provided for width and height must be positive numbers')
  );
  await expectAsync(resize('blue', 100, -200)).toBeRejectedWith(
    new Error('Values provided for width and height must be positive numbers')
  );
});
