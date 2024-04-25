const tablaUsuario = document.querySelector('#tablaUsuario');
const tablaProducto = document.querySelector('#tablaProducto');
const formProductos = document.querySelector('#formProductos');

formProductos.addEventListener('submit', crearProducto);

const usuarios = JSON.parse(localStorage.getItem('registrados'));

let productos = JSON.parse(localStorage.getItem('productos'));

class Producto {
	constructor(id, nombre, precio, descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
	}
}

function cargarTablaUsuarios() {
	usuarios.map(function (usuario) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
        `;

		tablaUsuario.appendChild(tr);
	});
}

cargarTablaUsuarios();

//funcion para crear producto

function crearProducto(e) {
	e.preventDefault();

	const id = Date.now();
	const nombreProducto = document.querySelector('#nombreProducto').value;
	const precioProducto = document.querySelector('#precioProducto').value;
	const descripcionProducto = document.querySelector('#descripcionProducto').value;

	//validaciones
	if (nombreProducto === '' || precioProducto === '' || descripcionProducto === '') {
		console.log('todos los productos son obligatorios');
	}

	//creamos una instancia del producto
	const nuevoProducto = new Producto(
		id,
		nombreProducto,
		precioProducto,
		descripcionProducto
	);

	//agregamos el producto a la lista de productos creados
	productos.push(nuevoProducto);

	//guardamos en el localStorage el arreglo de productos
	localStorage.setItem('productos', JSON.stringify(productos));

	//poner alerta si se guardo correctamente

	//limpiar formulario
	formProductos.reset();

	cargarTablaProductos();
}

function cargarTablaProductos() {
	tablaProducto.innerHTML = '';
	productos.map(function (producto) {
		let tr = document.createElement('tr');

		tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.descripcion}</td>
            <td>
                <button class="btn btn-warning" onclick="mostrarModalEditar(${producto.id})"><i class="fa-regular fa-pen-to-square"></i></button>
                <button class="btn btn-danger" onclick="borrarProducto(${producto.id})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

		tablaProducto.appendChild(tr);
	});
}

cargarTablaProductos();

//editar Producto
function mostrarModalEditar(id) {
	//mostrar modal de editar
	document.querySelector('#modalEditar').style.display = 'block';

	//vamos a agarrar el arreglo con todos los productos y vamos a comparar cada uno de ellso con el id que seleccione en el caso que uno sea igual que seleccionamos nos retornara el objeto completo con toda la informacion
	const producto = productos.find(function (producto) {
		return producto.id === id;
	});

	console.log(producto);

	const nombreEditar = (document.querySelector('#nombreProductoEditar').value =
		producto.nombre);
	const precioEditar = (document.querySelector('#precioProductoEditar').value =
		producto.precio);
	const descripcionEditar = (document.querySelector(
		'#descripcionProductoEditar'
	).value = producto.descripcion);
}

//funcion para eliminar
function borrarProducto(id) {
	//primero muestren un modal si esta seguro
	//aca va el modal

	//si confirma ejecutar esto
	productos = productos.filter(function (producto) {
		return producto.id !== id;
	});

	localStorage.setItem('productos', JSON.stringify(productos));

	cargarTablaProductos();
}
