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
  const [selectedValue, setSelectedValue] = useState('all');
  const [newVehicle, setNewVehicle] = useState(null);
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [passed, setPassed] = useState(null);
  const [rejected, setRejected] = useState(null);
  const [redAlert, setRedAlert] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetService("vehicles/search");
      setData(response.data);
      setAllData(response.data);
      const response2 = await GetService("vehicles/search?status=passed");
      setPassed(response2.data);
      const response3 = await GetService("vehicles/search?status=rejected");
      setRejected(response3.data);
      const response4 = await GetService("vehicles/search?red_alert=true");
      setRedAlert(response4.data);
      const response5 = await GetService("vehicles/search?in_out=in");
      setCheckIn(response5.data);
      const response6 = await GetService("vehicles/search?in_out=out");
      setCheckOut(response6.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(selectedValue==='red_alert') {
      setData(redAlert);
    } else if(selectedValue==='passed') {
      setData(passed);
    } else if(selectedValue==='rejected') {
      setData(rejected);
    } else if(selectedValue==='all') {
      setData(allData);
    } else if(selectedValue==='check_in') {
      setData(checkIn);
    } else if(selectedValue==='check_out') {
      setData(checkOut);
    }
  }, [selectedValue])

  return (
    <>
      {data && data.length > 0 && (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Total Vehicles</p>
                  <h3 className={classes.cardTitle}>{data.length}</h3>
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
                  <h3 className={classes.cardTitle}>{passed && passed.length}</h3>
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
                  <h3 className={classes.cardTitle}>{rejected && rejected.length}</h3>
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
                  <h3 className={classes.cardTitle}>1</h3>
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
                  <h3 className={classes.cardTitle}>{redAlert && redAlert.length}</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}></div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          { newVehicle && (
            <>
            <h2>Current Vehicle:</h2>
            <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <img src={newVehicle.image} />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <h5
                  className="p-2"
                  style={{
                    padding: "5px 9px",
                  }}
                >
                  Vehilce Info :
                </h5>
                <ul>
                  <li>
                    Vehicle Number : <strong>{newVehicle.number_plate}</strong>
                  </li>
                  <li>
                    Check In / Out : <strong>{newVehicle.check_in_out}</strong>
                  </li>
                  <li>
                    Cleared : <strong>{newVehicle.is_passed_or_rejected ? 'Yes' : 'No'}</strong>
                  </li>
                  <li>
                    Time : <strong>{newVehicle.in_out_datetime}</strong>
                  </li>
                </ul>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <h5
                  className="p-2"
                  style={{
                    padding: "5px 9px",
                  }}
                >
                  Historical Analysis:
                </h5>
                <ul>
                  <li>
                    No of Check In : <strong>{newVehicle.len_checkin}</strong>
                  </li>
                  <li>
                    No of Check Out : <strong>{newVehicle.len_checkout}</strong>
                  </li>
                  <li>
                    Red Alert : <strong>{newVehicle.len_redalert}</strong>
                  </li>
                  <li>
                    Message : <strong>{newVehicle.other_message}</strong>
                  </li>
                </ul>
              </Card>
            </GridItem>
          </GridContainer>
          </>
          )}
          <GridContainer>
            {data && data.length > 0 && (
              <GridItem xs={24} sm={24} md={24}>
                <Card>
                  <CardHeader color="success">
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
                              value="all"
                              control={<Radio color="primary" />}
                              label="All"
                            />
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
                        tableHeaderColor="success"
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
                            item.is_passed_or_rejected ? "Passed" : "Rejected",
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

            {/* <GridItem xs={12} sm={12} md={6}>
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
          */}
          </GridContainer>
        </div>
      )}
    </>
  );
}
