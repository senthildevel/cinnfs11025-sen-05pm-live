import apiClient, { CanceledError } from "./api-client";
export { CanceledError };

interface Entity {
  id: number;
}

// Type Parameter
class HTTPService {
  _endpoint: string;
  constructor(endpoint: string) {
    this._endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this._endpoint, { signal: controller.signal });

    return { request, cancel: () => controller.abort() };
  }

  delete<T extends Entity>(entity: T) {
    return apiClient.delete(this._endpoint + "/" + entity.id);
  }

  add<T>(entity: T) {
    return apiClient.post(this._endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.put(this._endpoint + "/" + entity.id, entity);
  }
}

//export default new HTTPService("/users");

function create(endpoint: string) {
  return new HTTPService(endpoint);
}

export default create;
