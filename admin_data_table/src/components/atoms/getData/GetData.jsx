import axios from 'axios';
import { useState, useEffect } from 'react';
import DeleteButton from '../deleteButton/DeleteButton';

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            setData(filterData => filterData.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
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
                            <DeleteButton onDelete={() => handleDelete(item.id)}  />
                        </div>
                        
                    </>
                )
                
            })
        }
    </div>
  )
}

export default GetData;