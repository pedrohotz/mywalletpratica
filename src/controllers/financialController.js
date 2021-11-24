
import * as financialService from "../services/financialService.js";


async function postFinancialEvents(req,res){
    const authorization = req.headers.authorization || "";
    const token = authorization.split('Bearer ')[1];
    const { value, type } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    const userAuth = financialService.authUser(token);
    if(!userAuth){
        return res.sendStatus(401);
    }

    const checkValue = financialService.checkTypeValue(type,value);
    if(!checkValue){
        return res.sendStatus(400);
    }
    financialService.createFinancialEvent(token,type,value);
    res.sendStatus(201);
}


export {
    postFinancialEvents,
}