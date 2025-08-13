const Joi = require("joi");

const tagSchema = Joi.object({
    tagName: Joi.string().max(255).messages({
        "any.required": "El nombre del tag es obligatorio",
        "string.base": "El nombre del tag debe ser un texto",
        "string.max": "El nombre del tag no puede superar los 255 caracteres",
    })
});

module.exports = tagSchema;