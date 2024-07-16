import React from 'react'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import { CiPhone, CiUnlock } from 'react-icons/ci'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'


function CashIn() {
  const handleCashIn = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
        <form onSubmit={handleCashIn} className="flex flex-col items-center gap-5 py-10">
          <h1 className="text-2xl font-bold">Cash In</h1>
          <div className="flex items-center text-error relative">
            <CiPhone className="text-2xl absolute -left-7" />
            <input
              type="text"
              placeholder="Agent"
              className="border-b-2 px-3 py-2 border-error outline-none"
              name="agentNumber"
            />
          </div>
          <div className="flex items-center text-error relative">
            <CiPhone className="text-2xl absolute -left-7" />
            <input
              type="text"
              placeholder="Your Phone"
              className="border-b-2 px-3 py-2 border-error outline-none"
              name="userNumber"
            />
          </div>
          <div className="flex items-center text-error relative">
            <FaBangladeshiTakaSign className="text-2xl absolute -left-7" />
            <input
              type="number"
              placeholder="Enter Amount"
              className="border-b-2 px-3 py-2 border-error outline-none "
              name="amount"
            />
          </div>
          <div className="flex items-center text-error relative">
            <CiUnlock className="text-2xl absolute -left-7" />
            <input
              type="password"
              placeholder="Enter You 5 digit pin"
              className="border-b-2 px-3 py-2 border-error outline-none "
              name="pin"
            />
          </div>

          <button type="submit" className="btn btn-outline btn-wide  btn-md btn-error rounded-full hover:text-white">
            Cash In
          </button>
        </form>
    </div>
  )
}

export default CashIn