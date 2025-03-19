"use client";
import React, { useEffect, useState } from "react";
import AddChallenge from "@/components/AddChallenge";
import { Button } from "@mui/material";
import Link from "next/link";
import { deleteChallenge } from "@/lib/Database/Actions/ChallengeAction";
import { useRouter } from "next/navigation";
interface ChallengesListProps {
  initialData: any;
  data: { _id: string; title: string }[];  
}

const ChallengesList: React.FC<ChallengesListProps> = ({ initialData }) => {
  
  const [isOpen, setIsOpen] = useState(false);  
  const [data,setData] = useState<ChallengesListProps>(initialData);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("")
  const router = useRouter()
  const handleDelete =(id:string)=>{
     setSelectedId(id)
    setIsDeleteOpen(true)
  }
  console.log("the selected id is", selectedId)
const confirmDelete = async () => {
  try {
    console.log("Deleting challenge with ID:", selectedId);
    "use server"
    const res = await deleteChallenge(selectedId);

    console.log("Delete response:", res);

 
        if (res && res.status === 200) {
      console.log("Refreshing page...");
      window.location.reload(); // ✅ Fully reloads the page
    }
     
  } catch (error) {
    console.log("Error deleting challenge:", error);
  }
  setIsDeleteOpen(false);
};

  // console.log("the data is",data)
  return (
    <main className="flex-1 p-8 ml-64">
      <div>
        <h2 className="text-2xl font-bold mb-4">Challenges List</h2>
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add a Challenge
          </button>
        </div>
      </div>
      {/** list challenges */}
    <div>
          <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Challenges Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data.data) && data?.data?.map((info: { _id: string; title: string }) => (
                            <tr key={info._id} className="bg-white dark:bg-gray-800 hover:bg-gray-50">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {info?.title}
                                </th>
                                 
                            
                                <td className="px-6 py-4">
                                    <div className='flex gap-1'>
                                        <Button variant="outlined" color="primary">
                                            View Details
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={()=> handleDelete(info?._id)}>
                                            Delete
                                        </Button>
                                        
                                        <Button variant="outlined" color="error">
                                                Edit
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {/* <tr class="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" class="px-6 py-3 text-base">Total Packages</th>
                            <td class="px-6 py-3">{paginate?.total}</td>
                        </tr> */}
                    </tfoot>
                </table>
            </div>      
    </div>
      
      {isDeleteOpen &&   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Are you sure you want to delete.</h2>
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="text-red-500 font-bold text-xl"
              >
                ✖
              </button>
            </div>
            <div>
              <button onClick={()=>confirmDelete()}>
                Delete
              </button>
            </div>
          </div>
        </div>}


      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Add a New Challenge</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 font-bold text-xl"
              >
                ✖
              </button>
            </div>
            <AddChallenge />
          </div>
        </div>
      )}
    </main>
  );
};

export default ChallengesList;

