const Joi = require('joi');

const userSchema = Joi.object({
    nickname: Joi.string().trim().min(8).max(12).pattern(/^[a-zA-Z0-9_]+$/).required().messages({
        "any.required": "nickname es obligatorio",
        "string.empty": "nickname es obligatorio",
        "string.min": "nickname debe contener como mínimo {#limit} caracteres",
        "string.max": "nickname debe contener como máximo {#limit} caracteres",
        "string.pattern.base": "nickname solo puede contener letras, números y guiones bajos"
    }),
    email: Joi.string().trim().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "email es obligatorio",
        "any.required": "email es obligatorio",
        "string.email": "email no tiene un formato válido",
    }),
    fechaNacimiento: Joi.date().iso().max('now').less('now').greater('1-1-1900').required().messages({
        "any.required": "fecha de nacimiento es obligatoria",
        "date.base": "fecha de nacimiento debe ser una fecha válida",
        "date.max": "fecha de nacimiento no puede ser en el futuro",
        "date.less": "fecha de nacimiento no puede ser hoy o después",
        "date.greater": "fecha de nacimiento debe ser posterior al 01-01-1900"
    }),
    password: Joi.string().trim().min(8).max(64).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/).required().messages({
      "string.empty": "la contraseña es obligatoria",
      "any.required": "la contraseña es obligatoria",
      "string.min": "la contraseña debe tener al menos {#limit} caracteres",
      "string.max": "la contraseña no puede tener más de {#limit} caracteres",
      "string.pattern.base": "la contraseña debe incluir mayúsculas, minúsculas, números y símbolos",
    }),
})

module.exports = userSchema;