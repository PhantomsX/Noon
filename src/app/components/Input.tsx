import React from "react";
import { motion } from "motion/react";

type Props = {
  label: string;
  type?: React.ComponentProps<"input">["type"];
};

const Input = (props: Props) => {
  return (
    <motion.label
      className="h-14 flex flex-col gap-2 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="uppercase font-semibold text-sm text-white mb-1">
        {props.label}
      </span>
      <input
        type={props.type || "text"}
        className="border border-gray-300 dark:border-gray-600 rounded-lg outline-none px-3 py-2 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm focus:border-gold focus:ring-2 focus:ring-gold transition-all duration-200 w-full"
        aria-label={props.label}
      />
    </motion.label>
  );
};

export default Input;
