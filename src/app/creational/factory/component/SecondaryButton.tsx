import { ButtonProps } from "../type";

export const SecondaryButton = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
    {label}
  </button>
);
