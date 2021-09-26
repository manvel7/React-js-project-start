import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  useState
} from "react"
import {Pagination} from "../../index"
import GhostWrapper from "./GhostWrapper"
import SliderItem from "./Item"
import PaginationWrapper from "./PaginationWrapper"
import SliderWrapper from "./Wrapper"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  slides: ReactElement[]
}

const Slider: FunctionComponent<IProps> = (props) => {
  const {slides} = props

  const [currentSlide, setCurrentSlide] = useState<number>(1)

  const computedSlides = React.Children.map(slides, (slide, index) => {
    return (
      <SliderItem isActive={index + 1 === currentSlide}>{slide}</SliderItem>
    )
  })

  return (
    <div>
      <SliderWrapper>
        {computedSlides}
        <GhostWrapper>{slides}</GhostWrapper>
      </SliderWrapper>

      <PaginationWrapper>
        <Pagination
          variant="circle"
          hidePageNumber={true}
          currentPage={currentSlide}
          pageCount={slides.length}
          onPageChange={setCurrentSlide}
        />
      </PaginationWrapper>
    </div>
  )
}

export default Slider
