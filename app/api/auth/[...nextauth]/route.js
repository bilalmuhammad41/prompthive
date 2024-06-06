import User from "@models/user"
import { connectDB } from "@utils/connectDB"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google" 

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    
  ],
  callbacks:{
    async session ({session}){
      const sessionUser = await User.findOne(
        {
          email:session.user.email
        })
  
        session.user.id = sessionUser._id.toString()
      return session
    },
   
    async signIn ({account, profile, user, credentials}){
      try {
        await connectDB()
        const userExist = await User.findOne({email: profile.email})
  
        if(!userExist)
          await User.create({
           email: profile.email,
           username: profile.name.replace(" ",""),
           image: profile.picture

          })
        return true
      } catch (error) {
        return false
      }  
    },
  }
})

export {handlers as GET, handlers as POST}