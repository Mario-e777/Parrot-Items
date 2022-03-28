/* React & Gatsby stuff */
import React from 'react';

/* Modules */
import styled from 'styled-components';

/* Styled components */
const GalleryContainer = styled.div`
  box-shadow: var(--shadow-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 0 0 0 9rem;
  overflow: hidden;
  flex-direction: column;
  color: var(--black);
  padding: 0 4rem;
  padding-bottom: 4rem;
`;

export default function Filters() {
  return (
    <GalleryContainer>Filters</GalleryContainer>
  )
}
