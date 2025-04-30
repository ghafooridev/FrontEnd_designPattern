import { DangerButton } from "../component/DangerButton";
import { PrimaryButton } from "../component/PrimaryButton";
import { SecondaryButton } from "../component/SecondaryButton";
import { ButtonProps, ButtonType } from "../type";

type Props = ButtonProps & { variant: ButtonType };

export const ButtonFactory = ({ variant, ...props }: Props) => {
  switch (variant) {
    case "primary":
      return <PrimaryButton {...props} />;
    case "secondary":
      return <SecondaryButton {...props} />;
    case "danger":
      return <DangerButton {...props} />;

    default:
      return <button className="rounded bg-gray-300 px-4 py-2">Unknown</button>;
  }
};
