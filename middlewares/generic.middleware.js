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

module.exports = {existsById}