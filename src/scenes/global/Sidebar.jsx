import user from "../../assets/user.png";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link
      className={selected === title ? "Link active" : "Link"}
      style={{ textDecoration: "none", color: colors.grey[100] }}
      to={to}
    >
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => {
          setSelected(title);
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

function Sidbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollap, setIsCollap] = useState(true);
  const [selected, setselected] = useState("Dashboard");

  return (
    <Box
      sx={{
        position: "relative",
        "& .sidebar  ": {
          backgroundColor: `${colors.primary[400]} !imoprtant`,
        },
        "&  .menu-icon": {
          backgroundColor: ` transparent !imoprtant`,
        },
        "& .menu-item": {
          padding: ` 5px 35px 5px !imoprtant`,
        },
        "& .menu-item:hover": {
          color: " #868dfb !imoprtant",
        },
        "& .menu-item.active": {
          color: " #6870fa !imoprtant",
        },
      }}
    >
      <Sidebar
        collapsed={isCollap}
        style={{
          border: "none",
        }}
        backgroundColor={colors.primary[400]}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: "",
                  color: disabled ? "#eee" : "#455A64",
                  color: active
                    ? `${colors.blueAccent[500]}` + "!important"
                    : undefined,
                  backgroundColor: active ? `` : undefined,
                  marginLeft: active ? "5px !important " : undefined,
                  "&:hover": {
                    backgroundColor: `${colors.primary[400]}` + "!important",
                    color: `${colors.blueAccent[500]}` + "!important",
                    borderRadius: "8px !important",
                    fontWeight: "bold !important",
                    marginLeft: "5px",
                  },
                };
              }
            },
          }}
        >
          {/* LOGE and menu icon */}
          <MenuItem
            onClick={() => {
              setIsCollap(!isCollap);
            }}
            icon={
              isCollap ? (
                <>
                  <MenuOutlinedIcon />
                </>
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0 ",
              color: colors.grey[100],
            }}
          >
            {!isCollap && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollap(!isCollap)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {!isCollap && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={user}
                  alt="profile"
                  width={"100px"}
                  height={"100px"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign={"center"}>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  User
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  VPFancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* menu items */}
          <Box paddingLeft={isCollap ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Calendar"
              to="/calender"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setselected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default Sidbar;
