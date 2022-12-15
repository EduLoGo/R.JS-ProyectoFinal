const productos = [
    { 
        id: 1,
        category: "hamburguesas", 
        title: "Hamburgesa Especial",
        description: "Carne, Queso Barra, Huevo Frito, Jamon, Lechuga, Tomate y Aderezos",
        price: 550,
        stock: 4,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/822804-4f0b0c58-bd86-4743-94ef-50dd0ddef9a7.jpg"
    },
    {
        id: 2,
        category: "empanadas",
        title: "Tucumanas",
        description: "Carne cortada a cuchillo",
        price: 1000,
        stock: 12,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/f682f1ca-4668-42f6-9482-013547a408ea.jpg"
    },
    {
        id: 3,
        category: "sandwichs", 
        title: "Triple de Lomo",
        description: "Jamon, Lomo, Huevo frito, Lechuga, Tomate, Queso, Manteca y Mayonesa",
        price: 1300,
        stock: 5,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/d42dfb5d-b818-4ab7-ab8d-028666cbab23.jpg"
    },
    {
        id: 4, 
        category: "pizzas",
        title: "Pizza 4 Quesos",
        description: "Salsa, Mozzarella, Provolone, Roquefort, Reggianito, Aceitunas Negra",
        price: 1100,
        stock: 6,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/824592-1858a70b-2ee3-4eb4-acba-6feca0b68b30.jpg"
    },
    { 
        id: 5,
        category: "hamburguesas", 
        title: "Hamburgesa Especial",
        description: "Carne, Queso Barra, Huevo Frito, Jamon, Lechuga, Tomate y Aderezos",
        price: 550,
        stock: 8,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/822804-4f0b0c58-bd86-4743-94ef-50dd0ddef9a7.jpg"
    },
    {
        id: 6,
        category: "empanadas",
        title: "Tucumanas",
        description: "Carne cortada a cuchillo",
        price: 1000,
        stock: 24,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/f682f1ca-4668-42f6-9482-013547a408ea.jpg"
    },
    {
        id: 7,
        category: "sandwichs", 
        title: "Triple de Lomo",
        description: "Jamon, Lomo, Huevo frito, Lechuga, Tomate, Queso, Manteca y Mayonesa",
        price: 130,
        stock: 4,
        picture:"https://images.deliveryhero.io/image/pedidosya/products/d42dfb5d-b818-4ab7-ab8d-028666cbab23.jpg"
    }
]

export const arrayProductos = (category) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(category ? productos.filter(item => item.category === category) : productos)
        }, 2000)
    })
}

export const objetoProducto = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(item => item.id === parseInt(id)))
        }, 2000)
    })
}