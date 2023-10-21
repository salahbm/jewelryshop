"use client";
import {
  Checkbox,
  CssBaseline,
  Drawer,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
interface FilterDrawerType {
  open: boolean;
  toggleDrawer: () => void;
}
const FilterDrawer = ({ open, toggleDrawer }: FilterDrawerType) => {
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

  const handleCostChange = (newValue: string) => {
    setCostFilters(newValue);
  };

  const handleMetalCheck = (event: any) => {
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
    padding: 4,
    margin: 2,
    borderRadius: 5,
  };
  const valuetext = (value: number) => {
    return `$${value}`;
  };
  const marks = [
    {
      value: 100,
      label: "$100",
    },

    {
      value: 10000,
      label: "$10000",
    },
  ];

  const ranks = [
    {
      value: 1,
      label: "★",
    },

    {
      value: 5,
      label: "★★★★★",
    },
  ];
  return (
    <Drawer open={open} anchor="right" PaperProps={{ sx: sliderCss }}>
      <button
        className="text-Red outline hover:bg-red-100 rounded-lg self-center px-5 outline-1 flex flex-row items-center gap-1  text-xl"
        onClick={toggleDrawer}
      >
        Filter
        <span>
          <AiFillFilter />
        </span>
      </button>

      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Cost
      </Typography>

      <Slider
        step={50}
        color="error"
        marks={marks}
        defaultValue={500}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        aria-labelledby="label-always-visible-slider"
        max={10000}
        min={100}
      />
      <div className=" border-b-2 border-[#D9D9D9] m-1" />
      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Type
      </Typography>

      <div>
        <FormControlLabel
          value="primary"
          control={<Radio color="error" />}
          label="Ring"
        />
        <FormControlLabel
          value="secondary"
          control={<Radio color="error" />}
          label="Bracelet"
        />
        <FormControlLabel
          value="success"
          label="Chain"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="Wedding Ring"
          control={<Radio color="error" />}
        />
        <FormControlLabel value="error" label="All" control={<Radio />} />
      </div>
      <div className=" border-b-2 border-[#D9D9D9] m-1" />
      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Stone
      </Typography>

      <div>
        <FormControlLabel
          value="primary"
          control={<Radio color="error" />}
          label="Diamonds"
        />
        <FormControlLabel
          value="secondary"
          control={<Radio color="error" />}
          label="Gem Stone"
        />
        <FormControlLabel
          value="success"
          label="Chain"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="No Gem"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="Pearls"
          control={<Radio color="error" />}
        />
        <FormControlLabel value="error" label="All" control={<Radio />} />
      </div>
      <div className=" border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Ranking
      </Typography>
      <Slider
        step={1}
        color="warning"
        marks={ranks}
        defaultValue={3}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        aria-labelledby="label-always-visible-slider"
        max={5}
        min={1}
      />
      <div className=" border-b-2 border-[#D9D9D9] m-1" />
      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Material
      </Typography>
      <div>
        <FormControlLabel
          value="primary"
          control={<Radio color="error" />}
          label="White Gold"
        />
        <FormControlLabel
          value="secondary"
          control={<Radio color="error" />}
          label="Yellow Gold"
        />
        <FormControlLabel
          value="success"
          label="Rose Gold"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="Silver"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="Sterling Silver"
          control={<Radio color="error" />}
        />
        <FormControlLabel value="error" label="All" control={<Radio />} />
      </div>
      <div className=" border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Made
      </Typography>
      <div>
        <FormControlLabel
          value="success"
          label="Handmade"
          control={<Radio color="error" />}
        />
        <FormControlLabel
          value="success"
          label="Manufacture"
          control={<Radio color="error" />}
        />
        <FormControlLabel value="error" label="All" control={<Radio />} />
      </div>
      <div className=" border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight={"bold"} color={"#900000"}>
        Gender
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <div>
          <FormControlLabel
            value="male"
            control={<Radio color="error" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio color="error" />}
            label="Female"
          />
          <FormControlLabel value="both" control={<Radio />} label="Both" />
        </div>
      </RadioGroup>
      <div className=" border-b-2 border-[#D9D9D9] m-1" />
    </Drawer>
  );
};

export default FilterDrawer;
