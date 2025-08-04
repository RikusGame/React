const express = require('express');
const router = express.Router();
const pool = require('../db/connection');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.json(rows);
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const { name, email, role, status, avatar } = req.body;
  const [result] = await pool.query(
    'INSERT INTO users (name, email, role, status, avatar) VALUES (?, ?, ?, ?, ?)',
    [name, email, role, status, avatar]
  );
  res.json({ id: result.insertId, name, email, role, status, avatar });
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = ?', [id]);
  res.sendStatus(204);
});

module.exports = router;
