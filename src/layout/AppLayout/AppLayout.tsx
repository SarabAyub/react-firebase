import React from "react";
import Box from "@mui/system/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Sidebar } from "../Sidebar/Sidebar";
import { COLORS } from "@muc/constant";

type Props = {
  children: React.ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props || {};

  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  const handleSideBarToggle = () => setSideBarOpen(!isSideBarOpen);

  return (
    <Box
      display="flex"
      position="relative"
      width="100%"
      overflow="hidden"
      gap={{ md: "10px" }}
    >
      <Box
        component="nav"
        sx={{
          width: 120,
          flexShrink: { sm: 0 },
          height: "98dvh",
        }}
      >
        <Sidebar open={isSideBarOpen} onClose={handleSideBarToggle} />
      </Box>
      <Box sx={{ position: "absolute", display: { sm: "none", xs: "block" } , background: 'darkgray'}}>
        <IconButton
          sx={{
            color: COLORS.primary.main,
          }}
          aria-label="open sidebar"
          onClick={handleSideBarToggle}
        >
          <MenuIcon sx={{ width: "30px", height: "30px" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          p: "12px 0px 0px 12px",
          height: "98dvh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
