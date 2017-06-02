var config={
	database:{
		mode:'remote', // can be local or remote
		host:'_env(MONGODB_URL_INT):27017',
		port:27017,
		dbname:'teen_production',
		username:'',
		password:''
	}
};


module.exports = config;
