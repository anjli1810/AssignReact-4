import React from 'react';
import Axios from "axios";
import {useEffect,useState} from "react";

export function Component1(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[])

    const detail =()=>{
        return data.map((val)=>{
            return (<tr>
                <td>
                    {val.id}
                </td>
                <td>
                    {val.name}
                </td>
                <td>
                    {val.username}
                </td>
              
                <td>
                    {val.email}
                </td>
                <td>
                    {val.phone}
                </td>
                {/* <td>
                    {val.ip}
                </td> */}
                <td>
                    {val.website}
                </td>
                <td>
                    {val.address.zipcode}
                </td>
                
            </tr>)
        })
    }
    return(
        <center>
        <div>
            <h1>Dummy Data</h1>
            <div>
                <table class="firstTable">
                    <tr >
                        <td class="rrow">Sno.   </td>
                        {/* <td>Profile Pic</td> */}
                        <td class="rrow">Name   </td>
                        {/* <td>Last Name</td>
                        <td>Gender</td> */}
                        <td class="rrow">E-mail   </td>
                        <td class="rrow">UserName   </td>
                        <td class="rrow">Phone No.   </td>
                        {/* <td>IP</td> */}
                        <td class="rrow">Website   </td>
                        <td class="rrow">Pincode   </td>
                    </tr>
                    {detail()}
                </table>
            </div>
        </div>
        </center>
    )

}



