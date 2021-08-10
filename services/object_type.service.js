const db = require("../database")
const queries = require("../queries/object_type.queries")

class ObjectTypeService {
    async createObjectType(req, res) {
        const { parent_id, name } = req.body
        const newOT = await db.query(queries.createOT, [parent_id, name])
        res.json(newOT.rows[0])
    }

    async getObjectType(req, res) {
        const OT = await db.query(queries.getOT, [req.query.object_type_id])
        res.json(OT.rows[0])
    }

    async getAllObjectTypes(req, res) {
        const allOT = await db.query(queries.getAllOT)
        res.json(allOT.rows)
    }

    async updateObjectType(req, res) {
        const { name } = req.body
        const updatedOT = await db.query(queries.updateOT, [name, req.query.object_type_id])
        res.json(updatedOT.rows[0])
    }

    async deleteObjectType(req, res) {
        await db.query(queries.deleteOT, [req.query.object_type_id])
        res.json('200')
    }

    async getParentObjectTypes(req, res) {
        // TODO coming soon...
    }
}

module.exports = new ObjectTypeService()
