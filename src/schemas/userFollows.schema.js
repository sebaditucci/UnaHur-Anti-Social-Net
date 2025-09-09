const Joi = require("joi");

const userFollowsSchema = Joi.object({
  follower_id: Joi.number().integer().positive().required().messages({
      "number.base": "El id del follower debe ser un número",
      "number.integer": "El id del follower debe ser un número entero",
      "number.positive": "El id del follower debe ser positivo",
      "any.required": "El id del follower es obligatorio",
    }),

  following_id: Joi.number().integer().positive().required().messages({
      "number.base": "El id del following debe ser un número",
      "number.integer": "El id del following debe ser un número entero",
      "number.positive": "El id del following debe ser positivo",
      "any.required": "El id del following es obligatorio",
    }),
});

module.exports = userFollowsSchema;