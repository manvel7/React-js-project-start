import styled from "styled-components"

const DropdownMenuItem = styled.a`
  background-color: ${({theme}) => theme.palette.background.light};
  border: 0.1rem solid ${({theme}) => theme.palette.border};
  border-radius: 0.4rem;
  cursor: pointer;
  display: block;
  padding: 0.8rem 1.6rem;
  transition: background-color 0.15s ease-in;
  width: 100%;

  &:hover {
    background-color: ${({theme}) => theme.palette.background.tinted};
  }
`

export default DropdownMenuItem
