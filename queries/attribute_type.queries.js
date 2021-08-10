
class ATQueries {
    createAT = 'insert into attribute_types (name) values ($1) returning *'
    getAT = 'select * from attribute_types where attr_type_id = $1'
    getAllAT = 'select * from attribute_types'
    updateAT = 'update attribute_types set name = $1  where attr_type_id = $2 returning *'
    deleteAT = 'delete from attribute_types where attr_type_id = $1'
}

module.exports = new ATQueries()