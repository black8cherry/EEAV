const Router = require('express')
const attributeService = require('../services/attribute.service')

const attributeRouter = new Router()

attributeRouter.post('/attribute/create', attributeService.createAttribute)
attributeRouter.get('/attribute/get', attributeService.getAttribute)
attributeRouter.get('/attribute/getAll', attributeService.getAllAttributes)
attributeRouter.put('/attribute/update', attributeService.updateAttribute)
attributeRouter.delete('/attribute/delete', attributeService.deleteAttribute)

module.exports = attributeRouter