import React, { useState, useEffect, useContext } from 'react';
import ProductExpand from './productExpand';

/* Components */
import NotificationSender from '../notifications/sender';

/* Modules */
import styled from 'styled-components';
import { useMutation } from 'react-query';

/* Contexts */
import { NotificationContext } from '../layouts/global';

/* Endpoints & utils */
import { getAllItems } from '../../endpoints/products';

/* Styled components */
const ProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 0 1rem;
  padding-top: 5.2rem;
  
  & .items-container {
    border: 1px solid var(--black);
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 0rem;
    max-width: 27rem;
    overflow-y: hidden;
    border-radius: 5px;
    align-items: center;
  
    .items {
      width: 100%;
      overflow-y: overlay;
      overflow-x: hidden;
      border-radius: 0 0 5px 5px;
      box-shadow: var(--shadow-hover);
      height: fit-content;
      max-height: 65vh;
    }

    h2 {
      position: sticky;
      top: 0;
      border-radius: 5px 5px 0 0;
      width: 100%;
      color: var(--white);
      background-color: var(--black);
      box-shadow: var(--shadow-normal);
      padding: 1.08rem 1.28rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 780px){
    padding-top: 3rem; 
  }
`;

export default function products({ parentState }) {
  /* Hooks stuff */
  const { setNotification } = useContext(NotificationContext)
  const ProductsMutation: any = useMutation(() => getAllItems());
  const [state, setState] = useState({
    productsToShow: {}
  });

  /* Effects */
  useEffect(() => {
    ProductsMutation.mutate();
  }, []);

  const handleMutate = () => {
    ProductsMutation.mutate();
  };

  useEffect(() => {
    const notificationSender = new NotificationSender(setNotification);
    if (ProductsMutation.data) {
      const CATEGORIES = {};
      setState({ ...state, productsToShow: {} });

      /* Getting categories to filter */
      ProductsMutation.data.results.forEach(product => {
        CATEGORIES[product.category.name] = CATEGORIES[product.category.name]
          ? [...CATEGORIES[product.category.name], { ...product }]
          : [{ ...product }];
      });

      parentState.setState({ ...parentState.state, categories: Object.keys(CATEGORIES) });
      setState({ ...state, productsToShow: CATEGORIES });
    };
    ProductsMutation.isError && notificationSender.send({ ...ProductsMutation, message: 'Error al obtener productos' });
  }, [ProductsMutation]);

  return (
    <ProductsContainer>
      <div className='items-container' >
        <h2>La Casa De Toño - Items status</h2>
        <div className='items' >
          {Object.keys(state.productsToShow).map((categoryData, index) => {
            if (parentState.state.filterBy.length === 0) { /* Not category selected */
              return <ProductExpand
                parentCallback={handleMutate}
                name={categoryData}
                categoryData={state.productsToShow[categoryData]}
              />
            }
            else if (parentState.state.filterBy.length !== 0) { /* Fillter by categories */
              return parentState.state.filterBy[parentState.state.filterBy.indexOf(categoryData)]
                ? <ProductExpand
                  parentCallback={handleMutate}
                  name={categoryData}
                  categoryData={state.productsToShow[categoryData]}
                />
                : <></>
            }
          })}
        </div>
      </div>
    </ProductsContainer>
  )
}
