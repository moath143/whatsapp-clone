import React from "react";
import { Box, makeStyles, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const useStyle = makeStyles((theme) => ({
  component: {
    background: "#f6f6f6",
    padding: "10px 0",
  },
  search: {
    position: "relative",
    borderRadius: 18,
    backgroundColor: "#fff",
    "&:hover": {
      //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    color: "#919191",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
    fontSize: 14,
  },
}));
function Search({ setText }) {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon fontSize="small" />
        </Box>
        <InputBase
          placeholder="Search or start new chat"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
}

export default Search;
