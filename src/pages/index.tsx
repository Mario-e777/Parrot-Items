/* React & Gatsby stuff */
import React from "react";
/* import PageTransition from 'gatsby-plugin-page-transitions'; */

/* Modules */
import styled from 'styled-components';

/* Components */
import GlobalLayout from "../components/layouts/global";
import Seo from "../components/seo";
import LoginForm from "../components/forms/login";
import GalleryContainer from "../components/gallery";

/* Styled components */
const LoginContainer = styled.div`
  color: var(--white);

  & .privacy-terms-container {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;

    a {
      color: var(--white);
      cursor: pointer;
      padding: 0 0.5rem;
      text-align: center;
      &:hover { text-decoration-line: underline; }
    }
  }
`;

const IndexPage = () => {
  return (

    <GlobalLayout>
        <Seo title="Login" />
        <LoginContainer>
          <LoginForm />
          <GalleryContainer />
          <p className="privacy-terms-container" >
            <a target='_blank' href="https://pos.parrotsoftware.io/aviso-privacidad/" >Aviso de privacidad</a> |
            <a target='_blank' href="https://pos.parrotsoftware.io/terminos-y-condiciones-de-uso-de-software-y-presentacion-de-servicios/" >Términos y condiciones</a>
          </p>
        </LoginContainer>
      </GlobalLayout>

  )
};

export default IndexPage;
