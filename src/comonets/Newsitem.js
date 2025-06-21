import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, image, NewsUrl } = this.props;
    return (

      <div className='my-3'>
        <div className="card" >
          <img src={!image ? "https://cdn.ndtv.com/common/images/ogndtv.png" : image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {!description ? "MOBILES & TABLETS News: Oppo announces AI availability on smartphones 4, partnering with tech giants for AI features like image process" : description}
            </p>
            <a href={NewsUrl}   className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>

    )
  }
}

export default Newsitem
