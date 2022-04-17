import React from "react";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import Icon from "@mui/material/Icon";
import Chip from "@mui/material/Chip";
import { green } from "@mui/material/colors";

const Body = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // marginTop: "50px",
                    borderRadius: "5px",
                    border: "1px solid #30363D",
                    margin: "50px 150px",
                    color: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        // flexDirection: "column",
                        borderBottom: "1px solid #30363D",
                    }}
                >
                    <Icon style={{ margin: "10px", color: green[500] }}>
                        <ModeStandbyIcon />
                    </Icon>
                    <div style={{ lineHeight: "5px" }}>
                        <h1>
                            Labels do not apply on PR creation bug
                            {/* <ModeStandbyIcon /> me */}
                        </h1>
                        <h5>#2958 opened 3 days ago by aaleksandrov</h5>
                    </div>
                    <Chip
                        style={{ margin: "8px" }}
                        label="Chip Filled"
                        color="success"
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        borderBottom: "1px solid #30363D",
                    }}
                >
                    <Icon style={{ margin: "10px", color: green[500] }}>
                        <ModeStandbyIcon />
                    </Icon>
                    <div style={{ lineHeight: "5px" }}>
                        <h1>
                            Labels do not apply on PR creation bug
                            {/* <ModeStandbyIcon /> me */}
                        </h1>
                        <h5>#2958 opened 3 days ago by aaleksandrov</h5>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        borderBottom: "1px solid #30363D",
                    }}
                >
                    <Icon style={{ margin: "10px", color: green[500] }}>
                        <ModeStandbyIcon />
                    </Icon>
                    <div style={{ lineHeight: "5px" }}>
                        <h1>
                            Labels do not apply on PR creation bug
                            {/* <ModeStandbyIcon /> me */}
                        </h1>
                        <h5>#2958 opened 3 days ago by aaleksandrov</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body;
