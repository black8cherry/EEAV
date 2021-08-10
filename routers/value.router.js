const Router = require('express')
const valueService = require('../services/value.service')

const valueRouter = new Router()

valueRouter.post('/value/create', valueService.createObject)
valueRouter.get('/value/get', valueService.getObject)
valueRouter.get('/value/getAllByO', valueService.getAllObjects)
valueRouter.put('/value/update', valueService.updateObject)
valueRouter.delete('/value/delete', valueService.deleteObject)

module.exports = valueRouter