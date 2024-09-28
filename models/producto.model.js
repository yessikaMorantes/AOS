import pgService from "../services/pg.service.js";

export const getProductoModel = async (id) => {
  try {
    const pg = new pgService(); 
    const result = await pg.connection.query("SELECT * FROM product WHERE id = $1", id);
    return result;
  } catch (error) {
    throw error;
  }
}

export const insertProductModel = async (name, category, price, stock, description) => {
  try {
    const pg = new pgService();
    return await pg.connection.query(
      "INSERT INTO product (name, category, price, stock, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, category, price, stock, description]
    );
  } catch (error) {
    throw error;
  }
};

  export const updateProductByIdModel = async (id, updatedProduct) => {
    try {
      const pg = new pgService();
      const result = await pg.connection.query(
        `UPDATE product 
         SET name = $1, category = $2, price = $3, stock = $4, description = $5 
         WHERE id = $6 RETURNING *`,
        [
          updatedProduct.name,
          updatedProduct.category,
          updatedProduct.price,
          updatedProduct.stock,
          updatedProduct.description,
          id
        ]
      );
  
      return result;
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      throw error;
    }
  };