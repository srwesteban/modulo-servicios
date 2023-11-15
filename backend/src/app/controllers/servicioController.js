const Servicio = require('../models/servicioModel');


const getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicio.getAllServicios();
    res.json(servicios);
  } catch (error) {
    console.error("Error al obtener servicios:", error); 
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
};

const getServicioById = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.getServicioById(id);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
};

// Controlador para crear un nuevo servicio
const createServicio = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const servicio = await Servicio.createServicio(nombre, descripcion);
    res.status(201).json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
};

// Controlador para actualizar un servicio por ID
const updateServicio = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const servicio = await Servicio.updateServicio(id, nombre, descripcion);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
};

// Controlador para eliminar un servicio por ID
const deleteServicio = async (req, res) => {
  const { id } = req.params;
  try {
    const servicio = await Servicio.deleteServicio(id);
    if (servicio) {
      res.json(servicio);
    } else {
      res.status(404).json({ error: 'Servicio no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
};

module.exports = {
  getAllServicios,
  getServicioById,
  createServicio,
  updateServicio,
  deleteServicio,
};
