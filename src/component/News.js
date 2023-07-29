import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';

export class News extends Component {
   
        constructor(){
            super()
            this.state={
                articles:[],
                loading:false,
                page:1
            }
        }
       async componentDidMount(){
        console.log("cdm");
           let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5f3c75d1871043e987a1891cc9c01f2d&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})

           let data=await fetch(url);
           let parsedata=await data.json();
           console.log(parsedata);
        this.setState({loading:false})

           this.setState({articles:parsedata.articles , totalResult:parsedata.totalResults,loading:false});

       }
      
       handlePrevious=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5f3c75d1871043e987a1891cc9c01f2d&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedata=await data.json();
        console.log(parsedata);
        this.setState({loading:false})

                 this.setState({
                  page:this.state.page-1,
                  articles:parsedata.articles
                 }) 
       }
       handleclick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5f3c75d1871043e987a1891cc9c01f2d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
       
        let data=await fetch(url);
        let parsedata=await data.json();
        console.log(parsedata);
        this.setState({loading:false})

                 this.setState({
                  page:this.state.page+1,
                  articles:parsedata.articles
                 }) 
       }
  render() {
    
        console.log("hello")
    return (
    
      <div className='container my-3'>

        <h1>NewsMonkey- Top Headings</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        { !this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
          <NewItem title={element.title?element.title:""} description={element.description?element.description.slice(0,88)+"...":""} imageUrl={element.urlToImage} newUrl={element.url} />
          </div>
         
    })
  }
     
        </div>
    {!this.state.loading&&<div className="container d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} class="btn btn-dark"> &larr; Previous </button>
       <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)} class="btn btn-dark" onClick={this.handleclick}>Next &rarr;</button>
       </div>}
        </div>

    )
  }
}

export default News

