
import * as userService from "../services/userService.js";


async function signIn(req, res){
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const token = await userService.authenticate(email,password);
    if(token){
        res.send(token);
    } else {
        res.sendStatus(401);
    }
}


async function signUp(req,res){
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.sendStatus(400);
    }
    const user = await userService.register(name,email,password);
    if(user){
        return res.sendStatus(201);
    } else {
        return res.sendStatus(409);
    }
}

export { signIn, signUp };