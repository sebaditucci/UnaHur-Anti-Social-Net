const Joi = require('joi');

const postImageSchema = Joi.object({
    url: Joi.string().uri().max(255).required().messages({
        "any.required": "La URL es obligatoria",
        "string.base": "La URL debe ser un texto",
        "string.uri": "La URL no tiene un formato válido",
        "string.max": "La URL no puede superar los 255 caracteres",
    }),
    post_id: Joi.number().integer().positive().required().messages({
        "number.base": "post_id debe ser un número",
        "number.integer": "post_id debe ser un número entero",
        "number.positive": "post_id debe ser mayor que 0",
        "any.required": "post_id es obligatorio"
    })
})

module.exports = postImageSchema;