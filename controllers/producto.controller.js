import { getProductoModel,  insertProductModel} from "../models/producto.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getProducto (req, res){
   const data =await getProductoModel();
    res.json({success: true, data: data , msg: 'getProduct'})
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