import jwt from "jsonwebtoken";
import * as financialRepository from "../repositories/financialRepository.js";
async function authUser(token){
    let user;
    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
        return user;
      } catch {
        return null;
    }
}


async function checkTypeValue(type,value){
    if (!value || !type) {
        return null;
      }
  
      if (!['INCOME', 'OUTCOME'].includes(type)) {
        return null;
      }
  
      if (value < 0) {
        return null;
      }
}

async function createFinancialEvent(token,type,value){
    let user = jwt.verify(token, process.env.JWT_SECRET);
    financialRepository.createFinancialEventDB(user.indexOf,type,value);

}

export {
    authUser,
    checkTypeValue,
    createFinancialEvent,
}