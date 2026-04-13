import create, { CanceledError } from "./http-service";

export { CanceledError };

export interface Product {
  id: number;
  name: string;
  price: number;
}

export default create("/products");

// object of UserService
