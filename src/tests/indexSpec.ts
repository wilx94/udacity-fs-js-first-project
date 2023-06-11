import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets 200 from api endpoint', async () => {
    const response = await request.get(
      '/api?filename=encenadaport&width=230&height=150'
    );
    expect(response.status).toBe(200);
  });

  it('gets 500 if one of the values were not provided', async () => {
    const response = await request.get('/api?width=230&height=150');
    expect(response.status).toBe(500);
  });
});
