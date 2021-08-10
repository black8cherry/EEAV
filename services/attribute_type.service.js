const db = require("../database")
const queries = require("../queries/attribute_type.queries")

class AttributeTypeService {
    async createAttributeType(req, res) {
        const { name } = req.body
        const newAT = await db.query(queries.createAT, [name])
        res.json(newAT.rows[0])
    }

    async getAttributeType(req, res) {
        const AT = await db.query(queries.getAT, [req.query.attr_type_id])
        res.json(AT.rows[0])
    }

    async getAllAttributeTypes(req, res) {
        const allAT = await db.query(queries.getAllAT)
        res.json(allAT.rows)
    }

    async updateAttributeType(req, res) {
        const { name } = req.body
        const updatedAT = await db.query(queries.updateAT, [name, req.query.attr_type_id])
        res.json(updatedAT.rows[0])
    }

    async deleteAttributeType(req, res) {
        await db.query(queries.deleteAT, [req.query.attr_type_id])
        res.json('200')
    }
}

module.exports = new AttributeTypeService()
