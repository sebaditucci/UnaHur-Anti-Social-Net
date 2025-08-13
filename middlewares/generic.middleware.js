const existsById = (model) => {
    return async (req, res, next) => {
        const id = req.params.id;
        if (id <= 0) {
            return res.status(400).json({message: "El id del usuario no puede ser negativo"});
        }
        const user = await model.findByPk(id);
        if(!user) {
            return res.status(400).json({message: "El usuario no existe"});
        }
        next();
    }
}

const schemaValidator = (schema) => {
    return (req, res, next) => {
        const {error, _} = schema.validate(req.body, {abortEarly: false});
        if (error) {
            const errors = error.details.map(e => {
                return {atribute: e.path[0], message: e.message, typeError: e.type};
            }) 
            return res.status(400).json(errors);
        }
        next();
    }
}

module.exports = {existsById, schemaValidator}