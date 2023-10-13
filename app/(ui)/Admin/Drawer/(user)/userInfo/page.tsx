"use client";
import { ReactElement, useEffect, useState } from "react";

// ** Next Import

import { useSearchParams } from "next/navigation";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Types
import { UserData, UserLayoutProps } from "src/types/apps/userTypes";

// ** Next Import

// ** MUI Imports
import TabContext from "@mui/lab/TabContext";
import MuiTabList, { TabListProps } from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { styled, Theme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// ** Icon Imports
import Icon from "src/@core/components/icon";

// ** Types
// import { PricingPlanType } from 'src/@core/components/plan-details/types'

// ** Demo Tabs Imports
import TabAccount from "src/views/apps/user/view/TabAccount";
import TabFavorite from "./TabFavorite";
import TabMessage from "./TabMessage";
import { useRouter } from "next/router";

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

const UserViewPage = ({ tab, id }: UserLayoutProps) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData[]>([]);

  // ** Hooks
  const hideText = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();

    setIsLoading(true);

    router
      .push(`/apps/user/${newValue}/${id}`)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error navigating:", error);
        setIsLoading(false);
      });
  };

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
    account: <TabAccount user={user} id={id} />,
    favorite: <TabFavorite user={user} id={id} />,
    message: <TabMessage user={user} id={id} />,
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
                onChange={handleChange}
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
                      <Icon icon="mdi:account-outline" />
                      {!hideText && "회원정보"}
                    </Box>
                  }
                />
                <Tab
                  value="favorite"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...(!hideText && { "& svg": { mr: 2 } }),
                      }}
                    >
                      <Icon icon="mdi:lock-open-outline" />
                      {!hideText && "즐겨찾기 지점"}
                    </Box>
                  }
                />
                <Tab
                  value="message"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...(!hideText && { "& svg": { mr: 2 } }),
                      }}
                    >
                      <Icon icon="mdi:message-bulleted" />
                      {!hideText && "메세지 발송"}
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
              {isLoading ? (
                <Box
                  sx={{
                    mt: 6,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CircularProgress sx={{ mb: 4 }} />
                  <Typography>Loading...</Typography>
                </Box>
              ) : (
                <TabPanel sx={{ p: 0 }} value={activeTab}>
                  {tabContentList[activeTab]}
                </TabPanel>
              )}
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  );
};
UserViewPage.acl = {
  action: "read",
  subject: "acl-page",
};
export default UserViewPage;
