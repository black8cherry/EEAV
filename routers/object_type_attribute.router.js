const Router = require('express')
const objectTypeAttributeService = require('../services/object_type_attribute.service')

const objectTypeAttributeRouter = new Router()

objectTypeAttributeRouter.post('/object_type_attribute/create', objectTypeAttributeService.createObjectTypeAttribute)
objectTypeAttributeRouter.get('/object_type_attribute/getAllByOT', objectTypeAttributeService.getAllObjectTypeAttributeByOT)
objectTypeAttributeRouter.delete('/object_type_attribute/delete', objectTypeAttributeService.deleteObjectTypeAttribute)

module.exports = objectTypeAttributeRouter