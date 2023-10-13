// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FileUpload from "@mui/icons-material/FileUpload";
// ** Icon Imports

interface TableHeaderProps {
  value: string;
  toggle: () => void;
  handleFilter: (val: string) => void;
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, value } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 2,
      }}
    >
      <TextField
        fullWidth
        size="small"
        value={value}
        sx={{ mr: 4, mb: 2 }}
        placeholder="Search User"
        onChange={(e) => handleFilter(e.target.value)}
      />

      <Button
        sx={{ mr: 4, mb: 2 }}
        color="secondary"
        variant="outlined"
        startIcon={<FileUpload />}
      >
        Export
      </Button>
    </Box>
  );
};

export default TableHeader;
