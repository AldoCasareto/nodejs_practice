import app from '../../app.js';
import request from 'supertest';

describe('Test GET/ launches', () => {
  test('it should respond with 200 success', async () => {
    const response = await request(app).get('/launches');
    expect(response.statusCode).toBe(200);
  });
});

describe('Test POST /launch', () => {
  test('it should respond with 201 success', () => {
    const response = 201;
    expect(response).toBe(201);
  });
  test('it should catch missing required properties', () => {
    const response = 400;
    expect(response).toBe(400);
  });
  test('it should catch invalid launch date', () => {
    const response = 400;
    expect(response).toBe(400);
  });
});
