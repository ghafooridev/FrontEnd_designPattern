import { DangerButton } from "../component/DangerButton";
import { PrimaryButton } from "../component/PrimaryButton";
import { SecondaryButton } from "../component/SecondaryButton";

export default function App() {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <PrimaryButton label="Save" />
      <SecondaryButton label="Cancel" />
      <DangerButton label="Delete" />
    </div>
  );
}
