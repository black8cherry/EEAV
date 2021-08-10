const db = require("../database")
const queries = require("../queries/attribute.queries")

class AttributeService {
    async createAttribute(req, res) {
        const { attr_type_id, name } = req.body
        const newA = await db.query(queries.createA, [attr_type_id, name])
        res.json(newA.rows[0])
    }

    async getAttribute(req, res) {
        const A = await db.query(queries.getA, [req.query.attr_id])
        res.json(A.rows[0])
    }

    async getAllAttributes(req, res) {
        const allA = await db.query(queries.getAllA)
        res.json(allA.rows)
    }

    async updateAttribute(req, res) {
        const { name } = req.body
        const updatedA = await db.query(queries.updateA, [name, req.query.attr_id])
        res.json(updatedA.rows[0])
    }

    async deleteAttribute(req, res) {
        await db.query(queries.deleteA, [req.query.attr_id])
        res.json('200')
    }
}

module.exports = new AttributeService()
