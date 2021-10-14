const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connect = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connect;