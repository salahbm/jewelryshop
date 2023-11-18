import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Wallpaper from "@mui/icons-material/Wallpaper";

function MainListItems({
  getDrawerName,
}: {
  getDrawerName: (value: string) => void;
}) {
  function passDrawerName(value: string) {
    getDrawerName(value);
  }
  return (
    <React.Fragment>
      <div className="">
        <ListItemButton
      
          onClick={() => passDrawerName("dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon htmlColor="gray" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
      
          onClick={() => passDrawerName("orders")}
        >
          <ListItemIcon>
            <ShoppingCartIcon htmlColor="gray" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton
      
          onClick={() => passDrawerName("customers")}
        >
          <ListItemIcon>
            <PeopleIcon htmlColor="gray" />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton
      
          onClick={() => passDrawerName("reports")}
        >
          <ListItemIcon>
            <BarChartIcon htmlColor="gray" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton
      
          onClick={() => passDrawerName("webPhoto")}
        >
          <ListItemIcon>
            <Wallpaper htmlColor="gray" />
          </ListItemIcon>
          <ListItemText primary="Website photos" />
        </ListItemButton>
      </div>
    </React.Fragment>
  );
}
export default MainListItems;
