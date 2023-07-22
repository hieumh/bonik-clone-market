import { TCategory, TFashionCategory, TMenuOption } from "./header.model";
import DiamondIcon from "@mui/icons-material/Diamond";
import DvrIcon from "@mui/icons-material/Dvr";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import YardIcon from "@mui/icons-material/Yard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import PetsIcon from "@mui/icons-material/Pets";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import GarageIcon from "@mui/icons-material/Garage";

export const menu: Array<TMenuOption> = [
  {
    title: "Home",
    children: [
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
      {
        title: "Market 1",
      },
    ],
  },
  {
    title: "Pages",
    children: [
      {
        title: "Sale page",
        children: [
          {
            title: "Version 1",
          },
          {
            title: "Version 2",
          },
        ],
      },
    ],
  },
  {
    title: "User Account",
    children: [
      {
        title: "Orders",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Profile",
        children: [
          {
            title: "View Profile",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Address",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Support tickets",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Wishlist",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
    ],
  },
  {
    title: "Vender Account",
    children: [
      {
        title: "Dashboard",
      },
      {
        title: "Products",
        children: [
          {
            title: "All product",
          },
          {
            title: "Add / Edit product",
          },
        ],
      },
      {
        title: "Orders",
        children: [
          {
            title: "All orders",
          },
          {
            title: "Order details",
          },
        ],
      },
      {
        title: "Profile",
      },
    ],
  },
  {
    title: "User Account",
    children: [
      {
        title: "Orders",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Profile",
        children: [
          {
            title: "View Profile",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Address",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Support tickets",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
      {
        title: "Wishlist",
        children: [
          {
            title: "Order List",
          },
          {
            title: "Order Detail",
          },
        ],
      },
    ],
  },
  {
    title: "Track My Orders",
  },
  {
    title: "Back to Demos",
  },
];

export const CATEGORIES: Array<TCategory> = [
  {
    name: "Car",
    index: 0,
  },
  {
    name: "Clothes",
    index: 1,
  },
  {
    name: "Electronics",
    index: 2,
  },
  {
    name: "Laptop",
    index: 3,
  },
  {
    name: "Desktop",
    index: 4,
  },
  {
    name: "Camera",
    index: 5,
  },
  {
    name: "Toys",
    index: 6,
  },
];

export const CATEGORY_MENU: Array<TCategory> = [
  {
    index: 0,
    name: "Fashion",
    icon: <DiamondIcon />,
    children: [],
  },
  {
    index: 1,
    name: "Electronics",
    icon: <DvrIcon />,
    children: [],
  },
  {
    index: 2,
    name: "Bikes",
    icon: <BikeScooterIcon />,
    children: [],
  },
  {
    index: 3,
    name: "Home & Garden",
    icon: <YardIcon />,
    children: [],
  },
  {
    index: 4,
    name: "Gifts",
    icon: <CardGiftcardIcon />,
    children: [],
  },
  {
    index: 5,
    name: "Music",
    icon: <LibraryMusicIcon />,
    children: [],
  },
  {
    index: 6,
    name: "Health & Beauty",
    icon: <MedicalInformationIcon />,
    children: [],
  },
  {
    index: 7,
    name: "Pets",
    icon: <PetsIcon />,
    children: [],
  },
  {
    index: 8,
    name: "Baby Toys",
    icon: <SmartToyIcon />,
    children: [],
  },
  {
    index: 9,
    name: "Groceries",
    icon: <LocalGroceryStoreIcon />,
    children: [],
  },
  {
    index: 10,
    name: "Automotive",
    icon: <GarageIcon />,
  },
];

export const FASHION_CATEGORIES: Array<TFashionCategory> = [
  {
    name: "Man clothes",
    children: ["Shirt", "T-shirt", "Pant", "Underwear"],
  },
  {
    name: "Accessories",
    children: ["Belt", "Hat", "Watches", "Sunglasses"],
  },
  {
    name: "Shoes",
    children: ["Sneakers", "Sandals", "Formal", "Casual"],
  },
  {
    name: "Bags",
    children: ["Backpack", "Crossbody Bags", "Side Bags", "Slides"],
  },
  {
    name: "Woman Clothes",
    children: ["Shirt", "T-shirt", "Pant", "Underwear"],
  },
  {
    name: "Woman Clothes",
    children: ["Shirt", "T-shirt", "Pant", "Underwear"],
  },
  {
    name: "Accessories",
    children: ["Belt", "Hat", "Watches", "Sunglasses"],
  },
  {
    name: "Shoes",
    children: ["Sneakers", "Sandals", "Formal", "Casual"],
  },
];
