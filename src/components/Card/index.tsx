import React from "react";
import Icon from "@mui/material/Icon";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import { green } from "@mui/material/colors";
import { Box } from "@mui/system";

const Card = () => {
    return (
        <>
            <Box
                style={{
                    border: "1px solid #30363D",
                    width: "550px",
                    // height: "150px",
                    borderRadius: "9px",
                    margin: "10px",
                    padding: "10px",
                    color: "white",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box>
                        <h1>
                            Labels do not apply on PR creation bug
                            {/* <ModeStandbyIcon /> me */}
                        </h1>
                    </Box>
                    <Box>
                        <h5>#2958 opened 3 days ago by aaleksandrov</h5>
                    </Box>
                    <Box>
                        <Icon style={{ color: green[500] }}>
                            <ModeStandbyIcon />
                        </Icon>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Card;
