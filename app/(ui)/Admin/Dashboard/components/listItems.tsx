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
      <div className="flex md:flex-col flex-row">
        <ListItemButton
          style={{ color: "white" }}
          onClick={() => passDrawerName("dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon htmlColor="#FFFF" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "white" }}
          onClick={() => passDrawerName("orders")}
        >
          <ListItemIcon>
            <ShoppingCartIcon htmlColor="#FFFF" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "white" }}
          onClick={() => passDrawerName("customers")}
        >
          <ListItemIcon>
            <PeopleIcon htmlColor="#FFFF" />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "white" }}
          onClick={() => passDrawerName("reports")}
        >
          <ListItemIcon>
            <BarChartIcon htmlColor="#FFFF" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton
          style={{ color: "white" }}
          onClick={() => passDrawerName("webPhoto")}
        >
          <ListItemIcon>
            <Wallpaper htmlColor="#FFFF" />
          </ListItemIcon>
          <ListItemText primary="Website photos" />
        </ListItemButton>
      </div>
    </React.Fragment>
  );
}
export default MainListItems;
