'use client'
import React,{useState,useEffect} from 'react'
import {useSearchParams ,usePathname, useRouter} from 'next/navigation'

const Search = () => {

    
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)
    const pathname = usePathname();
    const { replace } = useRouter();
    const route = useRouter();

    let queryvalue = searchParams.get('input')?.toString();
    

    const [search,setSearch] = useState((queryvalue) ? queryvalue : "")

    // useEffect(() => {
        
    // }, [search])

    const handleSubmitt = (e) => {
        e.preventDefault();
        if (search){
            params.set('input',search)
            replace(`${pathname}?${params.toString()}`);
        }
        else{
            replace(`${pathname}`);
        }
        
        
    }


    return (
        <div className="searchform"> 
            <form onSubmit={handleSubmitt}>
            <input 
            required
            value={search} 
             onChange={(e) => setSearch(e.target.value)} type="text"/>
            <input type="submit" value="Search" />

            
            
            </form>

            <button  className="searchformbtn" onClick = { () => {
                setSearch("");
                replace(`${pathname}`);
            }}>Refresh</button>
           
            
        </div>
    )
}

export default Search