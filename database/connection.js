const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(`MongoDB no connection to  ${process.env.DB_URI}`);
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB