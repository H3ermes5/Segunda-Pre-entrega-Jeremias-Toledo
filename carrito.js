const productos = [
    { nombre: "remera", precio: 8500 },
    { nombre: "zapatilla", precio: 200000 },
    { nombre: "pantalon", precio: 10000 },
    { nombre: "short", precio: 6500 },
    { nombre: "medias", precio: 1500 },
];

let carrito = [];

let seleccion = prompt("¿Desea comprar algo?");

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no");
    seleccion = prompt("¿Desea comprar algo?");
}

if (seleccion == "si") {
    alert("Lista de productos");
    let todolosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todolosProductos.join(" - "));
} 
else if (seleccion == "no") {
    alert("Gracias por visitar nuestro sitio web!");
}

while (seleccion != "no") {
    let producto = prompt("agrega un producto al carrito");
    let precio = 0;

    if (producto == "remera" || producto == "zapatilla" || producto == "pantalon" || producto == "short" || producto == "medias") {
        switch (producto) {
            case "remera":
                precio = 8500;
                break;

            case "zapatilla":
                precio = 200000;
                break;

            case "pantalon":
                precio = 10000;
                break;

            case "short":
                precio = 6500;
                break;

            case "medias":
                precio = 1500;
                break;
        }
        let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"));

        carrito.push({ producto, unidades, precio });
        console.log(carrito);
    } else {
        alert("Producto no encontrado");
    }

    seleccion = prompt("¿Desea seguir comprando?");
    while (seleccion == "no") {
        alert("Gracias por tu compra!");
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        });
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar es de: ${total}`);