const { Reserva } = require('../models/reserva.model');
const NAME = 'Reserva';
const PLURAL_NAME = 'Reservas';

const get = async(req, res) => {
    try {
        if (req.params.id) {
            const obj = await Reserva.findOne({ where: {
                id: req.params.id
            }})
            res.send({ok: true, msg: `${NAME}`, resp: obj});
        } else {
            const objs = await Reserva.findAll();
            res.send({ok: true, msg: `Lista de ${PLURAL_NAME}`, resp: objs});
        }
    } catch (error) {
        res.send({ok: false, msg: `Error GET ${NAME}`, resp: String(error)})
    }
}

const post = async(req, res) => {
    try {
        const model = await Reserva.create(req.body);
        await model.save();
        req.body.id = model.id;
        res.send({ok: true, msg: `${NAME} insertada`, resp: req.body});
    } catch (error) {
        res.send({ok: false, msg: `Error POST ${NAME}`, resp: String(error)})
    }
}

const put = async(req, res) => {
    try {
        const model = await Reserva.findOne({where: {id: req.body.id}})
        for (const key of Object.keys(model.toJSON())) {
            if (key !== 'id') {
                model[key] = req.body[key];
            }
        }
        await model.save();
        req.body.id = model.id;
        res.send({ok: true, msg: `${NAME} editada`, resp: req.body});
    } catch (error) {
        res.send({ok: false, msg: `Error PUT ${NAME}`, resp: String(error)})
    }
}

const del = async(req, res) => {
    try {
        await Reserva.destroy({where: {id: req.params.id}});
        res.send({ok: true, msg: `${NAME} eliminada`, resp: []});
    } catch (error) {
        res.send({ok: false, msg: `Error DELETE ${NAME}`, resp: String(error)})
    }
}

module.exports = {
    get,
    post,
    put,
    del
}