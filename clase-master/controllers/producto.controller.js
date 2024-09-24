import { getProductoModel } from "../models/producto.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getProducto (req, res){
   const data =await getProductoModel();
    res.json({success: true, data: data , msg: 'getProducto'})
}