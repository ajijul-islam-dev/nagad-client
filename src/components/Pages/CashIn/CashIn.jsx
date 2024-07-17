import React, { useContext } from 'react'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import { CiPhone, CiUnlock } from 'react-icons/ci'
import { FaBangladeshiTakaSign } from 'react-icons/fa6'
import { AuthContext } from '../../../Providers/AuthProvider'
import useAxios from '../../Hooks/useAxios/useAxios'


function CashIn() {

  const {axiosSecure} = useAxios();
  const {user} = useContext(AuthContext)
  const handleCashIn = (e)=>{
    e.preventDefault()
    const transaction = {
      agentNamber : e.target.agentNumber.value,
      userNumber : e.target.userNumber.value,
      amount : e.target.amount.value,
      pin : e.target.pin.value,
      type : "cash-in",
      status : "pending"
    } 
    axiosSecure.post("/transactions",transaction)
    .then(res => console.log(res.data))
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
              defaultValue={user.phone}
              readOnly
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