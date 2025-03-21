"use client"
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import {
    Button
} from '@mui/material';
import Pagination from '@/components/pagination';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ContactDetailsModal from '@/components/contactDetails';

interface SingleContact{
    _id:string;
    name: string;
    email: string;
    company:string;
    message:string
}
const ContactList = () => {
  const [contactData, setContactData] = useState<{ data: SingleContact[],totalContacts: number }>()
  const [contactId , setContactId] = useState<string | []>()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [ singleContact, setSingleContact] = useState<SingleContact>()
 
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPagesRecieved,setTotalPages] = useState<number>() 
  const [contactsRecieved, setTotalContactsRecieved] = useState<number>() 
  const paginateData = {
    limit: 10,
    total: contactsRecieved ?? 0 // Provide a default value of 0 if undefined
  }
  const totalPages = totalPagesRecieved

  const handlePageClick = (page:number)=>{
    if(page > 0 && page <= (totalPages ?? 0)){
        setCurrentPage(page)
    }
  }
  
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(`/api/contact?page=${currentPage}&limit=10`)
      const data = res;
      if(data?.data){
        setContactData(data?.data);
        setTotalPages(data?.data?.totalPages)
        setTotalContactsRecieved(data?.data?.totalContacts)
       }
    }
    fetchData()
  },[currentPage])

  console.log("the contact data is", contactData)
  
  const deleteHandle = (id: string) => {
        setContactId(id)
        setIsDeleteModalOpen(!isDeleteModalOpen)
    }

   const handleDeleteConfirm = async ()=>{
    try {
        const data = await axios.delete(`/api/contact?id=${contactId}`)
        if(data){
            toast.success("Deleted successfully",{position:"top-right"})
        }
    } catch (error) {
        console.log("the error", error)
    }
   } 
    const confirmDelete =()=>{
      handleDeleteConfirm()
      setIsDeleteModalOpen(!isDeleteModalOpen)
    }
  
 const [openDetailsTab, setDetailsTab] = useState<boolean>(false);   
 const handleOpen = (data:SingleContact)=>{
   setSingleContact(data);
   setDetailsTab(!openDetailsTab)
 }
console.log("the single contact data is", singleContact)
console.log("the contact data is", contactData)

const handleClose =()=>{
    setSingleContact(undefined)
    setDetailsTab(false)
}

  return (
    <main className="flex-1 p-8 ml-64 font-mono">
            <div className='text-4xl font-bold mb-4'>All Contacts</div>
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
            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Are you sure you want to delete this contact? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-4">
                            <Button variant="outlined" color="primary" onClick={() => setIsDeleteModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="error" onClick={confirmDelete}>
                                Confirm Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )}

             {/** details tab open */}
             {openDetailsTab && (
                // <div>
                //     <h1>{singleContact?.name}</h1>
                //     <h1>{singleContact?.email}</h1>
                //     <h1>{singleContact?.message}</h1>
                //     <h1>{singleContact?.company}</h1>
                // </div>

                <ContactDetailsModal isOpen={openDetailsTab} onClose={handleClose} contact={singleContact} />
                )
                
                }
          {/**pagination is */}
          <Pagination paginate={paginateData} currentPage={currentPage} totalPages={totalPages ?? 0} handlePageClick={handlePageClick} />
    </main>
  )
}

export default ContactList