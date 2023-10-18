"use client";
import {
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const FilterDrawer = ({ open, toggleDrawer }) => {
  const [costFilters, setCostFilters] = useState({});
  const [sizeFilter, setSizeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [rankingFilter, setRankingFilter] = useState("");
  const [materialFilter, setMaterialFilter] = useState("");
  const [goldFilter, setGoldFilter] = useState(false);
  const [silverFilter, setSilverFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  const [typeFilters, setTypeFilters] = useState({
    ring: false,
    bracelet: false,
    other: false,
  });
  const [handmadeFilter, setHandmadeFilter] = useState(false);
  const [genderFilter, setGenderFilter] = useState("");

  const handleCostChange = (event, newValue) => {
    setCostFilters(newValue);
  };

  const handleRadioChange = (event, setFilter) => {
    setFilter(event.target.value);
  };

  const handleMetalCheck = (event) => {
    const metal = event.target.name;
    switch (metal) {
      case "gold":
        setGoldFilter(event.target.checked);
        break;
      case "silver":
        setSilverFilter(event.target.checked);
        break;
      case "other":
        setOtherFilter(event.target.checked);
        break;
      default:
        break;
    }
  };
  const sliderCss = {
    width: useMediaQuery("(max-width: 600px)") ? "50%" : "25%",
    backgroundColor: "#F8F0E3",
    padding: 3,
    margin: 5,
    borderRadius: 5,
  };

  return (
    <Drawer open={open} anchor="right" PaperProps={{ sx: sliderCss }}>
      <button onClick={toggleDrawer}>Filter</button>
      <FormGroup>
        <Typography variant="h6">Cost</Typography>
        <Slider
          value={costFilters}
          onChange={handleCostChange}
          valueLabelDisplay="auto"
          aria-labelledby="cost-filter"
          max={1000}
        />
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Type</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilters.ring}
              onChange={() =>
                setTypeFilters({ ...typeFilters, ring: !typeFilters.ring })
              }
            />
          }
          label="Ring"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilters.bracelet}
              onChange={() =>
                setTypeFilters({
                  ...typeFilters,
                  bracelet: !typeFilters.bracelet,
                })
              }
            />
          }
          label="Bracelet"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={typeFilters.other}
              onChange={() =>
                setTypeFilters({ ...typeFilters, other: !typeFilters.other })
              }
            />
          }
          label="Other"
        />
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Size</Typography>
        {/* Add radio buttons for Size */}
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Year</Typography>
        {/* Add radio buttons for Year */}
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Ranking</Typography>
        {/* Add radio buttons for Ranking */}
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Material</Typography>
        {/* Add radio buttons for Material */}
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Material Details</Typography>
        {/* Add options for material details */}
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Handmade</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={handmadeFilter}
              onChange={() => setHandmadeFilter(!handmadeFilter)}
            />
          }
          label="Handmade"
        />
      </FormGroup>
      <FormGroup>
        <Typography variant="h6">Gender</Typography>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="both" control={<Radio />} label="Both" />
        </RadioGroup>
      </FormGroup>
    </Drawer>
  );
};

export default FilterDrawer;
