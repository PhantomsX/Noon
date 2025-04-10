import React from "react";

type Props = {
  label: string;
  type?: React.ComponentProps<"input">["type"];
};

const Input = (props: Props) => {
  return (
    <label className="h-14 flex flex-col gap-4">
      <span className="uppercase">
        {props.label}
      </span>
      <input type={props.type || "text"} className="border-b outline-0 grow px-2" />
    </label>
  );
};

export default Input;
