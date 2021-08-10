const Router = require('express')
const attributeTypeService = require('../services/attribute_type.service')

const attributeTypeRouter = new Router()

attributeTypeRouter.post('/attribute_type/create', attributeTypeService.createAttributeType)
attributeTypeRouter.get('/attribute_type/get', attributeTypeService.getAttributeType)
attributeTypeRouter.get('/attribute_type/getAll', attributeTypeService.getAllAttributeTypes)
attributeTypeRouter.put('/attribute_type/update', attributeTypeService.updateAttributeType)
attributeTypeRouter.delete('/attribute_type/delete', attributeTypeService.deleteAttributeType)

module.exports = attributeTypeRouter