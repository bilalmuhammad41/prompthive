import mongoose from 'mongoose'

let isConnected = false
export async function connectDB(){
  
  if(isConnected){
    console.log('MongoDB is already connected')
    return
  }
  try {
    
    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
}