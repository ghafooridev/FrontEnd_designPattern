import { ButtonFactory } from "./ButtonFactory";

export default function App() {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <ButtonFactory variant="primary" label="Save" />
      <ButtonFactory variant="secondary" label="Cancel" />
      <ButtonFactory variant="danger" label="Delete" />
    </div>
  );
}
