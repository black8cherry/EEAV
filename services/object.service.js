const db = require("../database")
const queries = require("../queries/object.queries")

class ObjectService {
    async createObject(req, res) {
        const { parent_id, object_type_id, name } = req.body
        const newO = await db.query(queries.createO, [parent_id, object_type_id, name])
        res.json(newO.rows[0])
    }

    async getObject(req, res) {
        const O = await db.query(queries.getO, [req.query.object_id])
        res.json(O.rows[0])
    }

    async getAllObjects(req, res) {
        const allO = await db.query(queries.getAllO)
        res.json(allO.rows)
    }

    async updateObject(req, res) {
        const { parent_id, object_type_id, name } = req.body
        const updatedO = await db.query(queries.updateO, [parent_id, object_type_id, name, req.query.object_id])
        res.json(updatedO.rows[0])
    }

    async deleteObject(req, res) {
        await db.query(queries.deleteO, [req.query.object_id])
        res.json('200')
    }

    async getParentObject(req, res) {
        const parent = await db.query(queries.getParent, [req.query.parent_id])
        res.json(parent.rows[0])
    }
}

module.exports = new ObjectService()
