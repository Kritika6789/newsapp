import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'
// import Navbar from './Navbar';
// import Navbar from './Navbar';

export class News extends Component {
       
        
        capitalizeletter=(string)=>{
          return string.charAt(0).toUpperCase()+string.slice(1);
         }
        constructor(props){
            super(props)
            this.state={
                articles:[],
                loading:false,
                page:1,
               count:0
            }
            document.title=this.capitalizeletter(this.props.category)
        }
        async updateNews(){
          this.props.setProgress(10);
          const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true})
          
             let data=await fetch(url);
             this.props.setProgress(30);
             let parsedata=await data.json();
             this.props.setProgress(70);
             console.log(parsedata);
          this.setState({loading:false})
         
             this.setState({articles:parsedata.articles , totalResult:parsedata.totalResults,loading:false});
             this.props.setProgress(100);
            }
       async componentDidMount(){
        // console.log("cdm");
        //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f3c75d1871043e987a1891cc9c01f2d&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})

        //    let data=await fetch(url);
        //    let parsedata=await data.json();
        //    console.log(parsedata);
        // this.setState({loading:false})
       
        //    this.setState({articles:parsedata.articles , totalResult:parsedata.totalResults,loading:false});
           this.setState({page:1});
           this.updateNews();
       }
      
       handlePrevious=async()=>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5f3c75d1871043e987a1891cc9c01f2d&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsedata=await data.json();
        // console.log(parsedata);
        // this.setState({loading:false})

        //          this.setState({
        //           page:this.state.page-1,
        //           articles:parsedata.articles
        //          }) 
        this.setState({page: this.state.page-1})
        this.updateNews();
       }
       handleclick=async()=>{
        
       this.setState({page:this.state.page+1});
       this.updateNews();
       }
       fetchMoreData =async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
      
         this.setState({page:this.state.page + 1 })
         const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //  this.setState({loading:true})
            let data=await fetch(url);
            let parsedata=await data.json();
            console.log(parsedata);
        //  this.setState({loading:false})
        
            this.setState({articles:this.state.articles.concat(parsedata.articles) , totalResult:parsedata.totalResults});
        }
      
    

  render() {
        
        console.log("hello");
    return (
  
    <>

        <h1 style={{textAlign:"center", marginTop:"20px"}}>NewsMonkey- Top  {this.capitalizeletter(this.props.category)} Headlines</h1>
          {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length?this.state.articles.length:""}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>} 
        >

     
        <div className="container">
        <div className="row my-3">
           
        {  this.state.articles.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
        
          <NewItem title={element.title?element.title:""} description={element.description?element.description.slice(0,88)+"...":""} imageUrl={element.urlToImage} newUrl={element.url} author={element.author? element.author: "Unknown"} date={element.publishedAt} paper={element.source.name} />
         
          </div>
         
    })
  }

     
        </div>
        </div>
      </InfiniteScroll>
    {/* {!this.state.loading&&<div className="container d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} class="btn btn-dark"> &larr; Previous </button>
       <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)} class="btn btn-dark" onClick={this.handleclick}>Next &rarr;</button>
       </div>} */}
       </> 
    )
  }
}
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
  totalResult:0

}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News

