import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import { theme } from "@muc/styles";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "@muc/routes";
import { Box } from "@mui/material";

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

  const generateListItem = ({ path, icon, active }: ListItemProps) => {
    return (
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
          <Box component={"img"} className="img" src={icon} alt="icon" />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Drawer
      variant={isSmUp ? "permanent" : "temporary"}
      sx={{ height: "100%" }}
      {...props}
    >
      <List
        className="MuiList-sideBar-menu"
        sx={{
          width: 72,
          height: "100%",
          borderRadius: 4,
          backgroundImage: `url('/assets/images/Navigation-image.svg')`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box flexGrow={1} mt={2}>
          <Box
            component={"img"}
            height={42}
            width={50}
            mx={"auto"}
            src="/assets/images/HMM-logo.svg"
            alt="logo"
          />
        </Box>
        {generateListItem({
          path: ROUTES.WEB_APP.PATIENT,
          icon:
            pathname === ROUTES.WEB_APP.PATIENT ||
            pathname === ROUTES.WEB_APP.PROFILE_SUPPORT_CIRCLE ||
            pathname === ROUTES.WEB_APP.ANALYTICS ||
            pathname === ROUTES.WEB_APP.NOTES
              ? "/assets/icons/User-icon-b.svg"
              : "/assets/icons/User-icon-w.svg",
          active: [
            ROUTES.WEB_APP.PATIENT,
            ROUTES.WEB_APP.PROFILE_SUPPORT_CIRCLE,
            ROUTES.WEB_APP.ANALYTICS,
            ROUTES.WEB_APP.NOTES,
          ],
          title: "",
        })}
        {generateListItem({
          path: ROUTES.WEB_APP.NOTIFICATIONS,
          icon:
            pathname === ROUTES.WEB_APP.NOTIFICATIONS
              ? "/assets/icons/Report-icon-b.svg"
              : "/assets/icons/Report-icon-w.svg",
          active: [ROUTES.WEB_APP.NOTIFICATIONS],
          title: "",
        })}
        {generateListItem({
          path: ROUTES.WEB_APP.SETTINGS,
          icon:
            pathname === ROUTES.WEB_APP.SETTINGS
              ? "/assets/icons/Settings-icon-b.svg"
              : "/assets/icons/Settings-icon-w.svg",
          active: [ROUTES.WEB_APP.SETTINGS],
          title: "",
        })}

        <div style={{ flex: 1, paddingTop: "4em" }} />
      </List>
    </Drawer>
  );
};

export default Sidebar;
