const Joi = require("joi");

const postSchema = Joi.object({
    descripcion: Joi.string().max(255).required().messages({
        "any.required": "La descripción es obligatoria",
        "string.base": "La descripción debe ser un texto",
        "string.max": "La descripción no puede superar los 255 caracteres",
    })
});

module.exports = postSchema;