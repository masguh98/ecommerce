import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("the list of products");
}
export function getProductById(req: Request, res: Response) {
  res.send("A products");
}
export function createProduct(req: Request, res: Response) {
  res.send("Create of products");
}
export function updateProduct(req: Request, res: Response) {
  res.send("Update of products");
}
export function deleteProduct(req: Request, res: Response) {
  res.send("Delete of products");
}
