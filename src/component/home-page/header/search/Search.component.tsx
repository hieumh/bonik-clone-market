import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  TextField,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import SearchIcon from "@mui/icons-material/Search";
import { searchRequest } from "../header.helper";
import { CATEGORIES } from "../header.constant";

const StyledSearch = styled(TextField)({
  "& fieldset": {
    border: 0,
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

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setCategoryIndex(event.target.value);
  };

  useEffect(() => {
    const debounceFetch = debounce(() => {
      if (Boolean(search)) {
        refetch();
      }
    }, 2000);
    debounceFetch();

    return () => {
      debounceFetch.cancel();
    };
  }, [search]);

  return (
    <div>
      <StyledSearch
        value={search}
        onChange={handleChangeSearch}
        InputProps={{ startAdornment: <SearchIcon /> }}
        size="small"
      />

      <Select value={categoryIndex} onChange={handleChangeSelect} size="small">
        {CATEGORIES.map((category) => (
          <MenuItem key={category.index} value={category.index}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Search;
