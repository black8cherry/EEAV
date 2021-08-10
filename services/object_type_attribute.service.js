const db = require("../database")
const queries = require("../queries/object_type_attributes.queries")

class ObjectTypeAttributeService {
    async createObjectTypeAttribute(req, res) {
        const { object_type_id, attr_id } = req.body
        const newOTA = await db.query(queries.createOTA, [object_type_id, attr_id])
        res.json(newOTA.rows[0])
    }

    async getAllObjectTypeAttributeByOT(req, res) {
        const OTA = await db.query(queries.getOTAByOT, [req.query.object_type_id])
        res.json(OTA.rows)
    }

    async deleteObjectTypeAttribute(req, res) {
        const { object_type_id, attr_id } = req.body
        await db.query(queries.deleteOTA, [object_type_id, attr_id])
        res.json('200')
    }
}

module.exports = new ObjectTypeAttributeService()
