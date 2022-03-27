/* React & Gatsby stuff */
import React from "react";

/* Modules */
import styled from 'styled-components';

/* Components */
import Layout from "../components/layout";
import Seo from "../components/seo";
import LoginForm from "../components/forms/login";
import GalleryContainer from "../components/gallery";

/* Styled components */
const LoginContainer = styled.div`
  background-color: var(--orange);
  color: var(--white);
  height: 100%;
  display: grid;
  grid-template-columns: minmax(24rem, 0.8fr) 1fr;
  grid-template-rows: 1fr 0.1fr;
  row-gap: 1rem;

  & .privacy-terms-container {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;

    a {
      color: var(--white);
      cursor: pointer;
      text-decoration-line: none;
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
    <Layout>
      <Seo title="Home" />
      <LoginContainer>
        <LoginForm />
        <GalleryContainer />
        <p className="privacy-terms-container" >
          <a target='_blank' href="https://pos.parrotsoftware.io/aviso-privacidad/" >Aviso de privacidad</a> |
          <a target='_blank' href="https://pos.parrotsoftware.io/terminos-y-condiciones-de-uso-de-software-y-presentacion-de-servicios/" >Términos y condiciones</a>
        </p>
      </LoginContainer>
    </Layout>
  )
};

export default IndexPage;
