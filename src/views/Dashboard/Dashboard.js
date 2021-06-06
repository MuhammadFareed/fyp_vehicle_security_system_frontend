import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Link } from "react-router-dom";
import { bugs, website, server } from "variables/general.js";
// images
import car1 from "./../../assets/images/car1.jpg";
import {
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { GetService } from "./../../services/GeneralServices";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState(null);
  const classes = useStyles();
  console.log(`selectedValue`, selectedValue);
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetService("vehicles/search");
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchMoreData = async () => {
      const response = await GetService("vehicles/search?state="+selectedValue);
      console.log(response.data);
      debugger
      setData(response.data);
    };
    if(selectedValue) {
      fetchMoreData();
    }
  }, [selectedValue])

  return (
    <div>
      <p>Today:</p>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Vehicles</p>
              <h3 className={classes.cardTitle}>49</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Vehicles Passed</p>
              <h3 className={classes.cardTitle}>40</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Vehicles Rejected</p>
              <h3 className={classes.cardTitle}>9</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>New Vehicles</p>
              <h3 className={classes.cardTitle}>8</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Red Alert</p>
              <h3 className={classes.cardTitle}>1</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <p>Current Vehicle:</p>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <img src={car1} />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <p
              className="p-2"
              style={{
                padding: "5px 9px",
              }}
            >
              Vehilce Number Plate / CPLC Result:
            </p>
            <ul>
              <li>
                Number : <strong>IK33PIT</strong>
              </li>
              <li>
                Cleared : <strong>Yes</strong>
              </li>
              <li>
                Time : <strong>5-June, 2021 08:00 AM</strong>
              </li>
            </ul>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <p
              className="p-2"
              style={{
                padding: "5px 9px",
              }}
            >
              Vehilce Number Plate / CPLC Result:
            </p>
            <ul>
              <li>
                No of Check In : <strong>7</strong>
              </li>
              <li>
                No of Check Out : <strong>6</strong>
              </li>
              <li>
                Red Alert : <strong>1</strong>
              </li>
            </ul>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        {/* <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
         */}
        {data && data.length > 0 && (
          <GridItem xs={24} sm={24} md={24}>
            <Card>
              <CardHeader color="primary">
                <div style={{ display: "flex" }}>
                  <h4 className={classes.cardTitleWhite}>All Vehicles</h4>
                  <div
                    style={{
                      position: "absolute",
                      right: "0px",
                      marginTop: "-5px",
                    }}
                  >
                    <FormGroup row>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        onChange={(e) => setSelectedValue(e.target.value)}
                      >
                        <FormControlLabel
                          value="red_alert"
                          control={<Radio color="primary" />}
                          label="Red-Alert"
                        />
                        <FormControlLabel
                          value="passed"
                          control={<Radio color="primary" />}
                          label="Passed"
                        />
                        <FormControlLabel
                          value="rejected"
                          control={<Radio color="primary" />}
                          label="Rejected"
                        />
                        <FormControlLabel
                          value="check_in"
                          control={<Radio color="primary" />}
                          label="Check-In"
                        />
                        <FormControlLabel
                          value="check_out"
                          control={<Radio color="primary" />}
                          label="Check-Out"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </div>
                </div>
              </CardHeader>

              <div style={{ maxHeight: "450px", overflowY: "scroll" }}>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={[
                      "ID",
                      "Vehicle Number",
                      "Pass/Rejected",
                      "Image Url",
                      "Date",
                      "Check In/Out",
                      "Red Alert",
                      "Message",
                      "Enter by",
                    ]}
                    tableData={data.map((item) => {
                      return [
                        item.id,
                        item.number_plate,
                        item.is_passed_or_rejected ? "Yes" : "No",
                        <>
                          <a target="_blank" href={item.image}>
                            {item.image}
                          </a>
                        </>,
                        item.date,
                        item.check_in_out[0].toUpperCase() +
                          item.check_in_out.slice(1),
                        item.red_alert ? "Yes" : "No",
                        item.other_message,
                        item.entry_by,
                      ];
                    })}
                  />
                </CardBody>
              </div>
            </Card>
          </GridItem>
        )}

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Accepted Vehicles</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="success"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Rejected Vehicles</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
