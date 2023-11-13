const mongoose = require('mongoose');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Crear el modelo de usuario basado en el esquema
const User = mongoose.model('User', userSchema);

// Exportar el modelo de usuario para que pueda ser utilizado en otros archivos
module.exports = User;