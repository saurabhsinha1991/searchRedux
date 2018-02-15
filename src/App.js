import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './components/product';
import './App.css';
import { bindActionCreators } from 'redux';
import { productDetails } from './actions/trelloActions';

class App extends Component {

    constructor(props) {
        super(props);
    }

    getProductDetails = (e) => {

        return fetch(`http://jusflip.herokuapp.com/store/product/search/?q=${e.target.value}`).then((res) => {
            return res.json();
        }).then(productListing => {
            const searchString = this.getParameterByName(productListing.page_info.previous_page);
    
            (searchString === this.textInput.value) &&
                this.props.actions.productDetails(productListing.products);
        });
    }

    getParameterByName = (url) => {
        return url.split('q=')[1].split('&')[0];
    }

  render() {
    const { productList } = this.props;

    return (
      <div className="App">
        <div className='wrapper'>
            <div className='wrapper'>
                <div className='input-wrapper'>
                    <input type='text' ref={(input) => { this.textInput = input; }} onKeyUp={(e) => this.getProductDetails(e) } />
                    {productList.product.length > 0 &&
                        <ul>
                            {productList.product.map((item) => <Product details={item} /> )}
                        </ul>
                    }
                </div>
            </div> 
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        productList: state.productReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
            productDetails: bindActionCreators(productDetails, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
