// import { getByDisplayValue } from '@testing-library/react';
import React  from 'react'

const NewItem=(props)=>{

   
        let {title,description,imageUrl,newUrl,author,date,paper}=props;
       
      return (
      <div>
      
        <div className="card" style={{width: "18rem"}}>
          <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0px'}}>
            <span class=" badge rounded-pill bg-danger">
  {paper}
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
  <img className="card-img-top" src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/07/28/600x338/Q1_results_today_Q1_results_2023_stock_market_news_1690513858893_1690513859114.jpg"} alt="" />
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <div class="card-text my-3">
      <small class="text-muted my-3">By {author} at {new Date(date).toGMTString()}</small>
    </div>

    <a href={newUrl} rel='noreferrer' target= "_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
 
}

export default NewItem
