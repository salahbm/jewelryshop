"use client";
import { ProductData } from "@/app/constant/productData";
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
import { AiFillFilter, AiOutlineClear } from "react-icons/ai";
interface FilterDrawerType {
  open: boolean;
  toggleDrawer: () => void;
}
const FilterDrawer = ({ open, toggleDrawer }: FilterDrawerType) => {
  const [filter, setFilter] = useState({
    cost: 500,
    category: "All",
    stone: "All",
    ranking: 3,
    material: "All",
    made: "All",
    gender: "both",
  });
  const resetData = {
    cost: 500,
    category: "All",
    stone: "All",
    ranking: 3,
    material: "All",
    made: "All",
    gender: "both",
  };
  // Filter function
  const filterData = () => {
    const filteredData = ProductData.filter((item: any) => {
      return (
        item.cost <= filter.cost &&
        (filter.category === "All" || item.category === filter.category) &&
        (filter.stone === "All" || item.stone === filter.stone) &&
        item.ranking >= filter.ranking &&
        (filter.material === "All" || item.material === filter.material) &&
        (filter.made === "All" || item.made === filter.made) &&
        (filter.gender === "both" || item.gender === filter.gender)
      );
    });

    console.log(filteredData);
    console.log(filter);
  };

  // Event handlers for filter changes
  const handleCostChange = (event: any, newValue: number) => {
    setFilter({ ...filter, cost: newValue });
  };

  const handleCategoryChange = (event: any) => {
    setFilter({ ...filter, category: event.target.value });
  };

  const handleStoneChange = (event: any) => {
    setFilter({ ...filter, stone: event.target.value });
  };

  const handleRankingChange = (event: any, newValue: number) => {
    setFilter({ ...filter, ranking: newValue });
  };

  const handleMaterialChange = (event: any) => {
    setFilter({ ...filter, material: event.target.value });
  };

  const handleMadeChange = (event: any) => {
    setFilter({ ...filter, made: event.target.value });
  };

  const handleGenderChange = (event: any) => {
    setFilter({ ...filter, gender: event.target.value });
  };

  const sliderCss = {
    width: useMediaQuery("(max-width: 600px)") ? "50%" : "25%",
    backgroundColor: "#F8F0E3",
    padding: 2,
    margin: 2,
    borderRadius: 5,
    overflowX: "hidden",
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
      <Typography variant="h5" color={"gray"} fontWeight={"bold"}>
        Filter
      </Typography>
      <div className="flex md:flex-row justify-around mb-2 mt-2 flex-col gap-1">
        <button
          className="text-lime-600 outline hover:bg-red-100 rounded-lg self-center px-5 outline-1 flex flex-row items-center gap-1  text-md"
          onClick={() => {
            filterData();
            toggleDrawer();
          }}
        >
          Filter
          <span>
            <AiFillFilter />
          </span>
        </button>
        <button
          className="text-Red outline hover:bg-red-100 rounded-lg self-center px-5 outline-1 flex flex-row items-center gap-1  text-md"
          onClick={() => setFilter(resetData)}
        >
          Clear
          <span>
            <AiOutlineClear />
          </span>
        </button>
      </div>

      <div className="border-b-2 border-[#D9D9D9] m-1" />
      <Typography variant="h6" fontWeight="bold" color="#900000">
        Cost
      </Typography>

      <Slider
        step={50}
        color="error"
        marks={marks}
        value={filter.cost}
        valueLabelDisplay="on"
        onChange={handleCostChange}
        max={10000}
        min={100}
      />

      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Category
      </Typography>

      <RadioGroup
        aria-label="category"
        name="category"
        value={filter.category}
        onChange={handleCategoryChange}
      >
        <FormControlLabel
          value="Ring"
          control={<Radio color="error" />}
          label="Ring"
        />
        <FormControlLabel
          value="Bracelet"
          control={<Radio color="error" />}
          label="Bracelet"
        />
        <FormControlLabel
          value="Chain"
          control={<Radio color="error" />}
          label="Chain"
        />
        <FormControlLabel
          value="Earring"
          control={<Radio color="error" />}
          label="Earring"
        />
        <FormControlLabel
          value="Wedding Ring"
          control={<Radio color="error" />}
          label="Wedding Ring"
        />
        <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Stone
      </Typography>

      <RadioGroup
        aria-label="stone"
        name="stone"
        value={filter.stone}
        onChange={handleStoneChange}
      >
        <FormControlLabel
          value="Diamonds"
          control={<Radio color="error" />}
          label="Diamonds"
        />
        <FormControlLabel
          value="Gem Stone"
          control={<Radio color="error" />}
          label="Gem Stone"
        />
        <FormControlLabel
          value="Chain"
          control={<Radio color="error" />}
          label="Chain"
        />
        <FormControlLabel
          value="No Gem"
          control={<Radio color="error" />}
          label="No Gem"
        />
        <FormControlLabel
          value="Pearls"
          control={<Radio color="error" />}
          label="Pearls"
        />
        <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Ranking
      </Typography>

      <Slider
        step={1}
        color="warning"
        marks={ranks}
        value={filter.ranking}
        valueLabelDisplay="on"
        onChange={handleRankingChange}
        max={5}
        min={1}
      />

      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Material
      </Typography>

      <RadioGroup
        aria-label="material"
        name="material"
        value={filter.material}
        onChange={handleMaterialChange}
      >
        <FormControlLabel
          value="White Gold"
          control={<Radio color="error" />}
          label="White Gold"
        />
        <FormControlLabel
          value="Yellow Gold"
          control={<Radio color="error" />}
          label="Yellow Gold"
        />
        <FormControlLabel
          value="Rose Gold"
          control={<Radio color="error" />}
          label="Rose Gold"
        />
        <FormControlLabel
          value="Silver"
          control={<Radio color="error" />}
          label="Silver"
        />
        <FormControlLabel
          value="Sterling Silver"
          control={<Radio color="error" />}
          label="Sterling Silver"
        />
        <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Made
      </Typography>

      <RadioGroup
        aria-label="made"
        name="made"
        value={filter.made}
        onChange={handleMadeChange}
      >
        <FormControlLabel
          value="Handmade"
          control={<Radio color="error" />}
          label="Handmade"
        />
        <FormControlLabel
          value="Manufacture"
          control={<Radio color="error" />}
          label="Manufacture"
        />
        <FormControlLabel value="All" control={<Radio />} label="All" />
      </RadioGroup>
      <div className="border-b-2 border-[#D9D9D9] m-1" />

      <Typography variant="h6" fontWeight="bold" color="#900000">
        Gender
      </Typography>

      <RadioGroup
        aria-label="gender"
        name="gender"
        value={filter.gender}
        onChange={handleGenderChange}
      >
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
      </RadioGroup>
    </Drawer>
  );
};

export default FilterDrawer;
