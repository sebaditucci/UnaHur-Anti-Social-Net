const Joi = require('joi');

const postTagSchema = Joi.object({
    post_id: Joi.number().integer().positive().required().messages({
        "number.base": "post_id debe ser un número",
        "number.integer": "post_id debe ser un número entero",
        "number.positive": "post_id debe ser mayor que 0",
        "any.required": "post_id es obligatorio"
    }),
    
    tag_id: Joi.number().integer().positive().required().messages({
        "number.base": "tag_id debe ser un número",
        "number.integer": "tag_id debe ser un número entero",
        "number.positive": "tag_id debe ser mayor que 0",
        "any.required": "tag_id es obligatorio"
    })
});

module.exports = postTagSchema;