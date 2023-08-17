const { MongoNetworkError } = require('mongodb');
const mongoose = require('mongoose');

// localhost mongodb
mongoose.connect('mongodb://localhost:27017/brillantjewels',{
    useNewUrlParser : true, 
    useUnifiedTopology :true,
});

// // mongo atlas cloud db 
// mongoose.connect('mongodb+srv://lokesh_beyondx:UEbBH3iuxXZfCMK@testdb.bv4vw6r.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to MongoDb"));
db.once('open', function(){
    console.log("Connected To MongoDB");
});

module.exports = db;