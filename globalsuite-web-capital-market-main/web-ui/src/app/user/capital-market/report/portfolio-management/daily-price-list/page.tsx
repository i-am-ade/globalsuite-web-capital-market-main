"use client";
import { useState } from "react";
import {
  DatePicker,
  Form,
  Input,
  Select,
  Button,
  Radio,
  Checkbox,
  Modal,
} from "antd";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

import { observer } from "mobx-react-lite";

export default observer(function Page() {
  const [value, setValue] = useState();

  return (
    <div className={manrope.className}>
 <main className="flex min-h-screen flex-col items-center gap-16 px-5">
      <Form className="w-full  rounded-xl overflow-hidden shadow-2xl bg-gray-50">
        <h4 className="bg-blue-600 p-2 pl-5 text-white text-base">
          Daily Price List
        </h4>
        <div className="px-5 py-5">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="col-span-1 ">
              <span className="block text-sm font-semibold">From</span>
              <DatePicker format="DD/MM/YYYY" className="w-full" />
            </div>

            <div className="col-span-1 ">
              <span className="block text-sm font-semibold">To</span>
              <DatePicker format="DD/MM/YYYY" className="w-full" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 my-3">
          <div className="col-span-1">
            <div className="flex gap-5">
              <Radio value=" By Stock Code" className="block font-semibold text-base">By Stock Code</Radio>
              <Radio value="By Sector" className="block font-semibold text-base">By Sector</Radio>
            </div>
            <Checkbox className="my-2 font-semibold text-sm">Individual Company Performance</Checkbox>
          </div>
          <div className="col-span-1">
            <span className="block font-semibold text-base">Stock Code</span>
            <Select
                defaultValue=""
                className="w-full"
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                ]}
              />
          </div>
          </div>
         

          <div className="flex justify-end">
            <Button className="bg-blue-200 text-white border-none">
              View
            </Button>
          </div>
        </div>
      </Form>
    </main>
    </div>
   
  );
});
