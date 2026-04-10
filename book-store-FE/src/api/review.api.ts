import { BookReviewItem, BookReviewitemWrite } from "@/models/book.model";
import { requestHandler } from "./http";
import { RequestHandler } from "msw";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
}

export const addBookReview = async (bookId: string, data: BookReviewitemWrite) => {
  return await requestHandler("post", `/reviews/${bookId}`);
}

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem>("get", "/reviews");
}