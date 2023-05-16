import React, { useEffect, useState } from 'react'
import './StudentInfo.css'
import { getUser } from '../services/student.service'
import Dialog from '@mui/material/Dialog';
import axios from 'axios';

function StudentInfo(props) {
   const {data , open} = props
   const downloadResult = async()=>{
    axios({
        url: 'https://swarajyabackend.onrender.com/result/644e91f1041954aaf7b9985b',
        method: 'GET',
        responseType: 'blob', // set the response type to blob to receive a binary data
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data])); // create a URL to the file
        const link = document.createElement('a'); // create a new link element
        link.href = url; // set the link's href to the created URL
        link.setAttribute('download', 'file.pdf'); // set the download attribute to trigger the download dialog
        document.body.appendChild(link); // append the link element to the DOM
        link.click(); // click the link to trigger the download
      });
   }
   const downloadIdentyCard = async()=>{
    axios({
        url: `https://swarajyabackend.onrender.com/identyCard/${data._id}`,
        method: 'GET',
        responseType: 'blob', // set the response type to blob to receive a binary data
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data])); // create a URL to the file
        const link = document.createElement('a'); // create a new link element
        link.href = url; // set the link's href to the created URL
        link.setAttribute('download', 'file.pdf'); // set the download attribute to trigger the download dialog
        document.body.appendChild(link); // append the link element to the DOM
        link.click(); // click the link to trigger the download
      });
   }
    return (
        <>
          <Dialog
        fullScreen
         open={open}
         
         
         >
            <div className="student-profile py-4 " style={{background:'#f0f8ff'}}>
          
        
        <div className="container " >
                    <div className="row gap-3">
                        <div className="col-12 " style={{background:'#f0f8ff'}}>
                            <div className="card shadow-sm"   >
                                <div className="card-header  text-center" style={{backgroundColor:"#163169"}}>
                                    <img className="profile_img" color='white'   src={data?.profile || ""} alt="student dp" />
                                    <h3 className='text-white'>{data?.firstName || ' '} {data?.lastName || ""}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Student ID:</strong>{data?.userName || ""}</p>
                                    <p className="mb-0"><strong className="pr-1">Course:</strong>{data?.courseName || " " }</p>
                                    <p className="mb-0"><strong className="pr-1">city:</strong>{data?.city || " "}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" d-flex flex-column">
                            <div className="card shadow-sm flex-fill p-3 w-100">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th width="30%">Enrollment No</th>
                                            <td width="2%">:</td>
                                            <td>{data?.enrollmentNo || "Pending"}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Roll No</th>
                                            <td width="2%">:</td>
                                            <td>{data?.rollNo || "Pending"}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Academic Year	</th>
                                            <td width="2%">:</td>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Blood</th>
                                            <td width="2%">:</td>
                                            <td>B+</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Total fees</th>
                                            <td width="2%">:</td>
                                            <td>{data?.totalFees}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Paid Fees</th>
                                            <td width="2%">:</td>
                                            <td>{data?.totalPaid}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">SYLLABUS</th>
                                            <td width="2%">:</td>
                                            <td> {data?.syllabus ? <a href={data?.syllabus} target='_blank' className="btn btn-download text-info" style={{marginLeft:'-0.7rem'}}><span className="bi bi-download mr-1"></span>Download Syllabus</a> : 'Not Available' }</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Result</th>
                                            <td width="2%">:</td>
                                            <td  >{data?.result ? <a href={data?.result}  target='_blank' className="btn btn-download text-info" style={{marginLeft:'-0.7rem'}}><span className="bi bi-download mr-1"></span>Download Result</a> : 'Not Available' }</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Identity Card</th>
                                            <td width="2%">:</td>
                                            <td > {data?.identyCard ?<a href={data?.identyCard}  target='_blank' className="btn btn-download text-info" style={{marginLeft:'-0.7rem'}}><span className="bi bi-download mr-1"></span>Download Identicard</a> : 'Not Available' }</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            {/* <div style={{ height: '26px' }}></div> */}
                            <div className="  card shadow-sm flex-fill p-3 ml-1 w-100">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href='/Payment'>Pay Fees</a> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
      </Dialog>

        </>
    )
}

export default StudentInfo