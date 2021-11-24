import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
async function authenticate(email,password){
    const user = await userRepository.findUserbyEmail(email);

    if(!user || !bcrypt.compareSync(password,user.password)){
        return null;
    }
    const token = jwt.sign({
        id: user.id,
      }, process.env.JWT_SECRET);

    return token;
}

async function register(name,email,password){
    const existentUser = await userRepository.findUserbyEmail(email);
    
    if(existentUser){
        return null;
    } 
    const hashedPassword = bcrypt.hashSync(password, 12);
    await userRepository.createUser(name,email,hashedPassword);
    return true;
}


export { 
    authenticate,
    register,
}