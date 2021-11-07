import React from "react";

const FormWrapper = (props: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex items-center w-full mt-20 overflow-hidden">
      <div className="mx-auto text-left w-[90%] md:w-[60%] xl:w-[32rem]">
        <h1 className="text-[2.5rem] xl:text-[2.8rem] font-extrabold">
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default FormWrapper;