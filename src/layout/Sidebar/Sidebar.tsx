import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import { theme } from "@muc/styles";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "@muc/routes";
import { Box } from "@mui/material";
import { COLORS } from "@muc/constant";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export const Sidebar = (props: SidebarProps) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  type ListItemProps = {
    path: string;
    icon: string;
    active: string[];
    title: string;
  };

  const generateListItem = ({ path, icon, active }: ListItemProps) => (
    <ListItem
      key={path}
      disablePadding
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(path)}
    >
      <ListItemButton
        disableGutters
        disableTouchRipple
        disableRipple
        selected={active?.includes(pathname)}
        sx={{
          "&:hover .img": {
            filter:
              "invert(60%) sepia(92%) saturate(416%) hue-rotate(145deg) brightness(95%) contrast(100%)",
            opacity: 0.8,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 55,
            background: active?.includes(pathname)
              ? `linear-gradient(180deg, ${COLORS.gradiant.lightBlue} 0%, ${COLORS.gradiant.deepBlue} 100%)`
              : "transparent",
            "& .img": {
              filter: active?.includes(pathname)
                ? "invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(1000%)"
                : "none",
            },
            borderRadius: 3,
          }}
        >
          <Box
            component={"img"}
            className="img"
            src={icon}
            alt="icon"
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );

  return (
    <Drawer
      variant={isSmUp ? "permanent" : "temporary"}
      sx={{
        width: 120,
        height: "100%",
        "& .MuiDrawer-paper": {
          width: 120,
        },
      }}
      {...props}
    >
      <List
        sx={{
          height: "100%",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "inherit",
            padding: "16px 0 35px 0",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src="/assets/images/parkKing-logo-small.svg"
            alt="logo"
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {generateListItem({
            path: ROUTES.WEB_APP.MANAGE_ADMIN,
            icon: "/assets/icons/manage-admin-icon.svg",
            active: [ROUTES.WEB_APP.MANAGE_ADMIN, ROUTES.WEB_APP.ADD_ADMIN],
            title: "",
          })}
          {generateListItem({
            path: ROUTES.WEB_APP.DASHBOARD,
            icon: "/assets/icons/dashboard-icon.svg",
            active: [ROUTES.WEB_APP.DASHBOARD],
            title: "",
          })}
          {generateListItem({
            path: ROUTES.WEB_APP.APP_CONFIGURATIONS,
            icon: "/assets/icons/app-configurations-icon.svg",
            active: [ROUTES.WEB_APP.APP_CONFIGURATIONS],
            title: "",
          })}
          {generateListItem({
            path: ROUTES.WEB_APP.MANAGE_USERS,
            icon: "/assets/icons/manage-users-icon.svg",
            active: [ROUTES.WEB_APP.MANAGE_USERS],
            title: "",
          })}
          {generateListItem({
            path: ROUTES.WEB_APP.MANAGE_REPORTS,
            icon: "/assets/icons/manage-reports-icon.svg",
            active: [ROUTES.WEB_APP.MANAGE_REPORTS],
            title: "",
          })}
          {generateListItem({
            path: ROUTES.WEB_APP.MESSAGES,
            icon: "/assets/icons/messages-icon.svg",
            active: [ROUTES.WEB_APP.MESSAGES],
            title: "",
          })}
        </Box>

        {/* Sticky Bottom Logo */}
        <Box
          sx={{
            flexShrink: 0,
            position: "sticky",
            bottom: 0,
            zIndex: 1,
            backgroundColor: "inherit",
            padding: "16px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box component={"img"} src="/assets/icons/hf-logo.svg" alt="logo" />
        </Box>
      </List>
    </Drawer>
  );
};

export default Sidebar;
