import { getProductoModel, insertProductModel, updateProductByIdModel} from "../models/producto.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getProducto(req, res) {
  try {
    const { id } = req.params;
    const data = await getProductoModel(id);

    if (data.length !== 0) {
      res.json({ success: true, data: data, msg: 'Producto encontrado exitosamente' });
    } else {
      res.status(404).json({ success: false, msg: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error en getProducto:', error);
    res.status(500).json({ success: false, msg: 'Error al obtener el producto' });
  }
}

export async function insertProduct(req, res) {
    try {
      const { name, category, price, stock, description } = req.body;
  
      const data = await insertProductModel(name, category, price, stock, description);
  
      res.json({ success: true, data: data, msg: 'Producto insertado exitosamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, msg: 'Error al insertar el producto' });
    }
  }

 
export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const { name, category, price, stock, description } = req.body;
    const currentProductResult = await getProductoModel(id);

    if (!currentProductResult || currentProductResult.length === 0) {
      return res.status(404).json({ success: false, msg: 'Producto no encontrado' });
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

    res.json({ success: true, data: data, msg: 'Producto actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Error al actualizar el producto' });
  }
} 