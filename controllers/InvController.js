const inv = require('../Models/Inventario');

let inventarios = [
    { id: 1, nombre: 'Inv1', descripcion: 'Desc1', cantidad: 30, precio: 40 },
    { id: 2, nombre: 'Inv2', descripcion: 'Desc2', cantidad: 20, precio: 80 },
    { id: 2, nombre: 'Inv3', descripcion: 'Desc2', cantidad: 20, precio: 50 },
    { id: 2, nombre: 'Inv3', descripcion: 'Desc2', cantidad: 20, precio: 10 },
    { id: 2, nombre: 'Inv3', descripcion: 'Desc2', cantidad: 20, precio: 25 }
];

function getAllInv() {
    return inventarios;
}

function createInv(nombre, descripcion, cantidad, precio) {
    const newInv = {
        id: inventarios.length + 1,
        nombre,
        descripcion,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad)
    };

    inventarios.push(newInv);
    return newInv;
}

function getInvID(id) {
    const idProducto = parseInt(id);
    const InvFound = inventarios.find(a=> a.id === idProducto);
    return InvFound;
}

function updateInv(id, nombre, descripcion, precio, cantidad){
    const idProducto = parseInt(id);
    //const { nombre, descripcion, cantidad, precio } = req.body;
    const productoEncontrado = inventarios.findIndex(a => a.id === idProducto);
    
    inventarios[productoEncontrado].nombre = nombre; 
    inventarios[productoEncontrado].descripcion = descripcion; 
    inventarios[productoEncontrado].precio = precio;
    inventarios[productoEncontrado].cantidad = cantidad;  
    return inventarios;
}

function deleteInv(id){
    const idProducto = parseInt(id);
    const invIndex = inventarios.findIndex(a=> a.id === idProducto); 
    inventarios.splice(invIndex, 1);
    return invIndex;
}

function getInvNombre(nombre) {
    const InvFound = inventarios.find(a=> a.nombre.toLowerCase() === nombre.toLowerCase());
    console.log("Aca se guardo: "+InvFound);
    return InvFound;
}

function getValorTotal(precio, cantidad) {
    const valorTotal = inventarios.reduce((total, product) => total + (product.precio * product.cantidad), 0);
    return valorTotal;
}

function ordenarPrecio(productos = 'asc') {
    const ordPrecio = inventarios.sort((a, b) => productos ? a.precio - b.precio : b.precio - a.precio);
    return ordPrecio;
}

function filtrarPorStock(producto) {
    const filtrProducto = inventarios.filter(a => a.cantidad >= parseInt(producto));
    return filtrProducto;
}

module.exports = {
    createInv,
    getAllInv,
    getInvID,
    deleteInv,
    updateInv,
    getInvNombre,
    getValorTotal,
    ordenarPrecio,
    filtrarPorStock
}