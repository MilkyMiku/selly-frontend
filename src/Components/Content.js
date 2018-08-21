import React, { Component } from "react";
import Products from "../products.json";
import "./Content.css";

class Content extends Component {
  render() {
    console.log(Products);
    return (
      <div>
        {Products.map((p, i) => {
          return (
            <ProductContainer
              key={p.title + " " + i}
              image={p.image}
              title={p.title + " " + i}
              verified={p.verified}
              priceVerified={p.priceVerified}
              sellyVerified={p.sellyVerified}
              unverified={p.unverified}
              priceUnverified={p.priceUnverified}
              sellyUnverified={p.sellyUnverified}
            />
          );
        })}
      </div>
    );
  }
}
class ProductContainer extends Component {
  render() {
    return (
      <div className="ProductContainer">
        <div className="ProductImage">
          <img alt="ProductImage" src={this.props.image} />
        </div>
        <div className="ProductName">{this.props.title}</div>
        <div className="ProductPurchaseContainer">
          {this.props.verified && (
            <div
              data-selly-product={this.props.sellyVerified}
              className="ProductPurcahseVerified"
            >
              <span className="ProductPurchaseText">
                {"Purchase [$" + this.props.priceVerified + "]"}
              </span>
              <br />
              <span className="ProductPurchaseType">Verified</span>
            </div>
          )}

          {this.props.unverified && (
            <div
              data-selly-product={this.props.sellyUnverified}
              className="ProductPurcahseUnverified"
            >
              <span className="ProductPurchaseText">
                {"Purchase [$" + this.props.priceUnverified + "]"}
              </span>
              <br />
              <span className="ProductPurchaseType">Unverified</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
