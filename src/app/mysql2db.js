import React from 'react'
import mysql from "mysql2/promise"

const mysql2db =  async (query,data) => {

    try{
        const db  =  await mysql.createConnection({
            host: "localhost",
            port : 3000,
            database: "school",
            user: "root",
            password: "",
            socketPath: '/var/run/mysqld/mysqld.sock',

        })
        
        const [result] = await db.execute(query,data);
        console.log(result)
        await db.end()
        console.log(result)
        return result
    }
    catch ( error){
        console.log(error)
        return new Error(error)
    }
}

export default mysql2db