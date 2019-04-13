import React, { Component } from 'react';
import FaqItem from './FaqItem.jsx';

class Faq extends Component {

  // state = {
  //   faq: []
  // }

  // handleClick = (obj) => {
  //   const updatedFaq = [...this.state.faq, obj]
  //   this.setState({
  //     faq: updatedFaq
  //   })
  // }

  // handleHideClick = (obj) => {
  //   const hideFaq = this.state.faq
  // }

  // <FaqItem faq={this.state.faq} handleClick={this.handleClick} />
  render() {
    return(
      <div>
        <h3>
          FAQ 1
        </h3>

        <h3>
          FAQ 2
        </h3>

        <h3>
          FAQ 3
        </h3>

      </div>
    )
  }
}

export default Faq
