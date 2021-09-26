import React from "react"
import {render} from "@testing-library/react"
import ImageGallery from "./ImageGallery"
import {UiProvider} from "../../styles"

const images = [
  "https://picsum.photos/id/11/1280/720",
  "https://picsum.photos/id/12/1024/768",
  "https://picsum.photos/id/13/1024/720"
]

describe("ImageGallery", () => {
  describe("Default", () => {
    it("should match snapshot", () => {
      const result = render(
        <UiProvider>
          <ImageGallery images={images} />
        </UiProvider>
      )
      expect(result.container.firstChild).toMatchSnapshot()
    })
  })
})
