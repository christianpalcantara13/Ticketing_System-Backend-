require('dotenv').config();

const mongoose = require('mongoose');

const connection_url = process.env.mongo_db_connection_string;

console.log('🛠️ Loaded DB connection string:', connection_url);

async function connectDB() {
    try {
        await mongoose.connect(connection_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Successfully connected to MongoDB!');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
    }
}

connectDB();

module.exports = mongoose;
