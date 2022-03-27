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
import { LayoutContext } from '../layout';

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
`;

export default function Login() {
  /* Refs */
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const LogInMutation = useMutation(() => logIn(emailRef.current.value, passwordRef.current.value));
  const notificationSender = new NotificationSender('snack', useContext(LayoutContext));

  const handleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    LogInMutation.mutate();
  };

  useEffect(() => {
    (LogInMutation.isSuccess || LogInMutation.isError) && notificationSender.send(LogInMutation);
    console.log(LogInMutation);
  }, [LogInMutation.isSuccess, LogInMutation.isError]);

  return (
    <LoginContainer onSubmit={event => handleLogIn(event)}>
      <div className='brand-container' >
        <img src={Brand} ></img>
        <p>Log in - Frontend challenge</p>
      </div>
      <Input ref={emailRef} labeltext="Email" placeholder="Email" type="email" required />
      <Input ref={passwordRef} labeltext="Password" placeholder="Password" type="password" required />
      <Checkbox text='Remember me' />
      <Button type='submit' >
        {LogInMutation.isLoading
          ? <SpinnerCircularFixed
            size={'1.449rem'}
            color="var(--white)"
            secondaryColor="var(--black)"
          />
          : <p>Log in</p>}
      </Button>
    </LoginContainer>
  )
};
