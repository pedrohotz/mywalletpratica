import connection from "../database.js";

async function createFinancialEventDB(userId,type,value){
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
      );
}

async function getFinancialEventsDB(userId){
    const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
      );
    return events.rows;
}

export {
    createFinancialEventDB,
    getFinancialEventsDB,
}