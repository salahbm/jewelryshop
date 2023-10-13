import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Wallpaper from "@mui/icons-material/Wallpaper";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton style={{ color: "white" }}>
      <ListItemIcon>
        <DashboardIcon htmlColor="#FFFF" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton style={{ color: "white" }}>
      <ListItemIcon>
        <ShoppingCartIcon htmlColor="#FFFF" />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <Link href="../../Drawer/(user)/userList">
      <ListItemButton style={{ color: "white" }}>
        <ListItemIcon>
          <PeopleIcon htmlColor="#FFFF" />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link>

    <ListItemButton style={{ color: "white" }}>
      <ListItemIcon>
        <BarChartIcon htmlColor="#FFFF" />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton style={{ color: "white" }}>
      <ListItemIcon>
        <Wallpaper htmlColor="#FFFF" />
      </ListItemIcon>
      <ListItemText primary="Website photos" />
    </ListItemButton>
  </React.Fragment>
);
