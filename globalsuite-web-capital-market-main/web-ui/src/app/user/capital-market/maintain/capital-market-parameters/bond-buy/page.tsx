"use client";

import { observer } from "mobx-react-lite";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Input, Button , Select} from 'antd'
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });


export default observer(function Page() {
  const pathname = usePathname()
  return (
    <div className={manrope.className}>
  <main className="flex min-h-screen flex-col items-center p-5 gap-16 bg-gray-50">
     <div className="border rounded-xl shadow w-full">
     <h4 className="flex justify-start lg:justify-center items-center text-base px-10 w-full capitalize bg-[#194bfb] text-white rounded-t-xl h-10">
            <Link
              href="/user/capital-market/maintain/capital-market-parameters"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              General
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/trading-account"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              Trading Account
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/NGX-Buy"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              NGX Buy
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/NGX-offer"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              NGX Offer
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/minimum-value"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              Minimum Value
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/nasd-buy"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              NASD Buy
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/nasd-offer"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              NASD Offer
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/min-val-nasd"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              Min. Val. NASD
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/bond-buy"
              className={`${pathname === '/user/capital-market/maintain/capital-market-parameters/bond-buy'} ? bg-gray-40 rounded p-1 : 'text-xs text-neutral-800 py-0.5 px-1 border rounded'`}
   
            >
              Bond Buy
            </Link>
            <Link
              href="/user/capital-market/maintain/capital-market-parameters/bond-offer"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              Bond Offer
            </Link>
            <Link
              href="min-val-bond"
              className="text-xs text-white py-0.5 px-1 border rounded"
            >
              Min. Val. Bond
            </Link>
          </h4>
      <div className="px-5 border m-4 rounded-xl shadow-md ">
        <small className="block text-gray-500 my-3 font-bold">Fee Rate</small>
        <div className="grid lg:grid-cols-5 gap-5 my-5">
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        Sec Fee
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        NASD Fee
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        Commission
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        CSCS
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        Contract Stamp
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        </div>
      
        <div className="grid grid-cols-5 gap-5 my-5">
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        SMS Alert
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        <div className="col-span-1">
        <span className="block text-base font-semibold">
        Alert VAT
        </span>
        <Input placeholder="NOTHING %" />
        </div>
        </div>
      <div className="flex justify-end gap-5 my-5">
     
      </div>
      </div>
    
      <div className="flex justify-end gap-5 p-5">
      <Button className="text-base bg-red-200 text-red-150 border-none font-semibold">Cancel</Button>
        <Button className="text-base bg-blue-200 text-white border-none font-semibold">Save</Button>
      </div>

     </div>
    </main>
    </div>
  
  ); 

})