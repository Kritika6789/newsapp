import React, { Component } from 'react'

export class NewItem extends Component {
    
    render() {
        let {title,description,imageUrl,newUrl}=this.props;
      return (
      <div>

        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/07/28/600x338/Q1_results_today_Q1_results_2023_stock_market_news_1690513858893_1690513859114.jpg"} alt="" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newUrl} rel='noreferrer' target= "_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewItem
