"use client";

import { observer } from "mobx-react-lite";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Input, Button, Select } from "antd";
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
              className="text-xs text-white py-0.5 px-1 border rounded"
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
              href="/user/capital-market/maintain/capital-market-parameters/min-val-bond"
              className={`${pathname === '/user/capital-market/maintain/capital-market-parameters/min-val-bond'} ? bg-gray-40 rounded p-1 : 'text-xs text-neutral-800 py-0.5 px-1 border rounded'`}
   
            >
              Min. Val. Bond
            </Link>
          </h4>
          <div className="px-5 border m-4 rounded-xl shadow-xl">
            <h5 className="block text-gray-500 my-3 font-bold">
              Minimum Value (Buy)
            </h5
            >
            <div className="w-2/5 mx-auto my-3 py-10 flex flex-col justify-center">
              <span className="block my-2 text-base font-semibold">Commission</span>
              <Input placeholder="NOTHING" />
            </div>
            </div>
            <div className="px-5 border m-4 rounded-xl shadow-xl">
              <h5 className="block text-gray-500 my-5 font-bold">
                Minimum Value (Sale)
              </h5>
              <div className="w-2/5 mx-auto my-3 py-10 flex flex-col justify-center">
                <span className="block my-2 text-base font-semibold">Commission</span>
                <Input placeholder="NOTHING" />
              </div>
            </div>
           
            <div className="flex justify-end gap-5 p-5">
              <Button className="text-base bg-red-200 text-red-150 border-none font-semibold">
                Cancel
              </Button>
              <Button className="text-base bg-blue-200 text-white border-none font-semibold">
                Save
              </Button>
            </div>
            
          
        </div>
      </main>
    </div>
  );
});
