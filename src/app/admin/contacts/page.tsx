"use client"
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Button
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SingleContact{
    _id:string;
    name: string;
    email: string;
    company:string;
    message:string
}
const ContactList = () => {


  const [currentPage, setCurrentPage] = useState(1)
  const [contactData, setContactData] = useState<{ data: SingleContact[], totalContacts: number }>()
  const [contactId , setContactId] = useState<string | []>()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [ singleContact, setSingleContact] = useState<SingleContact>()
  const router = useRouter()
  /** verification to check if the admin is logged in or not */
  useEffect(()=>{
    const item = localStorage.getItem("isAdmin")
    if(item !== "true"){
        router.push(`/admin/login`)
    }
  },[])
  
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(`/api/contact`)
      const data = res;
      if(data?.data){
        setContactData(data?.data);
      }
    }
    fetchData()
  },[])

  
  const deleteHandle = (id: string) => {
        setContactId(id)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

    const confirmDelete =()=>{
                // dispatch(deleteHotel(hotelId))
                setIsDeleteModalOpen(!isDeleteModalOpen)
    }
          
 const handleOpen = (data:SingleContact)=>{
   setSingleContact(data);
 }
console.log("the single contact data is", singleContact)
  console.log("the contact data is", contactData)
  const totalPages = 5

  const handlePageChange=(page:number)=>{
    if(page>=1 && page < totalPages ){
        setCurrentPage(page)
    }
  }

  return (
    <main className="flex-1 p-8 mt-16 ml-64">
            <div className='text-4xl font-bold mb-4'>All Hotels</div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Contacting Person Name
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(contactData?.data) && contactData?.data?.map((info) => (
                            <tr key={info._id} className="bg-white dark:bg-gray-800 hover:bg-gray-50">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {info?.name}
                                </th>
 <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <a href={`mailTo:${info?.email}`}>{info?.email}</a> 
                                </th>

                                <td className="px-6 py-4">
                                    <div className='flex gap-1'>
                                        <Button variant="outlined" color="primary" onClick={() => handleOpen(info)}>
                                            View Details
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={() => deleteHandle(info?._id)}>
                                            Delete
                                        </Button>
                    
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Total Contact Submission</th>
                            <td className="px-6 py-3">{contactData?.totalContacts ?? "N/A"}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
           
            {/**Pagination  */}
            {/* <Pagination totalPages={TotalPage} currentPage={currentPage} paginate={paginate} handlePageClick={handlePageChange} /> */}
            {/** delete modal */}
            {/* {isDeleteModalOpen && <ConfirmDeleteModal confirmDelete={confirmDelete} setShowDeleteModal={deleteHandle} />}                 */}
    </main>
  )
}

export default ContactList