/* React & Gatsby stuff */
import React from "react";
import PageTransition from 'gatsby-plugin-page-transitions';

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
  background-color: var(--orange);
  display: grid;
  grid-template-columns: minmax(24rem, 0.8fr) 1fr;
  grid-template-rows: 1fr 0.1fr;
  row-gap: 1.5rem;

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

  @media screen and (max-width: 980px) {
    align-self: center;
    height: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 2rem;
  }
`;

const IndexPage = () => {
  return (
    <PageTransition>
      <Seo title="Log in" />
      <GlobalLayout>
        <LoginContainer>
          <LoginForm />
          <GalleryContainer />
          <p className="privacy-terms-container" >
            <a target='_blank' href="https://pos.parrotsoftware.io/aviso-privacidad/" >Aviso de privacidad</a> |
            <a target='_blank' href="https://pos.parrotsoftware.io/terminos-y-condiciones-de-uso-de-software-y-presentacion-de-servicios/" >Términos y condiciones</a>
          </p>
        </LoginContainer>
      </GlobalLayout>
    </PageTransition>
  )
};

export default IndexPage;
