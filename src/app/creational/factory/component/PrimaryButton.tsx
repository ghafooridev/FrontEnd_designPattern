import { ButtonProps } from "../type";

export const PrimaryButton = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    {label}
  </button>
);
