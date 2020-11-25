import React from 'react';
import Project from './Project'


//For loop for projects, and 

class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: [
              {
                title: "UBC Grade Data Query System",
                desc: "A website where students can track course data.",
                hasGithub: false, 
                hasWebsite: true,
                website: 'https://limitless-harbor-21538.herokuapp.com/',
                images : this.importAll(require.context('../../assets/images/ubcquery/', false, /\.(PNG|jpe?g|svg)$/))
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