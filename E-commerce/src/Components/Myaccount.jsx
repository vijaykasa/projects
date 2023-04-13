import React from 'react'
import { MyConsumer } from './Authcomponent'

export default function Myaccount() {
    const {userData}=MyConsumer()
  return (
    <div className='container d-flex justify-content-center align-items-center border-1'>
      <div className='image me-5'>
       <img src={userData.image} alt="profile" width={200} heigh={200}/>
      </div>
      <div>

     <table className='table'>
        <tbody>
            <tr>
                <td>username :</td>
                <td>{userData.id}</td>
            </tr>
            <tr>
                <td>fullname :</td>
                <td>{userData.fullname}</td>
            </tr>
            <tr>
                <td>Email :</td>
                <td>{userData.email}</td>
            </tr>
            <tr>
                <td>Number</td>
                <td>{userData.number}</td>
            </tr>
            <tr>
                <td colSpan={2}><button className='btn btn-warning btn-sm'>Edit</button></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  )
}
