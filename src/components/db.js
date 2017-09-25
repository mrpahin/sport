import db from './db_create.js'
export default {
	add: function(table, data, success){
		var len = data.length;
		var key = '', val = [], z = '';
		for(var i in data){			
			key += i+',';	
			val.push(data[i]);
			z += '?,';
		}						
		db.transaction(function(tx){
            tx.executeSql('INSERT INTO `'+table+'` ('+key.substring(0, key.length-1)+') VALUES('+z.substring(0, z.length-1)+')', val, function(tx, res){ 	
            	//console.log(res);
            	success(res.insertId);
            }, null);
        });
	},
	select_all:function(table, where = null, order = null, success){
		var ordersql = '', wheresql = '';		
		if (order.length > 0){
			for(var i in order){
				ordersql += order[i]+',';
			}
			ordersql = 'ORDER BY '+ordersql.substring(0, ordersql.length-1);				
		}			
		if (where) {
			wheresql = 'WHERE '+ where;
		}
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM '+table+' '+wheresql+' '+ordersql, [], function(tx, result){				
				success(result.rows);				
			});
		});
	},
	select_id: function(table, field, id, success){
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM '+table+' WHERE '+field+' = ? ', [id], function(tx, result){				
				success(result.rows.item(0));				
			});
		});
	},
	del: function(table, field, id){
		db.transaction(function(tx){
			tx.executeSql('DELETE FROM '+table+' WHERE '+field+' = ?', [id], function(tx, result){				 
            }, null);
		});
	},
	update_field: function(table, update_field, value, field, id){			
		db.transaction(function(tx){
			tx.executeSql('UPDATE '+table+' SET '+update_field+' = ? WHERE '+field+' = ?', [value, id], function(tx, result){				 
            }, null);
		});
	},
	update: function(table, fields, field, id){		
		db.transaction(function(tx){
			$$.each(fields, function (index, value) {
    	  		tx.executeSql('UPDATE '+table+' SET '+index+' = ? WHERE '+field+' = ?', [value, id], function(tx, result){				 
            	}, null);
			}); 
		});
	},
	count: function(table, where_field, value, success){
		db.transaction(function(tx){
			tx.executeSql('SELECT COUNT(*) as count FROM '+table+' WHERE '+where_field+' = ? ', [value], function(tx, result){				
				success(result.rows.item(0).count);				
			});
		});
	}
}