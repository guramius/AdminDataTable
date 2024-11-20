import axios from 'axios';
import { useState, useEffect } from 'react';

const UserData = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const axiosUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setUserData(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        axiosUsers();
    }, []);

    return (
        <div>
            {userData.map(item => (
                <div key={item.id}>
                    <p style={{ color: item.completed ? 'green' : 'red' }}>
                        {item.completed ? 'Completed' : 'Not Completed'}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default UserData;
