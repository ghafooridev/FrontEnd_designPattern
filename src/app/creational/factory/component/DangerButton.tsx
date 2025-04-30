import { ButtonProps } from "../type";

export const DangerButton = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
    {label}
  </button>
);
