import { ImageGalleryItem, ImageGalleryItemImage } from "./ImageGalleryItems.styled";

export const ImageGalleryItems = ({webformatURL, largeImageURL}) => <ImageGalleryItem >
<ImageGalleryItemImage src={webformatURL} alt={largeImageURL} />
</ImageGalleryItem> 