"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function PlotAreaSlider() {
  const [value, setValue] = useState(0);
  const t = useTranslations();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="text-white w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <label className="text-lg font-medium">{t("Total Plot Area")}</label>
        <div className="bg-[#363636] text-xs px-2 py-1 rounded-md border border-neutral-500">
          m²
        </div>
      </div>
      <p className="text-sm text-neutral-400 mb-2">
        {t("slide to select the space of the services in m2")}
      </p>

      {/* Slider */}
      <div className="relative w-full">
        <input
          type="range"
          min="1"
          max="1000000"
          value={value}
          onChange={handleChange}
          className="w-full h-2 appearance-none bg-neutral-300 rounded-full"
          style={{
            background: `linear-gradient(to right, #D88C5F 0%, #D88C5F ${
              (value / 1000000) * 100
            }%, #e5e5e5 ${(value / 1000000) * 100}%, #e5e5e5 100%)`,
          }}
        />
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            background: linear-gradient(270deg, #be7b2c 0%, #f9c39d 100%);
            border-radius: 50%;
            cursor: pointer;
            border: none;
            position: relative;
            top: 50%;
          }
          input[type="range"]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            background: #d88c5f;
            border-radius: 50%;
            cursor: pointer;
            border: none;
          }
        `}</style>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm mt-1 text-white">
        <span dir="ltr">01 m²</span>
        <span dir="ltr">1000000 m²</span>
      </div>
    </div>
  );
}
