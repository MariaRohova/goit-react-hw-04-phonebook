import styled from 'styled-components';


export const FilterStyle = styled.label`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
`;