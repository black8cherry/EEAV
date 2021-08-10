
class VQueries {
    createV = 'insert into values (object_id, attr_id, value) values ($1, $2, $3) returning *';
    getV = 'select * from values where object_id = $1 and attr_id = $2';
    getAllVByO = 'select * from values where object_id = $1';
    updateV = 'update values set value = $1  where object_id = $2 and attr_id = $3 returning *'
    deleteV = 'delete from value where object_id = $1 and attr_id = $2'
}

module.exports = new VQueries()