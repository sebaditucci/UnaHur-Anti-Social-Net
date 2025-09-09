const getAllByModel =  (Model) => {
    return async (req, res) => {
        const records = await Model.findAll({});
        res.status(200).json(records);
    }
}

const getModelById = (Model) => {
    return async (req, res) => {
        const id = req.params.id;
        const model = await Model.findByPk(id);
        res.status(200).json(model);
    }
}

const createNewModel = (Model) => {
    return async (req, res) => {
        const newModel = await Model.create(req.body);
        res.status(201).json(newModel);
    }
}

const putModelById = (Model) => {
    return async (req, res) => {
        const data = req.body;
        const id = req.params.id;
        const model = await Model.findByPk(id);
        await model.update(data);
        res.status(200).json(model);
    }
}

const deleteModelById = (Model) => {
    return async (req, res) => {
        const id = req.params.id;
        const model = await Model.findByPk(id);
        await model.destroy();
        res.status(200).json({message: "Modelo eliminado correctamente"});
    }
}

module.exports = {getAllByModel, getModelById, createNewModel, putModelById, deleteModelById}