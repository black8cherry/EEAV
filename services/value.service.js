const db = require("../database")
const queries = require("../queries/value.queries")

class ValueService {
    async createValue(req, res) {
        const { object_id, attr_id, value } = req.body
        const newA = await db.query(queries.createV, [object_id, attr_id, value])
        res.json(newA.rows[0])
    }

    async getValue(req, res) {
        const V = await db.query(queries.getV, [req.query.object_id, req.query.attr_id])
        res.json(V.rows[0])
    }

    async getAllValuesByO(req, res) {
        const allV = await db.query(queries.getAllVByO, [req.query.object_id])
        res.json(allV.rows)
    }

    async updateValue(req, res) {
        const { value } = req.body
        const updatedV = await db.query(queries.updateV, [value, req.query.object_id, req.query.attr_id])
        res.json(updatedV.rows[0])
    }

    async deleteValue(req, res) {
        await db.query(queries.deleteV, [req.query.object_id, req.query.attr_id])
        res.json('200')
    }
}

module.exports = new ValueService()
