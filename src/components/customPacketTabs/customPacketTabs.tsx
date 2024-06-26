"use client";
import { useCart } from "@/context/sumContext";
import PRODUCTS from "@/data/products.json";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useState } from "react";
import ProductSlider from "./slider";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomPacketTabs() {
  const [value, setValue] = React.useState(0);
  const { handleProductQuantityChange } = useCart();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryId: any,
    categoryName: any,
    product: any
  ) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.product_id]: newQuantity,
    }));
    handleProductQuantityChange(
      categoryId,
      categoryName,
      product,
      newQuantity / 10
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "48px",
        }}
      >
        <Tabs
          className="flex flex-col justify-center"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ fontWeight: 700, textTransform: "none" }}
            label="beije Ped"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontWeight: 700, textTransform: "none" }}
            label="beije Günlük Ped"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontWeight: 700, textTransform: "none" }}
            label="beije Tampon"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {PRODUCTS.categories.map((category, i) => (
        <CustomTabPanel value={value} index={i} key={category.category_id}>
          {category.products.map((product) => (
            <ProductSlider
              key={product.product_id}
              value={quantities[product.product_id] || 0}
              onChange={(event: any) =>
                handleSliderChange(
                  event,
                  category.category_id,
                  category.category_name,
                  product
                )
              }
              header={product.product_name}
              max={product.max}
              min={0}
            />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
