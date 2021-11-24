import connection from "../database.js";

async function createFinancialEventDB(userId,type,value){
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
      );
}


export {
    createFinancialEventDB,
}