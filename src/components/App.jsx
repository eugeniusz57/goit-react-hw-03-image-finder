import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./Button/Button";


export class App extends React.Component{

state ={
  searchName: '',
  page: 1,
  card: null
}





componentDidUpdate(prevProps, prevState){
 const URL = 'https://pixabay.com/api/';
 const KEY = '29990165-8c350ed327b5f0dec080b7ac6';
 const per_page = 12;
  if(prevState.searchName !== this.state.searchName || prevState.page !== this.state.page){
   fetch(`${URL}?q=${this.state.searchName}&page=${this.state.page}&per_page=${per_page}&key=${KEY}&image_type=photo&orientation=horizontal`).then(r => r.json()).then(card => this.setState({card: card.hits}))
  }
}

handleIncrementPage = () => {
  this.setState(prevState => { return {page: prevState.page + 1} } )

}

handleFormSubmit = searchName => {
this.setState({searchName})
}

  render(){
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {this.state.card && <ImageGallery images={this.state.card}/>}

        {this.state.card && <ButtonLoadMore onClick={this.handleIncrementPage}/>}
        <ToastContainer />
      </div>
    );
  }
};
