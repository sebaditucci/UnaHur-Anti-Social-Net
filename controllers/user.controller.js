const {User} = require('../db/models');

const getUsers = async (req, res) => {
    const users = await User.findAll({});
    res.status(200).json(users);
}

const getUserByNickname = async (req, res) => {
    const nickname = req.params.nickname;
    const user = await User.findOne({ where: { nickname } });
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json({message: "Usuario creado correctamente", newUser});
}

const putUserByNickname = async (req, res) => {
    const data = req.body;
    const nickname = req.params.nickname;
    const user = await User.findOne({ where: { nickname } });
    await user.update(data);
    res.status(200).json({message: "Usuario actualizado correctamente", user});
}

const deleteUserByNickname = async (req, res) => {
    const nickname = req.params.nickname;
    const user = await User.findOne({ where: { nickname } });
    await user.destroy();
    res.status(200).json({ message: "Usuario eliminado correctamente" });
}

module.exports = {getUsers, getUserByNickname, createUser, putUserByNickname, deleteUserByNickname};