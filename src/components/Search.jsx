import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField, styled, FormControl } from "@mui/material";

const MyForm = styled("form")({
  display: "flex",
  flexDirection: "row",
  padding: 2,
  width: "100%",
  justifyContent: "center",
  fontWeight: "bold",
});

const Search = ({ userSeach, handleOnChange, handleOnSubmit }) => {
  return (
    <MyForm noValidate onSubmit={handleOnSubmit}>
      <TextField
        id="standard-basic"
        label="Search"
        placeholder="e.g Hanoi"
        variant="standard"
        inputProps={{ style: { fontWeight: "bold" } }}
        value={userSeach}
        onChange={(e) => handleOnChange(e)}
        sx={{
          width: "400px",
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        }}
      />
      <IconButton
        onSubmit={() => handleOnSubmit()}
        type="submit"
        aria-label="search"
        size="medium"
        sx={{ alignSelf: "flex-end", color: "black" }}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </MyForm>
  );
};

export default Search;
