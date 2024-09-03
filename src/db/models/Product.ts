import database from "@/db/config/mongodb"
import { ObjectId } from "mongodb";

export type ProductType = {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};


export default class Product {
  static collection() {
    return database.collection<ProductType>("products");
  }

  static async findAll(search?: string, page: string = "1") {
    const collection = database.collection("products");
    if (search) {
      const products = await collection
        .aggregate([
          {
            $match: {
              name: {
                $regex: new RegExp(search, "i"),
              },
            },
          },
        ])
        .toArray();
      return products;
    }

    const products = await collection
      .find()
      .limit(5)
      .skip(5 * Number(page) - 1)
      .toArray();
    return products;
  }

  // const products = await this.collection().find().toArray();
  // return products


  static async findById(_id: string) {
    const collection = database.collection("products");
    const product = await collection.findOne({ _id: new ObjectId(_id) });
    return product;
  }

  static async findBySlug(slug: string) {
    const collection = database.collection("products");
    const product = await collection.findOne({ slug });
    return product;
  }
}