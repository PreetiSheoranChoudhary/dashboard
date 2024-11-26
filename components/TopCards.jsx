
import React, { useState, useEffect } from 'react';

const TopCards = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3303/fake'); 
          const jsonData = await response.json();
          setOrders(jsonData); 
          console.log(jsonData);
  
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);

    return (<>
    <div className='grid grid-cols-3 gap-4 p-4'>
        {
            orders.map(record => {
                return (
                        <div className='col-span-1 bg-white inline-flex justify-between w-full border p-4 rounded-lg'>
                            <div className='flex flex-col w-full pb-4'>
                                <p className='text-2xl font-bold'>${record.id}</p>
                                <p className='text-gray-600'>{record.name}</p>
                            </div>
                            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                                <span className='text-green-700 text-lg'>+{record.total}%</span>
                            </p>
                        </div>

                )
            })
        }
        </div>
    </>)
}

export default TopCards