import { useAuthContext } from "@muc/context";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  skipUserCheckRoutes?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  skipUserCheckRoutes = ["/login", "/signup"],
}) => {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Skip user check for specified routes
  if (skipUserCheckRoutes.includes(location.pathname)) {
    return <>{children}</>;
  }

  // Redirect to the landing page if the user is not authenticated
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
