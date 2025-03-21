'use client'
import Link from 'next/link'
import { useEffect } from "react";
 
const page = () => {
  return (
    <div> 
    <div className='font-mono'>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <Link href={'/'} className="text-blue-600 text-sm flex items-center mb-4">
            ← Back
          </Link>
          <h2 className="text-xl font-bold mb-2">Book a call with our experts</h2>
          <p className="text-gray-700 mb-4">
            Our experts: Amit Srivastava and Abhijeet Chakravarty, are passionate about helping companies overcome high-volume onboarding challenges. They'd love to hear yours and tailor an iona.ai solution to fit your specific needs. Book a no-obligation, 45-minute consultation at your convenience and discover how iona.ai can help you achieve:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Faster onboarding times</li>
            <li>Improved new hire quality</li>
            <li>Reduced costs and administrative burden</li>
            <li>A smoother, more positive onboarding experience</li>
            <li>100% data accuracy guaranteed!</li>
          </ul>
        </div>

          </div>
          {/** for scheduling the meeting */}
   <div className="flex justify-center items-center  ">
      <iframe
        src="https://cal.com/amitsrivastava" // Replace with your Cal.com username
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
    </div>
  )
}

export default page