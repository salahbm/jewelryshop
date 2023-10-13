"use client";
import { ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Grid from "@mui/material/Grid";
import TabContext from "@mui/lab/TabContext";
import MuiTabList, { TabListProps } from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { styled, Theme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonOutline from "@mui/icons-material/PersonOutline";
import TabAccount from "./TabAccount";

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`,
  },
  "& .MuiTab-root": {
    minWidth: 65,
    minHeight: 40,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("md")]: {
      minWidth: 130,
    },
  },
}));

const UserViewPage = ({ tab }: any) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab);

  const [user, setUser] = useState<any[]>([]);

  // ** Hooks
  const hideText = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const getUser = useSearchParams();

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
    const receivedItem = getUser.get("userInfo");

    if (receivedItem) {
      try {
        const parsedItem = JSON.parse(receivedItem);
        setUser(parsedItem);

        window.localStorage.setItem("user", JSON.stringify(parsedItem));
      } catch (error) {
        console.error("Error parsing user info:", error);
      }
    } else {
      // Retrieve and parse the user data from local storage
      const savedUser = window.localStorage.getItem("user");
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error("Error parsing saved user info:", error);
        }
      }
    }
  }, [tab, getUser, activeTab, setUser]);

  const tabContentList: { [key: string]: ReactElement } = {
    account: <TabAccount user={user} />,
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TabContext value={activeTab}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <p> 회원상세페이지</p>
            </Grid>
            <Grid item xs={12}>
              <TabList
                variant="scrollable"
                scrollButtons="auto"
                aria-label="customized tabs example"
              >
                <Tab
                  value="account"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...(!hideText && { "& svg": { mr: 2 } }),
                      }}
                    >
                      <PersonOutline />
                      {!hideText && "회원정보"}
                    </Box>
                  }
                />
              </TabList>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ pt: (theme) => `${theme.spacing(4)} !important` }}
            >
              <TabPanel sx={{ p: 0 }} value={activeTab}>
                {tabContentList[activeTab]}
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default UserViewPage;
