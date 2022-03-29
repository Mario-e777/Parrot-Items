/* React & Gatsby stuff */
import React, {
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
  useState
} from 'react';

/* Modules */
import styled, { css } from 'styled-components';

/* Assets */
import EyeOff from '../../assets/svgs/eyeOff.svg';
import Eye from '../../assets/svgs/eye.svg';

/* Styled components */
const InputContainer = styled.label<{ outline: boolean }>`
  position: relative;

  input {
    font-size: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 5px;
    border: none;
    box-shadow: var(--shadow-normal);  
  }
  p {
    font-size: 1.02rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--white);
    span { cursor: pointer; }
  }
  button {
    padding: 0;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 1rem;
    bottom: 0.8rem;
    cursor: pointer;

    img {
      width: 1.4rem;
      height: auto;
    }
  }

  ${props => props.outline && css`
    input { border: 1px solid var(--black); }
    p { margin-bottom: unset; }
  `}
`;

export default (forwardRef((
  props: InputHTMLAttributes<any>
    & { outline?: boolean, labeltext?: string, labelclassname?: string },
  ref: ForwardedRef<any>
) => {
  const [revealPass, setRevealPass] = useState(false);
  const { labeltext, labelclassname, outline } = props;

  return (
    <InputContainer outline={outline && outline} className={labelclassname} >
      <p><span>{labeltext}</span></p>
      <input
        {...props}
        type={revealPass ? 'text' : props.type}
        ref={ref}
      />

      {/* Reveal password button */}
      {props.type === 'password' &&
        <button
          onClick={() => setRevealPass(!revealPass)}
          className='reveal-password'
          type='button'
        >
          {revealPass
            ? <img src={Eye} alt='hidde password' />
            : <img src={EyeOff} alt='see password' />}
        </button>}
    </InputContainer>
  )
}));
