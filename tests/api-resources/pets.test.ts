// File generated from our OpenAPI spec by Stainless.

import HariNewTestOrgProject1 from 'hari-new-test-org-project-1';
import { Response } from 'node-fetch';

const hariNewTestOrgProject1 = new HariNewTestOrgProject1({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pets', () => {
  test('create', async () => {
    const responsePromise = hariNewTestOrgProject1.pets.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(hariNewTestOrgProject1.pets.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      HariNewTestOrgProject1.NotFoundError,
    );
  });

  test('retrieve', async () => {
    const responsePromise = hariNewTestOrgProject1.pets.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hariNewTestOrgProject1.pets.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HariNewTestOrgProject1.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = hariNewTestOrgProject1.pets.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(hariNewTestOrgProject1.pets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      HariNewTestOrgProject1.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      hariNewTestOrgProject1.pets.list({ limit: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HariNewTestOrgProject1.NotFoundError);
  });
});
