// File generated from our OpenAPI spec by Stainless.

import * as Core from 'hari_test/core';
import { APIResource } from 'hari_test/resource';
import { isRequestOptions } from 'hari_test/core';
import * as PetsAPI from 'hari_test/resources/pets';

export class Pets extends APIResource {
  /**
   * Create a pet
   */
  create(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/pets', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Info for a specific pet
   */
  retrieve(petId: string, options?: Core.RequestOptions): Core.APIPromise<Pet> {
    return this._client.get(`/pets/${petId}`, options);
  }

  /**
   * List all pets
   */
  list(query?: PetListParams, options?: Core.RequestOptions): Core.APIPromise<PetListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PetListResponse>;
  list(
    query: PetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PetListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/pets', { query, ...options });
  }
}

export interface Pet {
  id: number;

  name: string;

  tag?: string;
}

export type PetListResponse = Array<Pet>;

export interface PetListParams {
  /**
   * How many items to return at one time (max 100)
   */
  limit?: number;
}

export namespace Pets {
  export import Pet = PetsAPI.Pet;
  export import PetListResponse = PetsAPI.PetListResponse;
  export import PetListParams = PetsAPI.PetListParams;
}
