import { ObjectId } from "mongodb";
import database from "../config/mongodb";
import { ProductType } from "./Product";

export type WistListType = {
  _id?: string;
  userId: string;
  productId: string;
  product?: ProductType;
};

export default class Wishlist {
  static async findAllByUserId(userId: string) {
    const collection = database.collection("wishlist");
    const products = await collection
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
        },
        {
          $unwind: {
            path: "$product",
            preserveNullAndEmptyArrays: true,
          },
        },
      ])
      .toArray();
    return products;
  }

  static async findById(id: string) {
    const collection = database.collection("Wishlist");
    const products = await collection.findOne({ _id: new ObjectId(id) });
    return products;
  }

  static async findByUserIdProductId(productId: string, userId: string) {
    const collection = database.collection("Wishlist");
    const products = await collection.findOne({
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
    });
    return products;
  }

  static async create(newWishlist: WistListType) {
    const { userId, productId } = newWishlist;
    const collection = database.collection("wishlist");
    const { insertedId } = await collection.insertOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return insertedId;
  }

  static async delete(id: string) {
    const collection = database.collection("wishlist");
    await collection.deleteOne({
      _id: new ObjectId(id),
    });
  }
}
