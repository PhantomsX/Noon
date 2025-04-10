import React from "react";

type Props = {
  label: string;
  name?: string;
  value?: string;
};

const RadioElement = (props: Props) => {
  return (
    <label className="text-white capitalize flex gap-2 items-center text-lg">
      <input
        type="radio"
        name={props?.name}
        value={props?.value}
        className="radio bg-white checked:bg-linearGradient checked:border-none border-[#BE7B2C] checked:text-white"
      />
      {props.label}
    </label>
  );
};

export default RadioElement;
