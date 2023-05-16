import { productModel } from "../model/product.model.js";

class productMongooseDao {
  async find(type, sortOrder, limit, stock) {
    const aggregation = [];

    if (type != null) {
      aggregation.push({ $match: { category: type } });
    }

    if (sortOrder != null) {
      aggregation.push({
        $sort: {
          price: sortOrder,
        },
      });
    }

    aggregation.push({
      $limit: limit,
    });
    if (stock && stock > 0) {
      aggregation.push({ $match: { stock: { $gte: stock } } });
    }

    console.log(aggregation);
    const filtered = await productModel.aggregate(aggregation);

    console.log(filtered);

    return filtered.map((document) => ({
      id: document._id,
      title: document.title,
      description: document.description,
      price: document.price,
      thumbnail: document.thumbnail,
      code: document.code,
      stock: document.stock,
      category: document.category,
    }));
  }

  async create(product) {
    const document = await productModel.create(product);

    return {
      id: document._id,
      title: document.title,
      description: document.description,
      price: document.price,
      thumbnail: document.thumbnail,
      code: document.code,
      stock: document.stock,
      category: document.category,
    };
  }

  //método auxiliar
  async getByCode(productCode) {
    const product = await productModel.findOne({ code: productCode });
    return product;
  }

  async getProductById(id) {
    const document = await productModel.findOne({ _id: id }).catch(() => {
      return null;
    });
    if (!document) return null;

    return {
      id: document._id,
      title: document.title,
      description: document.description,
      price: document.price,
      thumbnail: document.thumbnail,
      code: document.code,
      stock: document.stock,
      category: document.category,
    };
  }

  async updateProduct(id, data) {
    const document = await productModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    if (!document) return null;

    return {
      id: document._id,
      title: document.title,
      description: document.description,
      price: document.price,
      thumbnail: document.thumbnail,
      code: document.code,
      stock: document.stock,
      category: document.category,
    };
  }

  async deleteProduct(id) {
    const document = await productModel.deleteOne({ _id: id });
    return {
      id: document._id,
      title: document.title,
      description: document.description,
      price: document.price,
      thumbnail: document.thumbnail,
      code: document.code,
      stock: document.stock,
      category: document.category,
    };
  }
}

export default productMongooseDao;
