/* React & Gatsby stuff */
import React, { ReactNode, createContext, useState, useEffect } from "react";
import { navigate } from "gatsby";

/* Modules */
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cookies from "js-cookie";

/* Styles */
import "../../syles/general.css";
import "../../syles/colors.css";
import "../../syles/shadows.css";
import "../../syles/transitions.css";

/* Styled components */
const GlobalLayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;

  & main {
    height: 100%;
    width: 100%;
    display: grid;

    &> div {
      
    }
  }
`;

/* Contexts */
const NotificationContext = createContext<{
  setNotification?: Function
}>({});

/* Init vars */
const queryClient = new QueryClient();

const GlobalLayout = ({ children }:
  { children: ReactNode }
) => {
  const [notification, setNotification] = useState<JSX.Element>();

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken') && !Cookies.get('accessToken')) {
      navigate('/');
    } else {
      navigate('/products');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationContext.Provider value={{ setNotification }}>
        <GlobalLayoutContainer>
          {notification}
          <main>{children}</main>
        </GlobalLayoutContainer>
      </NotificationContext.Provider>
    </QueryClientProvider>
  )
};

export default GlobalLayout;
export { NotificationContext };
