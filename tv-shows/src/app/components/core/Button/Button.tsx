import { Button } from "@chakra-ui/react";

export const StyledButton = () => (
  <Button
    borderRadius="3xl"
    variant="solid"
    sx={{
      bg: "white",
      color: "black",
      border: "1px solid white",
      _hover: {
        bg: "purple.700",
        border: "1px solid white",
        color: "white",
      },
    }}
  >
    Remove
  </Button>
);
