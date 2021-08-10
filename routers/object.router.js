const Router = require('express')
const objectService = require('../services/object.service')

const objectRouter = new Router()

objectRouter.post('/object/create', objectService.createObject)
objectRouter.get('/object/get', objectService.getObject)
objectRouter.get('/object/getAll', objectService.getAllObjects)
objectRouter.put('/object/update', objectService.updateObject)
objectRouter.get('/object/getParent', objectService.getParentObject)
objectRouter.delete('/object/delete', objectService.deleteObject)

module.exports = objectRouter