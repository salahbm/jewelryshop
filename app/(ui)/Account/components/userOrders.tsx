"use client";
import { MouseEvent, useCallback, useState } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import Delete from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { SelectChangeEvent } from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { IoMdEye } from "react-icons/io";

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
      <Tooltip title="보기">
        <IconButton
          size="small"
          component={Link}
          href={{
            pathname: `product${id}`,
            query: { product: JSON.stringify(id) },
          }}
        >
          <IoMdEye fontSize={20} />
        </IconButton>
      </Tooltip>
      <Tooltip title="삭제">
        <IconButton size="small" onClick={handleRowOptionsClick}>
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog open={rowOptionsOpen} onClose={handleRowOptionsClose}>
        <DialogTitle>회원 아이디 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to cancel {id} order?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleRowOptionsClose}
          >
            No
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 50,
    field: "number",
    headerName: "Id",
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
              {row?.id}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 180,
    field: "name",
    headerName: "Product",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LinkStyled
            href={{
              pathname: `product${row?.id}`,
              query: { product: JSON.stringify(row?.id) },
            }}
          >
            {row?.name}
          </LinkStyled>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: "image",
    headerName: "Image",
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={row?.image} width={100} height={100} alt="image" />
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: "count",
    headerName: "Count",
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
              {row?.count}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: "Price",
    headerName: "Price",
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
              ${row?.price}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: "Total",
    headerName: "Total",
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
              $ {row?.price * row?.count}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.21,
    minWidth: 140,
    field: "Address",
    headerName: "Address",
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
              {row?.address}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: "Time",
    headerName: "Expected time",
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
              {row?.time}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: "Process",
    headerName: "Process",
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
            <Typography
              noWrap
              variant="body1"
              className={
                row?.process === "Delivering"
                  ? "text-lime-400"
                  : row?.process === "Canceled"
                  ? "text-red-600"
                  : row?.process === "Delivered"
                  ? "text-lime-600"
                  : row?.process === "Return"
                  ? "text-orange-400"
                  : "text-black"
              }
            >
              {row?.process}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    flex: 0.12,
    minWidth: 100,
    field: "Cancel",
    headerName: "Cancel",
    renderCell: ({ row }: CellType) => <RowOptions id={row?.id} />,
  },
];

const UserOrders = ({ val }: { val: string }) => {
  // ** State

  const [data, setData] = useState<any>(jewelryData);

  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  const filteredOrders = jewelryData.filter((order) => {
    if (val === "Total") {
      return jewelryData;
    }
    return order.process.toLowerCase().includes(val.toLowerCase());
  });
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
    <Card>
      <CardContent>
        <Grid item>
          <Typography variant="h5" fontWeight={"bold"} color={"#900000"}>
            {val} Orders
          </Typography>
        </Grid>
      </CardContent>
      <Divider />

      <DataGrid
        autoHeight
        rows={filteredOrders}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  );
};

export default UserOrders;
const jewelryData = [
  {
    id: 1,
    name: "Diamond Necklace",
    count: 1,
    price: 1200,
    address: "123 Pearl Street",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 2,
    name: "Gold Earrings",
    count: 2,
    price: 450,
    address: "456 Gem Avenue",
    process: "Delivered",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    count: 3,
    price: 150,
    address: "789 Ruby Road",
    process: "Canceled",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 4,
    name: "Sapphire Ring",
    count: 1,
    price: 950,
    address: "101 Jewel Lane",
    process: "Return",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 5,
    name: "Emerald Pendant",
    count: 2,
    price: 300,
    address: "202 Opal Circle",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 6,
    name: "Pearl Earrings",
    count: 1,
    price: 550,
    address: "303 Crystal Way",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 7,
    name: "Amethyst Necklace",
    count: 1,
    price: 200,
    address: "404 Jade Street",
    process: "Return",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 8,
    name: "Ruby Ring",
    count: 2,
    price: 700,
    address: "505 Topaz Avenue",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 9,
    name: "Silver Earrings",
    count: 3,
    price: 120,
    address: "606 Onyx Road",
    process: "Delivered",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 10,
    name: "Gold Bracelet",
    count: 2,
    price: 350,
    address: "707 Garnet Lane",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 11,
    name: "Citrine Necklace",
    count: 1,
    price: 180,
    address: "808 Amber Circle",
    process: "Delivering",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 12,
    name: "Topaz Earrings",
    count: 2,
    price: 250,
    address: "909 Quartz Way",
    process: "Canceled",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 13,
    name: "Pearl Bracelet",
    count: 1,
    price: 300,
    address: "1010 Malachite Street",
    process: "Canceled",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 14,
    name: "Emerald Ring",
    count: 3,
    price: 800,
    address: "1111 Lapis Avenue",
    process: "Delivered",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
  {
    id: 15,
    name: "Diamond Earrings",
    count: 1,
    price: 750,
    address: "1212 Coral Road",
    process: "Return",
    image: "https://picsum.photos//id/789/780/420",
    time: "13.12.2024",
  },
];
