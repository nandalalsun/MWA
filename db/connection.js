const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DB_URL + "/" + process.env.DB_NAME);

mongoose.connection.
    once('open', ()=> console.log("Databse connected to " + process.env.DB_NAME))
    .on('error', (err)=>{
        console.log("Failed: " + err);
    });


// mongoose.connection.on(""); 




// let _connection = null;

// const openConnection = function(){
//     MongoClient.connect(process.env.DB_URL, function(err, dbo){
//         if(err){
//             console.log(err);
//             return;
//         }
//         _connection = dbo.db(process.env.DB_NAME);
//         console.log("Database connection successful.");
//     });
// }

// const getConnection = function(){
//     if(_connection == null){
//         openConnection();
//     }
//     return _connection;
// }

// module.exports = {
//     openConnection,
//     getConnection
// }



