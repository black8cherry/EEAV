
class OQueries {
    createO = 'insert into objects (parent_id, object_type_id, name) values ($1, $2, $3) returning *';
    getO = 'select * from objects where object_id = $1';
    getAllO = 'select * from objects';
    updateO = 'update objects set (parent_id = $1, object_type_id = $2, name = $3)  where object_id = $4 returning *'
    deleteO = 'delete from objects where object_id = $1'
    getParent = 'select * from objects where parent_id = $1'
}

module.exports = new OQueries()