import React, { Component } from "react";

class Parallax extends Component {
  constructor() {
    super();
    this.state = {
      currentScreenHeight:  window.innerHeight,
      currentScreenWidth:   window.innerWidth,
      currentDisplayImage:  "W-1366.png"
    }
    this.handleScreenDimensionsChange = this.handleScreenDimensionsChange.bind(this)
    this.selectCurrentDisplayImage    = this.selectCurrentDisplayImage.bind(this)
    this.findCurrentDisplayDimension  = this.findCurrentDisplayDimension.bind(this)
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
    if(window.innerHeight < window.innerWidth) {
      console.log("Landscape")
      // this.setState({ displayImage: `imagename-H-${ widthMatch }` })
      return "W-1024.png"
      // add different images for different screen widths, use require?
      // 640,768,1024,1366,1600,1920,2560,3000 => match the slot where width belongs and select the higher number
      // add width into the file name, template string "imagname-W-1920" or "imagename-H-1080" W-width for landscape photos, H-height for portrait
    } else {
      console.log("Portrait")
      return "H-960.png"
      // heights:
      //
    }
  }

  findCurrentDisplayDimension(screenDimension) {
    let dimensionsArray = []
    // search through array
  }
  //
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenDimensionsChange);
  }

  render() {
    return(
      <section className="parallax">
        <img src = { require(`../images/background-${this.state.currentDisplayImage}`) }/>
        <h1>Parallax content here</h1>
      </section>
    )
  }
}

export default Parallax
