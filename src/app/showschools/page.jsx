
import React from 'react'
import Image from 'next/image'
import mysql2db from '../mysql2db'


import Search from "./Search"





const page = async ({searchParams}) => {

    const result = await mysql2db("select * from schools",[])
    console.log(searchParams)
    const query = searchParams?.input || '';
    console.log(query)

    return (
        
        <div className="showschools">
            
            <h2>School List</h2>

            <Search/>

            <div className="school-card-bloc">
            {
                result.reverse()
                .filter((res) => (
                    res.name && res.name.toLowerCase().includes(query.toLowerCase())
                  ))
                
                .map(
                    
                    (res) =>(
                        <div className="school-card" key={res.id}>
                            <Image src={`/uploads/${res.image}`} alt="school placeholder" width={100} height={100} priority/>
                        
                        <h3>Name : {res.name}</h3>
                        <p>Address : {res.address}</p>
                        <p>City : {res.city}</p>
                        </div>
                    )
                    


                )
              
            }
            {
                result.filter(
                    (res) => 
                        res.name && res.name.toLowerCase().includes(query.toLowerCase())
                    ).length ===0 && (<p>No  Schools Found.</p>
                )
            }
            
            </div>
            
        </div>
    )
}



export default page