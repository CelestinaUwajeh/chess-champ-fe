import Image from "next/image";

import search from "/public/search.svg";

interface InputProps {
  name: string;
  showLabel?: boolean;
  showSearchIcon?: boolean;
  register?: any;
  control?: any;
  errorMessage?: string;
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
}

const AppInput = ({
  name,
  showLabel = false,
  showSearchIcon = true,
  errorMessage = "",
  value = "",
  setValue,
  placeholder = "",
}: InputProps) => {
  return (
    <form>
      {showLabel && <label htmlFor={name} />}
      <div className="h-14 input_border px-4 flex">
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setValue && setValue(e.currentTarget.value);
          }}
          className="bg-transparent text-textGrey border-none outline-none hover:border-none hover:outline-none h-full  text-xs lg:text-sm w-full placeholder:font-manrope focus:outline-none"
        />
        {showSearchIcon && (
          <div className="h-full pl-2 lg:pl-4 flex item-center">
            <Image src={search} className="text-main" alt="search" />
          </div>
        )}
      </div>
      {!!errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </form>
  );
};

export default AppInput;
