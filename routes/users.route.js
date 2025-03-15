const express = require('express')
const userController = require("../controllers/users.controllers")

const router = express.Router()

const {getUsers, getUser, createUser, updateUser, deleteUser}= userController

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports ={ userRoute: router}