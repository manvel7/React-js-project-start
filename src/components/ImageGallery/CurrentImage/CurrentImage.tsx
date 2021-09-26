import React, {FunctionComponent, HTMLAttributes} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight} from "@fortawesome/pro-regular-svg-icons"
import Wrapper from "./Wrapper"
import ImageWrapper from "../ImageWrapper"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  containerHeight: number
  onClickPrev: () => void
  onClickNext: () => void
}

const CurrentImage: FunctionComponent<IProps> = (props) => {
  const {src, containerHeight, onClickPrev, onClickNext} = props

  return (
    <Wrapper containerHeight={containerHeight}>
      <ImageWrapper style={{height: "100%"}}>
        <img src={src} alt="" />
      </ImageWrapper>
      <div className="nav-buttons hidden-sm-down">
        <button onClick={onClickPrev}>
          <FontAwesomeIcon size="lg" icon={faArrowLeft} />
        </button>
        <button onClick={onClickNext}>
          <FontAwesomeIcon size="lg" icon={faArrowRight} />
        </button>
      </div>
    </Wrapper>
  )
}

export default CurrentImage
