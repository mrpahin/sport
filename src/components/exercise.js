import DB from './db.js'
export default {
	table: 'Exercise',
	get_all:function(success){
		dbb.select_all(this.table, '', [], function(exercise){
			var list_exercise = [];
			for(var i in exercise){
				list_exercise[i] = exercise[i];
			}			
			success({exercises:list_exercise});			
		});
	},
	get_id: function(id, success){
		dbb.select_id(this.table, 'id_exercise', id, function(exercise){
			success(exercise);
		});
	},
	add_exercise: function(name, type){
		dbb.add(this.table, {name_exercise:name, type:type}, function(id){});
	},
	del_exercise: function(id_exercise){
		dbb.del(this.table, 'id_exercise', id_exercise);
	},
	edit_exercise: function(id_exercise, name, type){		
		dbb.update(this.table, {name_exercise:name, type:type}, 'id_exercise', id_exercise);
	},
	install: function(){
		$$.getJSON('assets/res/exercise.json', function (data) {			
			db.transaction(function(tx){				
				for(var i in data){						
					tx.executeSql('INSERT INTO '+ Exercise.table +' (name_exercise, type) VALUES(?,?)', [data[i].title, data[i].type]);					
				}		
			});			
		});
	}	
}