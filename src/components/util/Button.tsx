interface PrimaryButtonProps {
  type: "primary";
  label: string;
}

interface SecondaryButtonProps {
  type: "secondary";
  label: string;
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button = () => {
  return <div></div>;
};

export default Button;
