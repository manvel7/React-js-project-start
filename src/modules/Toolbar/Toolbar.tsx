import styled from "styled-components"

const Toolbar = styled.div`
  align-items: center;
  border-bottom: 0.1rem solid ${({theme}) => theme.palette.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* TODO: check this to match Navbar height */
  padding: 1.55rem;

  & > div > div {
    margin-right: 1.6rem;
  }

  .return-button {
    margin-right: 1.6rem;

    @media (min-width: ${({theme}) => theme.grid.breakpoints.sm}) {
      visibility: hidden;
    }
  }
`

export default Toolbar
