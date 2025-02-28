"use client";
import React, { useEffect, useState } from "react";
import AddChallenge from "@/components/AddChallenge";
import { getAllTheChallenges } from "@/lib/Database/Actions/ChallengeAction";

const ChallengesList = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Now works inside a Client Component
 
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
