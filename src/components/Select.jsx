import { useState } from "react";

export const Select = ({ options = [], value, onChange, placeholder = "Categories" }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <div className="relative w-auto md:w-54">
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-5 py-3 border rounded-md shadow text-gray-400 border-ligth-blue flex gap-5 items-center justify-between"
            >
                <span className={value ? "text-blue" : "text-gray-400"}>
                    {value || placeholder}
                </span>
                <div>▼</div>
            </button>

            {open && (
                <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
