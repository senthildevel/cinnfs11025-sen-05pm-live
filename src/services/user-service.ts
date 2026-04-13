import create, { CanceledError } from "./http-service";

export { CanceledError };

export interface User {
  id: number;
  name: string;
}

export default create("/users");

// object of UserService
