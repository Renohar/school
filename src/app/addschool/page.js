'use client'
import React,{useState} from 'react'
import {mysqlserveraction} from './mysqlserveraction'
import {useForm} from 'react-hook-form'

import { useRouter } from 'next/navigation';





const page = () => {

    
    

   const {register,handleSubmit, formState: {errors}} =useForm()
   const router = useRouter()

   const [ file,setFile] = useState(null)

    const handleFileChange =  (e) => {
         setFile(e.target.files[0])
      
    }

    const onSubmit = async (data) =>{
        

        const plaindata = {
            name : data.name,
            email : data.email,
            address : data.address,
            city : data.city,
            contact : data.contact,
            state : data.state,
            imageName : data.image[0].name
        }
       
        await mysqlserveraction(plaindata);

        const formData= new FormData();
        formData.set('file', file);
        const res = await fetch('api/upload', {
            method: 'POST',
            body: formData,
        });

       
        router.push("/showschools")

    
    }


    return (
        <div className="addschool">

            <h2>Add School</h2>
            
            <div className="form-div">
           <form method="post" encType="multipart/form-data"  onSubmit={handleSubmit(onSubmit)} >

               <label htmlFor="name"> Enter Name: 

                   <input {...register('name',{required: 'Name is Required', minLength: {
                       value : 4,
                       message : "Minimum 4 characters expected"
                   }})}  id="name" type="text" />

                   {errors ?.name && <p>{errors.name.message}</p> }

               </label>


               <label htmlFor="address"> Enter Address: 
                   <input {...register('address' ,{required: 'Address is Required' , minLength : {
                       value : 4,
                       message : "Minimum 4 characters expected"
                   }})} id="address" type="text" />

                    {errors ?.address && <p>{errors.address.message}</p> }
               </label>

               

               <label htmlFor="city"> Enter City: 
                   <input {...register('city' ,{required: 'City is Required', minLength : {
                       value : 4,
                       message : "Minimum 4 characters expected"
                   }})}   id="city" type="text" />
                   {errors ?.city && <p>{errors.city.message}</p> }
               </label>

               

               <label htmlFor="state"> Enter State: 
                   <input {...register('state',{required: 'State is Required', minLength:{
                       value : 4,
                       message : "Minimum 4 characters expected"
                   }})}   id="state" type="text" />
                   {errors ?.state && <p>{errors.state.message}</p> }
               </label>

               

               <label htmlFor="contact"> Enter Contact Number: 
                   <input {...register('contact',{required:"Contact Number is Required", pattern:{
                       value: /^\d{10}$/,
                       message : "Please enter a valid number"
                   }, minLength : {
                       value : 10,
                       message : "Please enter 10 digits"
                   } 
                   })}   id="contact" type="text" />
                   {errors ?.contact && <p>{errors.contact.message}</p> }
               </label>

               

               <label htmlFor="email"> Enter Email: 
                   <input {...register('email',{required: "Email is Required",pattern :{
                       value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                       message : "Please enter a valid Email"
                   }})}  id="email" type="email" />
                   {errors ?.email && <p>{errors.email.message}</p> }
               </label>

               

               <label htmlFor="image"> Upload image: 
                   <input   {...register('image',{required:true})}  onChange={handleFileChange}   id="image" type="file" />
               </label>

               

               <button  type="submit">Submit</button>
               
               
               

           </form>
           </div>
        </div>
    )
}

export default page