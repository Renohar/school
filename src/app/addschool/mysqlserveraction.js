'use server'

import mysql2db from '../mysql2db';



const mysqlserveraction = async (data) => {
  



  const result = await mysql2db("insert into schools (name,address,city,state,contact,email_id,image) values (?,?,?,?,?,?,?)", [data.name,data.address,data.city,data.state,data.contact,data.email,data.imageName]);

 
};

export { mysqlserveraction };