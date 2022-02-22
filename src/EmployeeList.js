import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

export default function EmployeeList() {

    const [count, setCount] = useState(0);
    const [randomJsonData , setRandomJsonData] = useState();
    const[userInfos, setUserInfos] = useState([]);

    const getFullUserName = (userInfo) =>{
        
        const {name: {first, last}} = userInfo;
        return ""; 
    }

    useEffect(()=>{
        getJsonData().then(({randomData}) => {
            setUserInfos({randomData})
        })
    })

    const getJsonData = ()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(({data}) => {
          setRandomJsonData(JSON.stringify({data}))
          return data
      })
      .catch(err =>{
        console.error(err)
      })
    }

    return (
        <>
            <div>
                <button onClick={() => setCount(count+1)}>Increase Count</button>
                <p>{count}</p>
            </div>
            <button onClick={getJsonData}>Get Data</button>

            {userInfos.map((userInfo, key) => {
                <p>{getFullUserName(userInfo)}</p>
            })}
        </>
    )
}
