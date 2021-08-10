
class AQueries {
    createA = "insert into attributes (attr_type_id, name) values ($1, $2) returning *"
    getA = "select * from attributes where attr_id = $1"
    getAllA = "select * from attributes"
    updateA = "update attributes set name = $1  where attr_id = $2 returning *"
    deleteA = "delete from attributes where attr_id = $1"
}

module.exports = new AQueries()
