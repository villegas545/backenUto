import model from "../database/models/";

const agregarProducto = async (req, res) => {
  try {
    console.log(req.body);
    await model.Producto.create(req.body);
    res.status(200).send({ mensaje: "Producto agregado" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const productos = await model.Producto.findAll();
    res.status(200).send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
const obtenerProducto = async (req, res) => {
  try {
    const producto = await model.Producto.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
const actualizarProducto = async (req, res) => {
  try {
    await model.Producto.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ mensaje: "Producto actualizado" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
const eliminarProducto = async (req, res) => {
  try {
    await model.Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ mensaje: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
export {
  agregarProducto,
  obtenerProductos,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
};
