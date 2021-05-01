const db = require('../config/db')

module.exports = {

    all(callback) {
        db.query(`
        SELECT recipes.*, chefs.name
        FROM recipes
        INNER JOIN chefs ON (recipes.chef_id = chefs.id)`,
         function(err, results) {
            if(err) throw `Database Erro! ${err}`
            console.log(results)
            callback(results.rows)
        })    
    },

    find(id, callback) {
        db.query(`
            SELECT * 
            FROM recipes
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Erro! ${err}`
    
                callback(results.rows[0])
            })
    }, 

    // show
    allChefs(callback){
        
        db.query(`SELECT avatar_url, name FROM chefs`,
        function(err, results) {
           if(err) throw `Database Erro! ${err}`
           callback(results.rows)
       })    
    }, 
   

}