import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position: 'absolute',
            right: '0'     
        }
        }>
          
        <span className="badge rounded-pill bg-danger">
                {source}
              </span>
              </div>
          <img src={!imageurl? "https://images.hindustantimes.com/img/2021/09/14/1600x900/89ea59aa-156b-11ec-a13e-d4a68f9db710_1631631335258.png": imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on{" "}{new Date(date).toGMTString()}
              </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
