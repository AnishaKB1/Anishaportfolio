import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  // createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import "./Navbar.css";
import ANISHA from "./ANISHA.pdf";

const Navbar = () => {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#2196f3", // Set your desired primary color
  //     },
  //     background: {
  //       default: "#ffffff", // Set your desired background color
  //     },
  //   },
  // });

  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const handleMobileSidebarToggle = () => {
    setOpenMobileSidebar(!openMobileSidebar);
  };

  const handleCloseNavMenu = () => {
    setOpenMobileSidebar(false);
  };

  return (
    <div>
      <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
      {/* Mobile View */}
      <div className="mobile-topbar">
        <div
          className="mobile-sidebar-toggle"
          onClick={handleMobileSidebarToggle}
        >
          {openMobileSidebar ? <ClearIcon /> : <MenuIcon />}
        </div>

        {openMobileSidebar && (
          <aside className="mobile-sidebar">
            <div className="close-icon" onClick={handleCloseNavMenu}>
              <ClearIcon />
            </div>
            <ul className="sidebar-list">
              <li className="sidebar-list-item" onClick={handleCloseNavMenu}>
                <a
                  href={`mailto:anishakb4@gmail.com?subject=Hi, How can I help you?&body=Dear Anisha,`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <EmailIcon
                    fontSize="large"
                    style={{
                      marginLeft: "3px",
                      marginTop: "20px",
                      color: "white",
                    }}
                  />
                </a>
              </li>
              <li className="sidebar-list-item" onClick={handleCloseNavMenu}>
                <Link
                  to={"/"}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Lora, serif",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="sidebar-list-item" onClick={handleCloseNavMenu}>
                <Link
                  to={"/Skill"}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Lora, serif",
                  }}
                >
                  Skill
                </Link>
              </li>
              <li className="sidebar-list-item" onClick={handleCloseNavMenu}>
                <a
                  href={ANISHA}
                  download="ANISHA.pdf"
                  id="resume"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Lora, serif",
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </aside>
        )}
      </div>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
         
        }}
      > 

        
         {/* Heading */}
         <Box
  sx={{
    display: { xs: "flex", md: "flex" },
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: { xs: "15px", md: "15px" }, // Adjust padding for different screen sizes
    '@media only screen and (max-width: 600px)': { // Mobile devices
      justifyContent: "flex-start", // Align content to the left for mobile view
      marginLeft: "auto",
    },
    '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)': { // iPad Air
      justifyContent: "flex-end", // Align content to the right for iPad Air
      marginLeft: "auto",
    },
    '@media only screen and (min-device-width: 375px) and (max-device-width: 414px)': { // iPhone XR, SE, 12 Pro
      justifyContent: "flex-start", // Align content to the left for specific iPhones
    },
  
  }}
>
  <Typography textAlign="left" className="anisha">
    <h5
      id="anisha"
      style={{
        marginRight: "30px",
        color: "gray",
        fontFamily: "Lora, serif",
      }}
    >
      Anisha K B
    </h5>
  </Typography>
</Box>


  </Box>



        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "15px",
          }}
        >
          <a
            href="mailto:anishakb4@gmail.com?subject=Hi, How can I help you?&body=Dear Anisha,"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "gray",
                fontSize: "large",
                fontFamily: "Lora, serif",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailIcon
                color="dark"
                fontSize="large"
                style={{
                  marginLeft: "0px",
                  marginTop: "1px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Button>
          </a>

          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "gray",
              display: "block",
              fontSize: "large",
              textTransform: "capitalize",
              fontFamily: "Lora, serif",
            }}
          >
            <Link
              to={"/"}
              style={{
                color: "gray",
                textDecoration: "none",
                fontFamily: "Lora, serif",
              }}
            >
              Home
            </Link>
          </Button>

          <Button
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "gray",
              display: "block",
              fontSize: "large",
              textTransform: "capitalize",
              fontFamily: "Lora, serif",
            }}
          >
            <Link
              to={"/Skill"}
              style={{
                color: "gray",
                textDecoration: "none",
                fontFamily: "Lora, serif",
              }}
            >
              Skill
            </Link>
          </Button>

          <Button
            id="ovalButton"
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              display: "block",
              fontSize: "large",
              textTransform: "capitalize",
              fontFamily: "Lora, serif",
              color: "gray",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "gray",
                "& a": {
                  color: "white",
                },
              },
            }}
          >
            <a
              href={ANISHA}
              download="ANISHA.pdf"
              id="resume"
              style={{
                color: "gray",
                textDecoration: "none",
                fontFamily: "Lora, serif",
              }}
            >
              Resume
            </a>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;