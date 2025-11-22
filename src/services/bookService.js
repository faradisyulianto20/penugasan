import { apiClient } from "@/lib/apiClient";

export const bookService = {
  getBooks: (params) => apiClient.get("/book", { params }),
  getBookById: (id) => apiClient.get(`/book/${id}`),
  getBookByIdQuery: (id) => apiClient.get("/book", { params: { _id: id } }),
  getRandomBook: (params) => apiClient.get("/random_book", { params }),
  getStatsGenre: () => apiClient.get("/stats/genre"),
};
