import { ImageGallerys } from "./ImageGallery.styled";
import {ImageGalleryItems  } from "../ImageGalleryItems/ImageGalleryItems";

// id, webformatURL ,largeImageURL 


export const ImageGallery = ({images, onClick}) => (
    <ImageGallerys >
       {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItems
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        );})}
</ImageGallerys>
) 
