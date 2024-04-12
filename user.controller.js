// User controlles
const service = require('../services/user.service');
const Joi = require('joi');

module.exports = {
    createUser,
    getList,
    login,
    update,
}

async function createUser(req, res, next) {
    service.createUser(req.body)
    .then((result) => {
        res.send(200, {
            "status": true,
            "message":"User created successfully",
            "data":result,
        });
    })
    .catch((err)=>{
        res.send(403, {
            "status": false,
            "message": `Error: ${err}`
        })
    });
}

async function getList(req, res, next) {
    service.getUser().then((result)=>{
        res.send(200, {
            "status": true,
            "message":"User list displayed successfully",
            "data":result
        });
    })
}
async function login(req, res, next) {
    service.login(req.body)
    .then((result) => {
        res.send(200, { 
            "status": true,
            "message":"User logged in",
            "data":result,
        });
    })
    .catch((err)=>{
        res.send(403, {
            "status": false,
            "message": `Error: ${err}`
        })
    });
}
async function update(req, res, next) {
    service.update(req.body)
    .then((result) => {
        res.send(200, { 
            "status": true,
            "message":"User updated sucessfull",
            "data":result,
        });
    })
    .catch((err)=>{
        res.send(403, {
            "status": false,
            "message": `Error: ${err}`
        })
    });
}