import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";
import MovieIcon from "@material-ui/icons/Movie";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import HighQualityIcon from "@material-ui/icons/HighQuality";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(0,2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MovieFilterIcon style={{ color: purple[500] }} />
      <MovieIcon style={{ color: purple[500] }} />
      <HighQualityIcon style={{ color: purple[500] }} />
    </div>
  );
}
