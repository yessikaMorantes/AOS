import { CustomError } from "../objects/error.object.js";
import { getProductoModel, insertProductModel, updateProductByIdModel } from "../models/producto.model.js";
import { ObjectResponse } from "../objects/response.object.js";

export const getAll = async (req, res) => {
  ObjectResponse.set(true, [], 'Productos encontrados exitosamente').reply(res);
}

export async function getProducto(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getProductoModel(id);

    if (!data || data.length === 0) {
      CustomError.set('Producto no encontrado', 404).reply(next);
    }
    ObjectResponse.set(true, data, 'Producto encontrado exitosamente').reply(res);
  } catch (error) {
    console.error(error);
    CustomError.set('Error al obtener el producto', 500).reply(next);
  }
}

export async function insertProduct(req, res, next) {
  try {
    const { name, category, price, stock, description } = req.body;
    const data = await insertProductModel(name, category, price, stock, description);
    
    ObjectResponse.set(true, data, 'Producto insertado exitosamente').reply(res);
  } catch (error) {
    console.error(error);
    CustomError.set('Error al insertar el producto', 500).reply(next);
  }
}


export async function updateProductById(req, res, next) {
  try {
    const { id } = req.params;
    const { name, category, price, stock, description } = req.body;
    const currentProductResult = await getProductoModel(id);

    if (!currentProductResult || currentProductResult.length === 0) {
      CustomError.set('Producto no encontrado', 404).reply(next);
    }

    const currentProduct = currentProductResult[0];
    const updatedProduct = {
      name: name !== undefined && name !== currentProduct.name ? name : currentProduct.name,
      category: category !== undefined && category !== currentProduct.category ? category : currentProduct.category,
      price: price !== undefined && price !== currentProduct.price ? price : currentProduct.price,
      stock: stock !== undefined && stock !== currentProduct.stock ? stock : currentProduct.stock,
      description: description !== undefined && description !== currentProduct.description ? description : currentProduct.description,
    };
    const data = await updateProductByIdModel(id, updatedProduct);

    ObjectResponse.set(true, data, 'Producto actualizado exitosamente').reply(res);
  } catch (error) {
    console.error(error);
    CustomError('Error al actualizar el producto', 500).reply(next);
  }
} 