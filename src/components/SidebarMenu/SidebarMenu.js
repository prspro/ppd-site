import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "../Logo/Logo";
import useSidebarmenu from "./useSidebarMenu";

const SidebarMenu = () => {
  const { drawerWidth, HomeIcon } = useSidebarmenu();
  return (
    <Drawer
      PaperProps={{
        sx: {
          boxSizing: "border-box",
          width: drawerWidth,
          padding: "30px 50px 30px 40px",
          backgroundColor: "#F1F1FE",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Logo />
      <List>
        <ListItem>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              {HomeIcon()}
            </ListItemIcon>
            <ListItemText>
              item1
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
