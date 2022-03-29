import React, { useState, useEffect, useContext } from 'react';
import ItemExpand from './itemExpand';

/* Components */
import NotificationSender from '../notifications/sender';

/* Modules */
import styled from 'styled-components';
import { useMutation } from 'react-query';

/* Contexts */
import { NotificationContext } from '../layouts/global';

/* Endpoints & utils */
import { getAllItems } from '../../endpoints/items';

/* Styled components */
const ItemsContainer = styled.div`
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
    productsToShow: {},
    reload: false
  });

  /* Effects */
  useEffect(() => {
    ProductsMutation.mutate();
  }, [state.reload]);

  useEffect(() => {
    const notificationSender = new NotificationSender(setNotification);
    if (ProductsMutation.data) {
      const CATEGORIES = {};
      ProductsMutation.data.results.forEach(product => {
        CATEGORIES[product.category.name] = CATEGORIES[product.category.name]
          ? [...CATEGORIES[product.category.name], { ...product }]
          : [{ ...product }];
      });
      parentState.setState({ ...parentState.state, categories: Object.keys(CATEGORIES) });
      setState({ ...state, productsToShow: CATEGORIES });
    };
    ProductsMutation.isError && notificationSender.send({ ...ProductsMutation, message: 'Error al obtener productos' });
  }, [ProductsMutation.data, ProductsMutation.isError]);

  return (
    <ItemsContainer>
      <div className='items-container' >
        <h2>La Casa De Toño - Items status</h2>
        <div className='items' >
          {Object.keys(state.productsToShow).map((categoryData, index) => {
            if (parentState.state.filterBy.length === 0)
              return <ItemExpand
                key={categoryData + index}
                parentState={{ state, setState }}
                name={categoryData}
                categoryData={state.productsToShow[categoryData]}
              />
            else if (parentState.state.filterBy.length !== 0) {
              return parentState.state.filterBy[parentState.state.filterBy.indexOf(categoryData)]
                ? <ItemExpand
                  key={categoryData + index}
                  parentState={{ state, setState }}
                  name={categoryData}
                  categoryData={state.productsToShow[categoryData]}
                />
                : <></>
            }
          })}
        </div>
      </div>
    </ItemsContainer>
  )
}
