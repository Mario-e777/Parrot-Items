/* React & Gatsby stuff */
import React, { ReactNode, createContext, useState } from "react";

/* Modules */
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

/* Styles */
import "../syles/general.css";
import "../syles/colors.css";
import "../syles/shadows.css";
import "../syles/transitions.css";

/* Styled components */
const LayoutContainer = styled.div`
  background-color: var(--orange);
  height: 100vh;
  width: 100vw;

  & main {
    height: 100%;
    width: 100%;
    display: grid;
  }
`;

/* Contexts */
const NotificationContext = createContext<{
  handleNatification?: Function
}>({});

/* Init vars */
const queryClient = new QueryClient();

const Layout = ({ children }:
  { children: ReactNode }
) => {
  const [notification, setNotification] = useState<JSX.Element>();

  const handleNatification = (notification: JSX.Element) =>
    setNotification(() => notification);

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationContext.Provider value={{ handleNatification }}>
        <LayoutContainer>
          {notification}
          <main>{children}</main>
        </LayoutContainer>
      </NotificationContext.Provider>
    </QueryClientProvider>
  )
};

export default Layout;
export { NotificationContext };
