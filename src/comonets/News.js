import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './News.css';



export class News extends Component {
   

  constructor() {
    super();
    this.state = {
      articles: [],
       page:1
       }
  }
   async componentDidMount  () {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ec4bc6b00cdb4a7a893f4fc029e97b66" ;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles })
  }

  hendelnext = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ec4bc6b00cdb4a7a893f4fc029e97b66&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedata = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedata.articles
    })
  } 
  hendelprevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ec4bc6b00cdb4a7a893f4fc029e97b66&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedata = await data.json()
    this.setState({ 
      page: this.state.page - 1,
      articles: parsedata.articles
    })

  }

  render() {
    return (
      
      <div className='container my-5 '>
        <center> <h1>NewsMonkey top Headlinies</h1></center>
        <div className="row">
          {this.state.articles.map((element) =>
  
            <div className='col-md-4'>
              <Newsitem title={element.title} image={element.urlToImage} description={element.description} NewsUrl={element.url} ></Newsitem>
            </div>

          )}

        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.hendelprevious} >&larr;previous</button>
          <button type="button" class="btn btn-dark" onClick={this.hendelnext}>next	&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
