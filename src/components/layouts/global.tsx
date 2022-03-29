/* React & Gatsby stuff */
import React, { ReactNode, createContext, useState, useEffect } from "react";

/* Modules */
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cookies from "js-cookie";

/* Styles */
import "../../syles/general.css";
import "../../syles/colors.css";
import "../../syles/shadows.css";
import "../../syles/transitions.css";
import { navigate } from "gatsby";

/* Styled components */
const GlobalLayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;

  & main {
    height: 100%;
    width: 100%;
    display: grid;

    &> div {
      background-color: var(--orange);
      display: grid;
      grid-template-columns: minmax(24rem, 0.8fr) 1fr;
      grid-template-rows: 1fr 0.1fr;
      row-gap: 1.5rem;

      @media screen and (max-width: 980px) {
        align-self: center;
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-rows: min-content;
        padding: 2rem;
      }
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
    if (!Cookies.get('accessToken') && !sessionStorage.getItem('accessToken')) {
      navigate('/');
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
