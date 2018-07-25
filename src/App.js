import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
var classNames = require('classnames');



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [{ "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/round-Diamond.png?v=3", "Title": "ROUND", "SubTitle": "Maximizes light return from the top of the stone" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/cushion-Diamond.png?v=3", "Title": "CUSHION", "SubTitle": "Antique cut with 58 facets and rounded corners" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/marquise-Diamond.png?v=3", "Title": "MARQUISE", "SubTitle": "Long, narrow surface makes it appear larger than life" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/heart-Diamond.png?v=3", "Title": "HEART", "SubTitle": "Features a distinctive cleft at the top and superior brilliance" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/pear-Diamond.png?v=3", "Title": "PEAR", "SubTitle": "Tradition meets brilliance in unique ‘water drop’ shape" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/radiant-Diamond.png?v=3", "Title": "RADIANT", "SubTitle": "Brilliance combined with non-traditional cropped corners" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/oval-Diamond.png?v=3", "Title": "OVAL", "SubTitle": "Elongated shape accentuates the length of the finger" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/asscher-Diamond.png?v=3", "Title": "ASSCHER", "SubTitle": "Vintage-style square shape with cropped corners" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/emerald-Diamond.png?v=3", "Title": "EMERALD", "SubTitle": "Long lines create an elegant and sophisticated look" },
      { "link": "https://ion.r2net.com/images/amazingHomepage/diamonds/princess-Diamond.png?v=3", "Title": "PRINCESS", "SubTitle": "Maximum brilliance in an exquisite square form" }]
      , centerItem: 5

    }
  }

  slideToRight = () => {
    let rotateObj = this.state.data;
    rotateObj.unshift(rotateObj.pop());
    this.setState({ data: rotateObj })
  }

  slideToLeft = () => {
    let rotateObj = this.state.data;
    rotateObj.push(rotateObj.shift())
    this.setState({ data: rotateObj })
  }

  renderItems = (item, index) => {
    var btnGroupClasses = classNames(
      'text-container',
      {
        'show': index === this.state.centerItem,
        'hidden': index != this.state.centerItem
      }
    );

    var effectGroup = classNames(
      'img',
      {
        'grow': index === this.state.centerItem,
        'min' : index != this.state.centerItem
      }
    );

    return (
      <div className="item">
        <img src={item.link} className={effectGroup} />
        <div className={btnGroupClasses}>
          <div className="title">{item.Title}</div>
          <div className="sub-title">{item.SubTitle}</div>
        </div>
      </div>
    )
  }


  render() {
    const items = this.state.data;
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="first-title">EXPERIENCE THE</div>
            <div className="second-title">DIAMOND REVOLUTION</div>
            <div className="text">Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's biggest collections of loose diamonds, at your fingertips.</div>
          </div>
          <div className="content">
            {items.map(this.renderItems)}
          </div>
          <div className="footer">
            <div className="right" onClick={this.slideToLeft}> 
            </div>
            <div className="left" onClick={this.slideToRight}>  </div>
          </div>
        </div >
      </div >
    );
  }
}

export default App; 