// ✅ Generic API Response Type
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// ✅ Example Domain Model
interface Product {
  id: string;
  name: string;
  price: number;
}

// ✅ Success Response Example
const productResponse: ApiResponse<Product> = {
  success: true,
  data: { id: "p1", name: "Laptop", price: 800 },
};

// ✅ Error Response Example
const errorResponse: ApiResponse<null> = {
  success: false,
  error: "Product not found",
};

// ✅ Function that wraps responses
function makeResponse<T>(data: T | null, error?: string): ApiResponse<T> {
  if (error) {
    return { success: false, error };
  }
  return { success: true, data: data as T };
}

// Demo usage
const res1 = makeResponse<Product>({ id: "p2", name: "Phone", price: 500 });
const res2 = makeResponse<null>(null, "Something went wrong");

console.log("Success:", res1);
console.log("Error:", res2);