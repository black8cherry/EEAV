const Router = require('express')
const objectTypeService = require('../services/object_type.service')

const objectTypeRouter = new Router()

objectTypeRouter.post('/object_type/create', objectTypeService.createObjectType)
objectTypeRouter.get('/object_type/get', objectTypeService.getObjectType)
objectTypeRouter.get('/object_type/getAll', objectTypeService.getAllObjectTypes)
objectTypeRouter.put('/object_type/update', objectTypeService.updateObjectType)
objectTypeRouter.get('/object_type/getParent', objectTypeService.getParentObjectTypes)
objectTypeRouter.delete('/object_type/delete', objectTypeService.deleteObjectType)

module.exports = objectTypeRouter