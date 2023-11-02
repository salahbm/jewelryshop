import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Wallpaper from "@mui/icons-material/Wallpaper";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

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
          style={{ color: "black" }}
          onClick={() => passDrawerName("dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon htmlColor="#333" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "black" }}
          onClick={() => passDrawerName("orders")}
        >
          <ListItemIcon>
            <ShoppingCartIcon htmlColor="#333" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "black" }}
          onClick={() => passDrawerName("customers")}
        >
          <ListItemIcon>
            <PeopleIcon htmlColor="#333" />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton
          style={{ color: "black" }}
          onClick={() => passDrawerName("reports")}
        >
          <ListItemIcon>
            <BarChartIcon htmlColor="#333" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton
          style={{ color: "black" }}
          onClick={() => passDrawerName("addProduct")}
        >
          <ListItemIcon>
            <AddShoppingCart htmlColor="#333" />
      

          </ListItemIcon>
          <ListItemText primary="New Product" />
        </ListItemButton>
        <ListItemButton
          style={{ color: "black" }}
          onClick={() => passDrawerName("webPhoto")}
        >
          <ListItemIcon>
            <Wallpaper htmlColor="#333" />
          </ListItemIcon>
          <ListItemText primary="Website photos" />
        </ListItemButton>
      </div>
    </React.Fragment>
  );
}
export default MainListItems;

