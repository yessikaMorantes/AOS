# API ENDPONTS

## Usuarios

### Obtener token

<code> POST localhost:4200/auth </code>
```json
{
    "dni": "DNI para iniciar sesion",
    "password": "Contraseña"
}
```

### Registrar usuario

<code> POST localhost:4200/user/insert </code>
```json
{
    "name": "",
    "lastname": "",
    "dni": "",
    "password": ""
}
```
### Consultar usuario por ID

<code> GET localhost:4200/user/id </code>

## Productos

### Obtener producto por el ID

<code> GET localhost:4200/product/id </code>

### Obtener todos los productos

<code> GET localhost:4200/product/ </code>

### Insertar productos

<code> POST localhost:4200/product/insert </code>
```json
{
  "name": "Nombre del producto",
  "category": "Categoría del poducto",
  "price": "Precio en número",
  "stock": "Stock en número",
  "description": "Descripción del producto"
}
```

### Actualizar producto por ID

<code>PUT localhost:4200/product/update/id </code>
```json
{
  "price": 10000,
  "stock": 1
"... demas atributos que quieras actuatilizar"
}
```

### Borrar producto por ID

<code>DELETE localhost:4200/product/delete/id </code>
