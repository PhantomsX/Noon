import React from "react";
import Footer from "../components/Footer";
import RadioElement from "../components/RadioElement";
import Slider from "../components/Slider";
import Input from "../components/Input";

const CalculatePage = () => {
  return (
    <main className="flex-1 main-bg-gradient flex-col flex">
      <div className="flex max-sm:flex-col pt-12 sm:pt-28 sm:ps-[88px] max-sm:gap-16 px-8">
        <h2 className="text-bg capitalize text-5xl tracking-tighter sm:max-w-[330px] font-bold shrink-0">
          Architectural Design Calculator
        </h2>
        <div className="flex-1 flex gap-16 justify-center">
          <div className="max-w-md w-full">
            <h4 className="text-white">Choose Architectural Design</h4>
            <div className="mt-5 space-y-5">
              <div className="bg-linearGradient rounded">
                <select
                  defaultValue="Pick a color"
                  className="select bg-transparent w-full cursor-pointer uppercase"
                >
                  <option>tower</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <RadioElement name="radio-1" label="Office Use" />
                <RadioElement name="radio-1" label="Mixed Use" />
                <RadioElement name="radio-1" label="Residential" />
              </div>
              <div className="border flex justify-center border-bg items-center py-2.5">
                <p className="text-white uppercase text">building</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <RadioElement name="radio-2" label="Mixed Use" />
                <RadioElement name="radio-2" label="Residential" />
                <RadioElement name="radio-2" label="Hospitality" />
              </div>{" "}
              <div className="grid grid-cols-3 gap-8">
                <RadioElement name="radio-2" label="Commercial" />
                <RadioElement name="radio-2" label="Health Care" />
                <RadioElement name="radio-2" label="Offices" />
              </div>
              <div className="border flex justify-center border-bg items-center py-2.5">
                <p className="text-white uppercase text">industrial</p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <RadioElement name="radio-3" label="Warehouse" />
                <RadioElement name="radio-3" label="factory" />
              </div>
              <Slider />
            </div>
            <hr className="divider h-px border-white" />
            <div>
              <div className="text-lg font-medium mb-1 text-white">
                Total Estimated Cost
              </div>
              <p className="text-sm text-neutral-500">
                pricing for all services is in saudi riyals.
              </p>
              <div className="bg-linearGradient w-fit p-2.5 mt-5">0000000</div>
            </div>
          </div>
          <div className="divider after:bg-linearGradient before:bg-linearGradient divider-horizontal" />
          <div className="bg-white max-w-2xl w-full  px-5 py-8">
            <div role="grid" className="grid grid-cols-2 gap-x-4 gap-y-14 mb-4">
              <Input label="First Name" type="text" />
              <Input label="Last Name" type="text" />
              <Input label="Telephone" type="tel" />
              <Input label="Email" type="email" />
              <div className="col-span-full">
                <label className="flex flex-col gap-4">
                  <span className="uppercase">Message</span>
                  <textarea className="border outline-0 p-2" rows={10} />
                </label>
              </div>
            </div>

            <button className="bg-linearGradient w-full uppercase font-bold text-lg py-2.5">
              send inquiry
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CalculatePage;
