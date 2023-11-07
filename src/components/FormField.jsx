import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-200"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Sorprendeme
          </button>
        )}
      </div>
      <input
        type="text"
        id="name"
        name="name"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-white/10 border border-white/20 text-white text-sm rounded-lg focus:ring-offset-lime-400 focus:border-lime-400 outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
