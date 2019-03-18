import React, { Component } from "react";

class Parallax extends Component {
  constructor() {
    super();
    this.state = {
      currentScreenHeight:  window.innerHeight,
      currentScreenWidth:   window.innerWidth,
      currentDisplayImage:  "L-1366",
      availableImgWidths:   [768, 1024, 1366, 1600],
      availableImgHeights:  [960, 1136]
    }
    this.handleScreenDimensionsChange = this.handleScreenDimensionsChange.bind(this)
    this.selectCurrentDisplayImage    = this.selectCurrentDisplayImage.bind(this)
    this.findCurrentImageDimension    = this.findCurrentImageDimension.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleScreenDimensionsChange);
    this.setState({
          currentDisplayImage: this.selectCurrentDisplayImage()
        })
  }

  handleScreenDimensionsChange() {
    let currentDisplayImage = this.selectCurrentDisplayImage()
    this.setState({
          currentScreenHeight: window.innerHeight,
          currentScreenWidth:  window.innerWidth,
          currentDisplayImage: currentDisplayImage
        })
  }

  selectCurrentDisplayImage() {
    // images are named background-L-1024.png
    let target = window.innerHeight < window.innerWidth ? window.innerWidth : window.innerHeight
    let screenOrientation = window.innerHeight < window.innerWidth ? "L" : "P"
    let availableImageDimensions = window.innerHeight < window.innerWidth ? this.state.availableImgWidths : this.state.availableImgHeights
    let imageWidth = this.findCurrentImageDimension(availableImageDimensions, target)
    return `${ screenOrientation }-${ imageWidth }`

  }

  findCurrentImageDimension(screenDimensions, target) {
    var i = screenDimensions.length;
    while (screenDimensions[--i] > target);
      return screenDimensions[++i];
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenDimensionsChange);
  }

  render() {
    return(
      <section
        className="parallax"
        style={{ backgroundImage: `url(${require(`../images/background-${this.state.currentDisplayImage}.png`)})` }}>
        <h1>Parallax content here</h1>
      </section>
    )
  }
}

export default Parallax
