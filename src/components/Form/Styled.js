import styled from 'styled-components';

export const Styled = styled.form`

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  span {
    margin-bottom: 10px;
    font-weight: 600;
  }
  input {
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    height: 20px;
    &:focus {
      outline: 2px solid rgba(5, 85, 96, 0.918);
    }
  }
  button {
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    border: none;
    background: rgba(5, 85, 96, 0.918);
    border-radius: 5px;
    color: white;
    &:hover {
      background: rgba(5, 85, 96, 0.65);
    }
  }
`;

export default Styled;
