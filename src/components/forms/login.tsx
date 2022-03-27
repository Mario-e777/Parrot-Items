/* React & Gatsby stuff */
import React, { useRef, FormEvent, useContext, useEffect } from 'react';

/* Modules */
import styled from 'styled-components';
import { SpinnerCircularFixed } from "spinners-react";
import { useMutation } from 'react-query';

/* Components */
import Button from '../elements/button';
import Input from '../elements/input';
import Checkbox from '../elements/checkbox';
import NotificationSender from '../notifications/sender';

/* Contexts */
import { NotificationContext } from '../layout';

/* Endpoints & utils */
import { logIn } from '../../endpoints/login';
import { saveTokens } from '../../utils/funcions';

/* Assets */
import Brand from '../../assets/svgs/brand.svg';

/* Styled components */
const LoginContainer = styled.form`
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 19rem;

  & .brand-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    img {
      max-width: 12.4rem;
      width: 100%;
    }
    p {
      text-align: center;
      font-weight: 500;
      font-size: 1.06rem;
    }
  }

  & .new-account-link {
    width: fit-content;
    margin-right: auto;
    font-size: 0.94rem;
    a { color: var(--white); }
  }
`;

export default function Login() {
  /* Hooks stuff */
  const { handleNatification } = useContext(NotificationContext)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const LogInMutation = useMutation(() => logIn(emailRef.current.value, passwordRef.current.value));

  /* Functions */
  const notificationSender = new NotificationSender('snack', handleNatification);

  const handleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    !LogInMutation.isLoading && LogInMutation.mutate();
  };

  /* Effects */
  useEffect(() => {
    (LogInMutation.isSuccess || LogInMutation.isError)
      && notificationSender.send(LogInMutation);
  }, [LogInMutation.isSuccess, LogInMutation.isError]);

  return (
    <LoginContainer onSubmit={event => handleLogIn(event)}>
      <div className='brand-container' >
        <img src={Brand} ></img>
        <p>Iniciar sesión - Sr. Frontend challenge</p>
      </div>
      <Input ref={emailRef} labeltext="Usuario" placeholder="john.doe@mail.com" type="email" required />
      <Input ref={passwordRef} labeltext="Contraseña" placeholder="••••••••••••" type="password" required />
      <Checkbox text='Recordarme' />
      <Button type='submit' >
        {LogInMutation.isLoading
          ? <SpinnerCircularFixed
            size={'1.449rem'}
            color="var(--white)"
            secondaryColor="var(--black)"
          />
          : <p>Iniciar sesión</p>}
      </Button>
      <p className='new-account-link' >¿Aún no tienes cuenta? <a target='_blank' href='https://pos.parrotsoftware.io/demo/' >Solicita una demo</a></p>
    </LoginContainer>
  )
};
