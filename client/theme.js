import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body, root": {
        h: "100vh",
      },
      p: {
        marginTop: "0 !important",
      },
    },
  },
});
