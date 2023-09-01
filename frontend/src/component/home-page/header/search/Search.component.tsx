import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  TextField,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import SearchIcon from "@mui/icons-material/Search";
import { searchRequest } from "../header.helper";
import { CATEGORIES } from "../header.constant";

const StyledSearch = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    border: "1px solid #dfdfdf",
    borderRadius: "40px",
    "&:hover fieldset": {
      border: "1px solid #f9000080",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #f9000080",
      boxShadow: "none",
    },
  },
});

const Search: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [categoryIndex, setCategoryIndex] = useState<string>(
    String(CATEGORIES[0].index)
  );
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

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    setCategoryIndex(event.target.value);
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
    <Box
      sx={{
        height: "40px",
        minWidth: "600px",
        position: "relative",
      }}
    >
      <StyledSearch
        value={search}
        fullWidth
        onChange={handleChangeSearch}
        InputProps={{ startAdornment: <SearchIcon /> }}
        size="small"
        placeholder="Search and hit enter..."
        sx={{
          "& input": {
            marginLeft: "10px",
          },
        }}
      />

      <Select
        value={categoryIndex}
        onChange={handleChangeSelect}
        size="small"
        sx={{
          position: "absolute",
          minWidth: "130px",
          right: 0,
          "& fieldset": {
            border: "none",
            borderLeft: "1px solid #dfdfdf",
            outline: "none",
          },
        }}
      >
        {CATEGORIES.map((category) => (
          <MenuItem key={category.index} value={category.index}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default Search;
