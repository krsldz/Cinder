import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ScrollBar from "../SrollBar/ScrollBar";
import ScrollBar2 from "../SrollBar/ScrollBar2";
import ScrollBarViewed from "../SrollBar/ScrollBarViewed";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  bar: {
    backgroundColor: "#802bb1",
  },
}));

export default function LikedFilmsList() {
  const classes = useStyles();
  const [initValue, setInitValue] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setInitValue(true);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Буду смотреть" />
          <LinkTab label="Решу потом" />
          <LinkTab label="Просмотренное" />
        </Tabs>
      </AppBar>
      {initValue ? (
        <>
          <TabPanel value={value} index={0}>
            <ScrollBar />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ScrollBar2 />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ScrollBarViewed />
          </TabPanel>
        </>
      ) : null}
    </div>
  );
}
