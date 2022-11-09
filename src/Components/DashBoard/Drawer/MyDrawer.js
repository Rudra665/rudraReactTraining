import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyDrawer = (props) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
      onClose={props.onClose}
    >
      <DrawerHeader>
        <IconButton onClick={props.onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link
              style={{ color: "#404040", textDecoration: "none" }}
              to="/dashboard/inbox"
            >
              <ListItemText>Inbox</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/dashboard/Starred"
                style={{ color: "#404040", textDecoration: "none" }}
              >
                Starred
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/dashboard/send-mail"
                style={{ color: "#404040", textDecoration: "none" }}
              >
                Send Mail
              </Link>
            </ListItemText>
            {/* </ListItemButton> */}
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/dashboard/drafts"
                style={{ color: "#404040", textDecoration: "none" }}
              >
                Drafts
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link
              style={{ color: "#404040", textDecoration: "none" }}
              to="/dashboard/all-mail"
            >
              <ListItemText>All Mail</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link
              style={{ color: "#404040", textDecoration: "none" }}
              to="/dashboard/trash"
            >
              <ListItemText>Trash</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>

            <Link
              style={{ color: "#404040", textDecoration: "none" }}
              to="/dashboard/Spam"
            >
              <ListItemText>Spam</ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MyDrawer;
