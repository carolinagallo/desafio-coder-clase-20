//import fs from "fs/promises";
//import { productModel } from "../model/product.model.js";
import productMongooseDao from "../dao/productMongooseDao.js";

class ProductManager {
  //products = [];
  //static id = 1;

  constructor() {
    //this.path = "./data/products.json";
    this.productDao = new productMongooseDao();
  }

  async loadData() {
    /*
    this.products = await this.getProducts();
    ProductManager.id = this.products.length;
    */
  }

  async getProducts(type, sortOrder, limit, stock) {
    const products = await this.productDao.find(type, sortOrder, limit, stock);
    return products;

    /* try {
       const products = await fs.readFile(this.path, "utf-8");
       if (products) return JSON.parse(products);
     } catch (error) {
       console.log(`El archivo ${this.path} no existe, creando...`);
       await fs.writeFile(this.path, "[]");
       return [];
     }*/
  }

  async addProduct(newProduct) {
    /*const codeExist = this.products.find(
      (product) => product?.code === newProduct.code
    );*/

    const codeExist = await this.productDao.getByCode(newProduct.code);

    if (codeExist) throw Error("This code exist");

    if (!newProduct.title || newProduct.title.trim().length === 0)
      throw Error("Empty title field");

    if (!newProduct.description || newProduct.description.trim().length === 0)
      throw Error("Empty description field");

    if (!newProduct.price) throw Error("Empty price field");

    if (!newProduct.thumbnail || newProduct.thumbnail.trim().length === 0)
      throw Error("Empty thumbnail field");

    if (!newProduct.code || newProduct.code.trim().length === 0)
      throw Error("Empty code field");

    if (!newProduct.category || newProduct.category.trim().length === 0)
      throw Error("Empty category field");

    if (!newProduct.stock) throw Error("Empty stock field");

    //if (!newProduct.category || newProduct.category.trim().length === 0)
    //  throw Error("Empty category field");

    return await this.productDao.create({
      ...newProduct,
      status: true,
    });

    /*this.products.push({
      ...newProduct,
      status: true,
      id: ProductManager.id++,
    });
*/
    // nuevo. falta llamar a la función del DAO
    /*await productModel.create({
      ...newProduct,
      status: true,
      //id: ProductManager.id++,
    })*/

    // await fs.writeFile(this.path, JSON.stringify(this.products));
  }

  async getProductById(idProduct) {
    /* try {
       const products = await fs.readFile(this.path, "utf-8");
       const productsParsed = JSON.parse(products);
       const productExist = productsParsed.find(
         (product) => product?.id === idProduct
       );
       return productExist;
     } catch (error) {
       console.log(error);
       throw new Error("This product no exist");
     }*/
    return this.productDao.getProductById(idProduct);
  }

  async updateProduct(id, productChange) {
    /*
    const product = await this.getProductById(id);
    if (!product) throw new Error("This product no exist");

    
    const {
      title,
      description,
      thumbnail,
      price,
      code,
      stock,
      category,
      status,
    } = productChange;

    if (title) product.title = title;
    if (description) product.description = description;
    if (price) product.price = price;
    if (thumbnail) product.thumbnail = thumbnail;
    if (code) product.code = code;
    if (stock) product.stock = stock;
    if (category) product.category = category;
    if (status) product.status = status;

    this.products[product.id] = product;
    
    await fs.writeFile(this.path, JSON.stringify(this.products));
    return product;
    */

    return await this.productDao.updateProduct(id, productChange);
  }

  async deleteProduct(id) {
    /*
    const product = await this.getProductById(id)
    if (!product) return null;

    delete this.products[id];
    await fs.writeFile(this.path, JSON.stringify(this.products));
    return true;
    */

    return await this.productDao.deleteProduct(id);
  }
}

export default ProductManager;
