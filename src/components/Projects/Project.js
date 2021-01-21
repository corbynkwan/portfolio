import React from 'react';
import styled from "styled-components";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import Button from "react-bootstrap/Button";

//For loop for projects, and 
const GalleryContainer = styled.div`
.image-gallery {
   // your styles
 }
.image-gallery-slide {

}
.container {
  max-width: 500px;
}
.desc { 
  letter-spacing: 0px;
  font-weight: normal;
}
`
class Project extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
      let images = [];
      for(let image of Object.keys(this.props.imagesOfProject)) { 
        images.push({original: this.props.imagesOfProject[image], thumbnail: this.props.imagesOfProject[image], 
          media : '(max-width: 100px)', }); 
      }
      let websiteButton = null;
      if(this.props.hasWebsite == true) {  
        websiteButton = 
        <a href={this.props.website}>
          <Button className="m-2" variant="outline-primary">
          <i className="fas fa-globe mr-1"></i> 
            Website
          </Button>
        </a>
      }
      let githubButton = null;
      if(this.props.hasGithub == true) {  
        githubButton = 
        <a href={this.props.github}>
                          <Button className="m-2" variant="outline-dark">
                          <i className="fab fa-github-square mr-1"></i> 
                            GitHub
                          </Button>
        </a>
      }
      return (
        <div className="text-center">
                      <GalleryContainer>

                        <div className="project-container">

            <h1>{this.props.title}</h1>
            <h2 className="desc">{this.props.desc}</h2>
            {websiteButton}
            {githubButton}
              <div className="container">
            <ImageGallery  items={images} />
            </div>
            </div>
            </GalleryContainer>


        </div>
      );
    }
  }

export default Project;