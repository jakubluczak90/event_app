const mongoose = require('mongoose');

const establishDbConnection = async () => {
	return await mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});
}

module.exports = establishDbConnection;