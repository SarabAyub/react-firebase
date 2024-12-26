import { ReactNode } from "react";
import parkingLogo from '/assets/images/parkKing-logo.svg';
import carImg from '/assets/images/car.svg';
import { AuthLayoutCar, AuthLayoutContainer, AuthLayoutLogo } from "./AuthLayout.styles";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthLayoutContainer>
        <AuthLayoutLogo>
            <img src={parkingLogo} alt="parking logo" />
        </AuthLayoutLogo>
        <AuthLayoutCar>            
            <img src={carImg} alt="car" width={700} height={500} />
        </AuthLayoutCar>
        {children}
    </AuthLayoutContainer>
);
};

export default AuthLayout;
