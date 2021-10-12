import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "../data/selectAllUsers"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
      const user = req.query.user
      console.log(user)
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }