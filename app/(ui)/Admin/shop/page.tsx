"use client";
import { useState, MouseEvent, useCallback } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import CardContent from "@mui/material/CardContent";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { SelectChangeEvent } from "@mui/material/Select";
import Delete from "@mui/icons-material/Delete";

import ShopHeader from "../components/shopHeader";

interface CellType {
  row: any;
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  textDecoration: "none",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const RowOptions = ({ id }: { id: number | string }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const rowOptionsOpen = Boolean(anchorEl);

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // close the pop up
  const handleRowOptionsClose = () => {
    setAnchorEl(null);
  };

  // delete the user from store
  const handleDelete = () => {
    // dispatch(deleteUser(id))
    handleRowOptionsClose();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* <Tooltip title='보기'>
        <IconButton size='small' component={Link} href={`/apps/user/account/${id}`}>
          <Icon icon='mdi:eye-outline' fontSize={20} />
        </IconButton>
      </Tooltip> */}
      <Tooltip title="삭제">
        <IconButton size="small" onClick={handleRowOptionsClick}>
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog open={rowOptionsOpen} onClose={handleRowOptionsClose}>
        <DialogTitle>회원 아이디 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            말똥보단소똥 {id}님의 아이디를 삭제 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleRowOptionsClose}
          >
            취소
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 70,
    field: "number",
    headerName: "번호",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {`${row?.idx}`}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: "userId",
    headerName: "아이디",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LinkStyled
            href={{
              pathname: `/apps/user/account/${row?.id}`,
              query: { userInfo: JSON.stringify(row) },
            }}
          >
            {row?.login_id}
          </LinkStyled>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: "nickName",
    headerName: "주소",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {`${row?.ur_addr1}`}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: "fullName",
    headerName: "성명",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {`${row?.ur_name}`}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 160,
    field: "phoneNumber",
    headerName: "휴대폰번호",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {`${row?.ur_phone}`}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: "joinType",
    headerName: "로그인구분",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {row?.ur_join_type}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.2,
    minWidth: 230,
    field: "agreeMarketing",
    headerName: "마케팅수신동의",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {row?.ur_join_type ? "동의" : "미동의"}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.4,
    minWidth: 140,
    field: "createdAt",
    headerName: "가입일자",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* {renderClient(row)} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography noWrap variant="body1">
              {row?.created_at}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: "actions",
    headerName: "삭제",
    renderCell: ({ row }: CellType) => <RowOptions id={row?.idx} />,
  },
];

const ShopOrderList = () => {
  // ** State
  const [role, setRole] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  const handleFilter = useCallback((val: string) => {
    setValue(val);
  }, []);

  const handleRoleChange = useCallback((e: SelectChangeEvent) => {
    setRole(e.target.value);
  }, []);

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen);

  // fetch user data from database

  // async function fetchData() {
  //   try {
  //     const dataBody = {
  //       login_id: "",
  //       page: 1,
  //       take: JSON.stringify(paginationModel.pageSize),
  //     };

  //     const url = `${authConfig.serverEndpoint}${authConfig.memberListEndPoint}`;
  //     const response = await makeApiCall(url, "post", 1, dataBody);
  //     const rowsWithId = response?.data.data.map(
  //       (row: UserData, index: number) => ({ ...row, id: `${index}` })
  //     );

  //     setData(rowsWithId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Grid container>
      <Grid item lg={13}>
        <Card>
          <CardContent>
            <Grid item>
              <Typography variant="h5" fontWeight={"bold"} color={"#900000"}>
                Order List
              </Typography>
            </Grid>
          </CardContent>
          <Divider />
          <ShopHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddUserDrawer}
          />
          <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default ShopOrderList;
