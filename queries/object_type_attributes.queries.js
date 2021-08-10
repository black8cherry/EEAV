
class OTAQueries {
    createOTA = 'insert into object_type_attributes (object_type_id, attr_id) values ($1, $2) returning *';
    getOTAByOT = 'select * from object_type_attributes where object_type_id = $1'
    deleteOTA = 'delete from object_type_attributes where object_type_id = $1 and attr_id = $2'
}

module.exports = new OTAQueries()