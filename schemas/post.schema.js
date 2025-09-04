const Joi = require("joi");

const postSchema = Joi.object({
    descripcion: Joi.string().max(255).required().messages({
        "any.required": "La descripción es obligatoria",
        "string.base": "La descripción debe ser un texto",
        "string.max": "La descripción no puede superar los 255 caracteres",
    }),
    user_id: Joi.number().integer().positive().required().messages({
        "number.base": "user_id debe ser un número",
        "number.integer": "user_id debe ser un número entero",
        "number.positive": "user_id debe ser mayor que 0",
        "any.required": "user_id es obligatorio"
    })
});

module.exports ="postSchema";