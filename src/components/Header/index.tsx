import { Button } from "@chakra-ui/react";
import { CustomVStack } from "./styles";

interface HeaderProps {
  title: string;
  onclick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onclick,
  title,
}: HeaderProps) => {
  return (
    <CustomVStack >
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <Button onClick={onclick}>Alterar</Button>
    </CustomVStack>
  );
};
