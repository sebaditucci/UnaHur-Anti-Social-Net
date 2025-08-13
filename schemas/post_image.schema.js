const Joi = require('joi');

const postImageSchema = Joi.object({
    url: Joi.string().uri().max(255).required().messages({
        "any.required": "La URL es obligatoria",
        "string.base": "La URL debe ser un texto",
        "string.uri": "La URL no tiene un formato válido",
        "string.max": "La URL no puede superar los 255 caracteres",
    })
})

module.exports = postImageSchema;