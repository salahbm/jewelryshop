"use client";
import React, { useState } from "react";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Chart from "./components/Chart";
import Deposits from "./components/Deposits";
import Orders from "./components/Orders";
import MainListItems from "./components/listItems";
import ShopOrderList from "../shop/page";
import UserList from "../userList/page";
import AddProduct from "./components/AddProduct";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "white",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
    borderRadius: 10,
  },
}));

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [drawerValue, setDrawerValue] = useState<string>("dashboard");
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const getDrawerName = (value: string) => {
    setDrawerValue(value);
  };

  return (
    <Box sx={{ display: "flex", marginBlock: 1 }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} style={{ zIndex: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            ml: 3,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? (
              <KeyboardDoubleArrowLeft htmlColor="gray" />
            ) : (
              <KeyboardDoubleArrowRight htmlColor="gray" />
            )}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems getDrawerName={getDrawerName} />
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          {drawerValue === "dashboard" ? (
            <Grid container spacing={1}>
              {/* Chart */}
              <Grid item xs={12} lg={9} mb={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} lg={3} mb={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 300,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          ) : drawerValue === "orders" ? (
            <ShopOrderList />
          ) : drawerValue === "customers" ? (
            <UserList />
          ) : drawerValue === "reports" ? (
            <p>reports</p>
          ) : drawerValue === "webPhoto" ? (
            <p>Photo</p>
          ) : drawerValue ==='addProduct' ? <AddProduct/> : null}
        </Container>
      </Box>
    </Box>
  );
}
