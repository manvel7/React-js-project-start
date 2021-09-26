import styled from "styled-components"

const TooltipArrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;

  :before {
    border-style: solid;
    content: "";
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  :after {
    border-style: solid;
    content: "";
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }

  &[data-placement*="bottom"] {
    left: 0;
    margin-top: -0.6rem;
    top: 0;
  }

  &[data-placement*="bottom"]:before {
    border-color: transparent transparent ${({theme}) => theme.palette.border}
      transparent;
    border-width: 0 0.6rem 0.6rem 0.6rem;
    position: absolute;
    top: -0.1rem;
  }

  &[data-placement*="bottom"]:after {
    border-color: transparent transparent
      ${({theme}) => theme.palette.background.white} transparent;
    border-width: 0 0.6rem 0.6rem 0.6rem;
  }

  &[data-placement*="top"] {
    bottom: 0;
    left: 0;
    margin-bottom: -0.9rem;
  }

  &[data-placement*="top"]:before {
    border-color: ${({theme}) => theme.palette.border} transparent transparent
      transparent;
    border-width: 0.6rem 0.6rem 0 0.6rem;
    position: absolute;
    top: 0.1rem;
  }

  &[data-placement*="top"]:after {
    border-color: ${({theme}) => theme.palette.background.white} transparent
      transparent transparent;
    border-width: 0.6rem 0.6rem 0 0.6rem;
  }

  &[data-placement*="right"] {
    left: 0;
    margin-left: -0.8rem;
  }

  &[data-placement*="right"]:before {
    border-color: transparent ${({theme}) => theme.palette.border} transparent
      transparent;
    border-width: 0.6rem 0.6rem 0.6rem 0;
  }

  &[data-placement*="right"]:after {
    border-color: transparent ${({theme}) => theme.palette.background.white}
      transparent transparent;
    border-width: 0.6rem 0.6rem 0.6rem 0;
    left: 0.4rem;
    top: 0;
  }

  &[data-placement*="left"] {
    margin-right: -0.8rem;
    right: 0;
  }

  &[data-placement*="left"]:before {
    border-color: transparent transparent transparent
      ${({theme}) => theme.palette.border};
    border-width: 0.6rem 0 0.6rem 0.6rem;
  }

  &[data-placement*="left"]:after {
    border-color: transparent transparent transparent
      ${({theme}) => theme.palette.background.white};
    border-width: 0.6rem 0 0.6rem 0.6rem;
    left: 0.1rem;
    top: 0;
  }
`

export default TooltipArrow
