import { ImageGalleryItem, ImageGalleryItemImage } from "./ImageGalleryItems.styled";

export const ImageGalleryItems = ({webformatURL, largeImageURL, onClick}) => <ImageGalleryItem >
<ImageGalleryItemImage src={webformatURL} alt={largeImageURL}  onClick={() => {
          onClick(largeImageURL);
        }}/>
</ImageGalleryItem> 