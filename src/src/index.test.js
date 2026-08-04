const request = require('supertest');
const app     = require('./index');

describe('API Tests', () => {

  test('GET / should return app info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('DevSecOps Pipeline App');
    expect(res.body.status).toBe('running');
  });

  test('GET /health should return healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

});
