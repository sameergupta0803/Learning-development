import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connect(process.env.DB_URI!)
    const connection = mongoose.connection
    connection.once('open', () => {
        console.log("Connected to MongoDB")
    })
    connection.on('error', (err) => {
        console.error('MongoDB connection error:', err)
    })
}
export default connectDB