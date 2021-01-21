import React from 'react';
import Project from './Project'


//For loop for projects, and 

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: [
          {
            title: "Logistics System",
            desc: "Mobile App made for a local company to manage their logistics",
            hasGithub: false, 
            hasWebsite: false,
            images : this.importAll(require.context('../../assets/images/logisticssystem/', false, /\.(PNG|jpe?g|svg)$/))
        },
              {
                title: "UBC Grade Data Query System",
                desc: "A website where students can track course data.",
                hasGithub: false, 
                hasWebsite: true,
                website: 'https://limitless-harbor-21538.herokuapp.com/',
                images : this.importAll(require.context('../../assets/images/ubcquery/', false, /\.(PNG|jpe?g|svg)$/))
            },
            {
              title: "Find My Neighbourhood",
              desc: "A website where users can find the ideal neighbourhood to live in.",
              hasGithub: true, 
              github: 'https://github.com/ksapru/nwHacks2021',
              hasWebsite: true,
              website: 'https://findmyneighbourhood.herokuapp.com/',
              images : this.importAll(require.context('../../assets/images/findmyneighbourhood/', false, /\.(PNG|jpe?g|svg|png)$/))
          },
            {
                title: "Fruit Shop Website",
                desc: "A React website where users can buy fruits. Database stores user personal and order details",
                hasGithub: true, 
                github:'https://github.com/corbynkwan/Fruit-Shop',
                hasWebsite: true,
                website:'https://floating-dawn-11527.herokuapp.com/',
                images : this.importAll(require.context('../../assets/images/fruitwebsite/', false, /\.(PNG|jpe?g|svg)$/))
            },
            {
                title: "Calorie Tracker",
                desc: "A Java App where users can track their caloric and macronutrient intake along with viewing a foods's macronutrients",
                hasGithub: true, 
                github:'https://github.com/corbynkwan/Calorie-Tracker',
                hasWebsite: false,
                images : this.importAll(require.context('../../assets/images/calorietracker/', false, /\.(PNG|jpe?g|svg)$/))
            },
            {
                title: "Jaro",
                desc: "An e-commerce platform made for a charity organisation where users can support the handicapped by buying their products",
                hasGithub: false, 
                hasWebsite: true,
                website:'https://jaro.org.my/',
                images : this.importAll(require.context('../../assets/images/jaro/', false, /\.(PNG|jpe?g|svg)$/))
            }
        ]
      };
    }
    // imports all images from a directory.
    importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    render() {
      return (
        <div>
            {this.state.projects.map((project,index)=>{
                return <Project github = {project.github}website = {project.website}key={index} imagesOfProject ={project.images}title = {project.title} desc = {project.desc} hasGithub = {project.hasGithub}hasWebsite = {project.hasWebsite}></Project>
            })}
     
        </div>
      );
    }
  }

export default Projects;