import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  TextField,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  SelectProps,
  Theme,
} from "@mui/material";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import SearchIcon from "@mui/icons-material/Search";
import { searchRequest } from "../header.helper";
import { CATEGORIES } from "../header.constant";
import { COLORS } from "@/constants/ui.constant";

const StyledSelect = styled(Select)({
  minWidth: "130px",
  border: `1px solid ${COLORS.white}`,
  borderRadius: "4px 40px 40px 4px",
  outline: "none",

  "& .MuiOutlinedInput-notchedOutline": {
    outline: "none",
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${COLORS.baseColor}`,
    borderRadius: "4px 40px 40px 4px",
    outline: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${COLORS.baseColor}`,
    borderRadius: "4px 40px 40px 4px",
    outline: "none",
  },
});

const StyledBox = styled(Box)(
  ({
    isHoverSearch,
  }: SelectProps<unknown> & {
    isHoverSearch: boolean;
  }) => ({
    height: "40px",
    minWidth: "600px",
    borderRadius: "40px",

    display: "flex",
    flexDirection: "row",
    border: isHoverSearch
      ? `1px solid ${COLORS.baseColor}`
      : `1px solid ${COLORS.white}`,
  })
);

const StyledSearch = styled(TextField)({
  border: "none",
  "& input": {
    marginLeft: "10px",
  },
  borderColor: "transparent",
  "& fieldset": {
    borderColor: "transparent",
  },
  "&:hover fieldset": {
    borderColor: "transparent",
  },
  "&.Mui-focused fieldset": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0",
  },
});

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [categoryIndex, setCategoryIndex] = useState<string>(
    String(CATEGORIES[0].index)
  );
  const [isHoverSearch, setHoverSearch] = useState<boolean>(false);
  const { refetch } = useQuery(
    ["search"],
    () => searchRequest(search, categoryIndex),
    {
      enabled: false,
    }
  );

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleChangeSelect = (event: SelectChangeEvent<unknown>) => {
    setCategoryIndex(event.target.value as string);
  };

  const handleHoverSearch = () => {
    setHoverSearch(true);
  };

  const handleLeaveSearch = () => {
    setHoverSearch(false);
  };

  useEffect(() => {
    const debounceFetch = debounce(() => {
      if (Boolean(search)) {
        refetch();
      }
    }, 1000);
    debounceFetch();

    return () => {
      debounceFetch.cancel();
    };
  }, [search, refetch]);

  useEffect(() => {
    if (Boolean(categoryIndex + 1) && Boolean(search)) {
      refetch();
    }
  }, [categoryIndex]);

  return (
    <StyledBox isHoverSearch={isHoverSearch}>
      <StyledSearch
        value={search}
        fullWidth
        onChange={handleChangeSearch}
        InputProps={{ startAdornment: <SearchIcon /> }}
        size="small"
        placeholder="Search and hit enter..."
        onMouseDown={handleHoverSearch}
        onMouseOver={handleHoverSearch}
        onMouseLeave={handleLeaveSearch}
      />

      <StyledSelect
        value={categoryIndex}
        onChange={handleChangeSelect}
        size="small"
      >
        {CATEGORIES.map((category) => (
          <MenuItem key={category.index} value={category.index}>
            {category.name}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledBox>
  );
};

export default Search;
