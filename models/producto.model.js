import pgService from "../services/pg.service.js";

export const getProductoModel = async () => {
    const pg =  new pgService(); 
    return  await  pg.connection.query("SELECT * FROM product");

}

export async function insertProductModel(nombre, categoria, precio, stock, descripcion) {
    try {

    const pg =  new pgService(); 
    return  await  pg.connection.query(
        "INSERT INTO product (name, category, price, stock, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [nombre, categoria, precio, stock, descripcion]
      );
    } catch (error) {
      console.error('Error al insertar el producto:', error);
      throw error;
    }
  }