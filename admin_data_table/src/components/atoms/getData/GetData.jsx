import axios from 'axios';
import { useState, useEffect } from 'react';

const GetData = () => {
    const [data, setData] =useState([])
    useEffect(() => {
        const axiosData = async() => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        axiosData();
    }, [])
  return (
    <div>
        {
            data.map(item => {
                return(
                    <>  
                        <div style={{display:'flex', gap:'20px'}}>
                           <p key={item.id}>{item.name}</p>
                        
                            <p>{item.email}</p>
                            <p>{item.address.city}</p>
                            <p>{item.address.zipcode}</p>
                            <button>delete</button>
                            <p>{console.log(item)}</p> 
                        </div>
                        
                    </>
                )
                
            })
        }
    </div>
  )
}

export default GetData;