import db from './db_create.js'
export default {	
	first_run: function(){
		db.transaction(function(tx){	 	        
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Groups (id_group INTEGER PRIMARY KEY AUTOINCREMENT, name_group TEXT)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Exercise (id_exercise INTEGER PRIMARY KEY AUTOINCREMENT, name_exercise VARCHAR(255), id_group INTEGER, type VARCHAR(20))", [], function(tx, res){
	        	Exercise.install();        	
	        });
	        
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Training (id_training INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, start TIME, end TIME, comments TEXT)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Training_exercise (id_training_ex INTEGER PRIMARY KEY AUTOINCREMENT, id_training INTEGER, id_exercise INTEGER, date DATE)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Approach (id_approach INTEGER PRIMARY KEY AUTOINCREMENT, id_training INTEGER, id_exercise INTEGER, weight FLOAT, reps INTEGER, distance VARCHAR(20), time TIME, date DATE)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Programm (id_programm INTEGER PRIMARY KEY AUTOINCREMENT, name_programm VARCHAR(255), comment TEXT)");        
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Programm_training (id_day INTEGER PRIMARY KEY AUTOINCREMENT, id_programm INTEGER)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Programm_training_ex (id_day INTEGER, id_programm INTEGER, id_exercise INTEGER)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Measurements (id_measurements INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, weight FLOAT, thighs FLOAT, biceps_l FLOAT, biceps_r FLOAT, shin_l FLOAT, shin_r FLOAT, chest FLOAT, waist FLOAT, fat FLOAT)");
	        tx.executeSql("CREATE TABLE IF NOT EXISTS Target (id_target INTEGER PRIMARY KEY AUTOINCREMENT, name_target VARCHAR(255), id_exercise INTEGER, measurements_type VARCHAR(50), date_create DATE, date_check DATE, target_value VARCHAR(255))");
	    }, function(err){
	    	console.log(JSON.stringify(err));
	    });       
	},
	initDB: function (){		
		var run = window.localStorage.getItem("first_run");	
		if (!run) {
			window.localStorage.setItem("first_run", "true");
			this.first_run();
		}
		
		//Programm.get_programm_select(function(){});
	}
	
}