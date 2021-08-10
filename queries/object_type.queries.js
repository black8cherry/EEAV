
class OTQueries {
    createOT = 'insert into object_types (parent_id, name) values ($1, $2) returning *'
    getOT = 'select * from object_types where object_type_id = $1'
    getAllOT = 'select * from object_types'
    updateOT = 'update object_types set name = $1  where object_type_id = $2 returning *'
    deleteOT = 'delete from object_types where object_type_id = $1'
}

module.exports = new OTQueries()