import React, {
  FunctionComponent,
  HTMLAttributes,
  useMemo,
  useState
} from "react"
import ImageWrapper from "./ImageWrapper"
import ImageGalleryWrapper from "./Wrapper"
import CurrentImage from "./CurrentImage"
import ImageGalleryList from "./List"

const DEFAULT_HEIGHT = 40
const MIN_IMAGE_HEIGHT = 12

interface IImage {
  src: string
  index: number
}

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  images: string[]
  containerHeight?: number
  containerWidth?: number
}

const ImageGallery: FunctionComponent<IProps> = (props) => {
  const {images, containerHeight, ...rest} = props

  const [active, setActive] = useState<number>(0)
  const [moreRight, setMoreRight] = useState<number>(0)
  const [moreLeft, setMoreLeft] = useState<number>(0)

  const imagesData = useMemo<IImage[]>(() => {
    return images.map((image, index) => ({index, src: image}))
  }, [images])

  const visibleImagesCount = useMemo<number>(() => {
    const count = Math.floor(
      (props.containerHeight || DEFAULT_HEIGHT) / MIN_IMAGE_HEIGHT
    )

    return count > 1 ? count : 2
  }, [props.containerHeight])

  const visibleImages = useMemo<IImage[]>(() => {
    let sliceFrom = 0

    if (active > imagesData.length - Math.ceil(visibleImagesCount / 2)) {
      sliceFrom = imagesData.length - visibleImagesCount
    } else if (active > 1) {
      sliceFrom = active - Math.floor(visibleImagesCount / 2)
    }

    if (sliceFrom < 0) {
      sliceFrom = 0
    }

    setMoreRight(imagesData.length - sliceFrom - visibleImagesCount)
    setMoreLeft(sliceFrom)

    return imagesData.slice(sliceFrom, sliceFrom + visibleImagesCount)
  }, [imagesData, visibleImagesCount, active])

  const activeImage = useMemo<IImage | undefined>(() => {
    return imagesData.find((image) => image.index === active)
  }, [imagesData, active])

  const selectImage = (image: IImage) => {
    setActive(image.index)
  }

  const onClickPrev = () => {
    if (active > 0) {
      setActive(active - 1)
    } else {
      setActive(imagesData.length - 1)
    }
  }

  const onClickNext = () => {
    if (active < imagesData.length - 1) {
      setActive(active + 1)
    } else {
      setActive(0)
    }
  }

  return (
    <ImageGalleryWrapper {...rest}>
      <CurrentImage
        src={activeImage?.src}
        containerHeight={containerHeight || DEFAULT_HEIGHT}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <ImageGalleryList moreRight={moreRight} moreLeft={moreLeft}>
        {visibleImages.map((image) => (
          <ImageWrapper
            key={image.index}
            isActive={active === image.index}
            onClick={() => selectImage(image)}>
            <img src={image.src} alt="" />
          </ImageWrapper>
        ))}
      </ImageGalleryList>
    </ImageGalleryWrapper>
  )
}

ImageGallery.defaultProps = {
  containerHeight: DEFAULT_HEIGHT
}

export default ImageGallery
