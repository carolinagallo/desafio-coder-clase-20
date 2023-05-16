//import fs from "fs/promises";
import cartMongooseDao from "../dao/cartMongooseDao.js";

class CartManager {
  //carts = [];
  //static id = 1;

  constructor() {
    //this.path = "./data/carts.json";
    this.cartDao = new cartMongooseDao();
  }

  //async loadData() {
  //  this.carts = await this.getCarts();
  //  CartManager.id = this.carts.length;
  //}

  //async getCarts() {

  /*
    try {
      const carts = await fs.readFile(this.path, "utf-8");
      if (carts) return JSON.parse(carts);
    } catch (error) {
      console.log(`El archivo ${this.path} no existe, creando...`);
      await fs.writeFile(this.path, "[]");
      return [];
    }
    */

  //}

  async addCart(cart) {
    return await this.cartDao.createCart(cart);

    /*
    const cart = {
      id: CartManager.id++,
      products: products,
    };
    
    this.carts.push(cart);
    await fs.writeFile(this.path, JSON.stringify(this.carts));
    */
  }

  async getCartById(idCart) {
    /*
    try {
      const cart = await fs.readFile(this.path, "utf-8");
      const cartParsed = JSON.parse(cart);
      const cartExist = cartParsed.find((cart) => cart?.id === idCart);
      console.log(cartExist);
      return cartExist;
    } catch (error) {
      console.log(error);
      throw new Error("This cart no exist");
    }
    */
    return await this.cartDao.findCartById(idCart);
  }

  async updateCart(id, pid) {
    /*
    this.carts[cart.id] = cart;
    await fs.writeFile(this.path, JSON.stringify(this.carts));
    */
    return await this.cartDao.updateCart(id, pid);
  }

  async deleteOneProduct(idCart, idProduct) {
    return await this.cartDao.deleteProduct(idCart, idProduct);
  }

  async deleteAllProducts(id) {
    return await this.cartDao.deleteAllProducts(id);
  }

  async changeAllProducts(cid, data) {
    return await this.cartDao.changeProducts(cid, data);
  }

  async changeQuantity(cid, pid, quantity) {
    return await this.cartDao.newQuantity(cid, pid, quantity);
  }
}

export default CartManager;
