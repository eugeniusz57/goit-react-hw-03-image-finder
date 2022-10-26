import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";


export class App extends React.Component{

state ={
  searchName: '',
  page: 1,
  card: [],
  showModal: false,
  statue: 'Ible'
}

componentDidUpdate(prevProps, prevState){

  const { page, searchName,  } = this.state;
 const URL = 'https://pixabay.com/api/';
 const KEY = '29990165-8c350ed327b5f0dec080b7ac6';
 const per_page = 12;
  if(prevState.searchName !== searchName || prevState.page !== page){
    this.setState({status: 'pending'})
   setTimeout(() => {
    fetch(`${URL}?q=${searchName}&page=${page}&per_page=${per_page}&key=${KEY}&image_type=photo&orientation=horizontal`)
   .then(r => r.json())
   .then(card => this.setState(prevState => {return {card: [...prevState.card,
    ...card.hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })),
    
  ], status: "resolv"}})).catch(eror => eror)
   }, 3000);
  }
}

handleIncrementPage = () => {
  this.setState(prevState => { return {page: prevState.page + 1} } )

}

handleFormSubmit = searchName => {
this.setState({searchName, page: 1, card: []})
}


toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

imgWindowModal = imgUrl => {
  this.setState({ imgUrl }, () => {
    this.toggleModal();
  });
};

  render(){
    const { showModal, card, imgUrl, status } = this.state;
    return (

      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {(status === 'resolv' || status === 'pending' )&& <ImageGallery images={card} onClick={this.imgWindowModal}/>}

        {(card.length > 0 && status === 'resolv') && <ButtonLoadMore onClick={this.handleIncrementPage}/>}
      
        {status === 'pending' && <Loader/>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={imgUrl} alt="" />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
};
