import { apiClient } from "@/lib/apiClient";
import { localClient } from "@/lib/localClient";

export const bookService = {
  getBooks: (params) => apiClient.get("/book", { params }),
  getBookById: (id) => apiClient.get(`/book/${id}`),
  getBookByIdQuery: (id) => apiClient.get("/book", { params: { _id: id } }),
  getRandomBook: (params) => apiClient.get("/random_book", { params }),
  getStatsGenre: () => apiClient.get("/stats/genre"),

  getCart: () => localClient.get("/cart"),
  addToCart: (book) => localClient.post("/cart", book),
  removeFromCart: (id) => localClient.delete(`/cart/${id}`),

  getWishlist: () => localClient.get("/wishlist"),
  addToWishlist: (book) => localClient.post("/wishlist", book),
  removeFromWishlist: (id) => localClient.delete(`/wishlist/${id}`),
};
