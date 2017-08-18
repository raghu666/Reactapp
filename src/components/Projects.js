import React, { Component } from 'react';

class Projects extends Component{
  
    render(){
        
         
    const content1 = [
                       {
                         id: 1,
                         src: 'src/imgs/thesis_screen_1.png',
                         title: 'Usability study of Data Visualization in WebVR',
                         description: 'This was a Master’s thesis I completed in my graduate program. The research question was “ How can we effectively visualize multidimensional data in WebVR using smartphones? ” .',
                         link: 'http://raghu666.com/spring/project_folder/finals_v3.html'
                       },
                        {
                         id: 2,
                         src: 'src/imgs/awaken_1.png',
                         title: 'Awaken The Game',
                         description: 'This game was created by a team of six members. I worked as a developer and UI designer. The main objective of the game is to navigate the player vertically up a tower that is filling with water and barricaded by a series of floors',
                         link: 'http://raghu666.com/spring/Awaken_windows.zip'
                       },
                        {
                         id: 3,
                         src: 'src/imgs/supernerd_1.png',
                         title: 'SuperNerd',
                         description: 'This is a UI Mockup created for a m-commerce app called SuperNerd.',
                         link: 'http://raghu666.com/ui_prototype/Raghu_Shivaraman_Prototype.zip'
                       },
                        {
                         id: 4,
                         src: 'src/imgs/leapmusik_1.png',
                         title: 'LeapMusik',
                         description: 'This is a static UI design as well as a low fidelity prototype in Unity for a virtual piano.',
                         link: 'https://docs.google.com/presentation/d/1w_pwcKEJNbnnyN5vX6bbArKzJ0gp52_ooOi7v75Y2-M/edit?usp=sharing'
                       },
                        {
                         id: 5,
                         src: 'src/imgs/cms.jpg',
                         title: 'College Management System',
                         description: 'This is a final year B.E project I implemented with two members. It is an Intranet application that automates all the administrative activities starting from the admission of a student till graduation.',
                         link: 'http://raghu666.com/engineering/Black%20Book.pdf'
                       }
                    ];
    
     
    const project = content1.map((content1) =>
                    <div  key={content1.id}>         
                        <div className="card mb-3">
                            <img className="card-img-top img-fluid bgcolor" src={content1.src} alt="Card image cap" />
                            <div className="card-block">
                                <h4 className="card-title">{content1.title} {' '} <a href={content1.link} target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i></a> </h4>
                                    
                                <p className="card-text">{content1.description}</p>
                            </div>
                        </div>
                        <br />
                    </div>             
            );
        
        
        
      return(
          <div className="rcard-block">
                {project}
          </div>
      );  
    };
}

export default Projects;