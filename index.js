const express = require('express');
const attributeTypeRouter = require('./routers/attribute_type.router')
const attributeRouter = require('./routers/attribute.router')
const objectTypeAttributeRouter = require('./routers/object_type_attribute.router')
const objectTypeRouter = require('./routers/object_type.router')
const objectRouter = require('./routers/object.router')
const valueRouter = require('./routers/value.router')

require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(attributeTypeRouter)
app.use(attributeRouter)
app.use(objectTypeAttributeRouter)
app.use(objectTypeRouter)
app.use(objectRouter)
app.use(valueRouter)

app.listen(PORT, () => console.log(`server has been started on port ${PORT}`))