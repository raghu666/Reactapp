import React, { Component } from 'react';

class Resume extends Component{

     render(){
      
         const posts =[
            { 
              id: 1,
              degree: 'Master of Science in Digital Media',
              content: 'Drexel University - Philadelphia, PA',
              marks: 'GPA: 3.61 / 4',
              year: 'September 2015 - June 2017'    
            },
            { 
              id: 2,
              degree: 'Bachelor of Engineering in Information Technology',
              content: 'University of Mumbai - India',
              marks: 'Percentage: 61.48 %',
              year: 'September 2008 - July 2012'  
            }
        ];
         
         
        const education = posts.map((post) =>
                <div key={post.id}  className="row">
                  <div className="col-md-8">
                    <h5 className="marks">{post.degree}</h5>
                    <p>{post.content}</p>
                    <p className="marks">{post.marks}</p>
                  </div>
                  <div className="col-md-4  text-md-right">                
                    <p className="years">{post.year}</p>
                  </div>                          
                </div>
        );
      
          const exp =[
            { 
              id: 1,
              position: 'User Interface Intern',
              company: 'CoreDial - Blue Bell, PA',
              content1: 'Assisted in creating User Interface Mockups for the portal website.',
              content2: 'Worked in an agile environment and attended SCRUM meetings.',    
              year: 'June 2016 - August 2016'    
            },
            { 
              id: 2,
              position: 'Assistant System Engineer',
              company: 'Tata Consultancy Services - Mumbai, India',
              content1: 'Primarily responsible for database administration on a client side project called "SBI FI KIOSK".',
              content2: 'Also performed application testing and deployment.',    
              year: 'December 2012 - May 2014'
            }
        ];
         
         const experience = exp.map((exps) =>
                <div key={exps.id} className="row">
                  <div className="col-md-8">
                    <h5 className="marks">{exps.position}</h5>
                    <p>{exps.company}</p>
                    <ul className="lists">
                        <li>{exps.content1}</li>
                        <li>{exps.content2}</li>            
                    </ul>                
                  </div>
                  <div className="col-md-4 text-md-right">                
                    <p className="years">{exps.year}</p>
                  </div>                          
                </div>
        );
         
         
          const pres =[
            { 
              id: 1,
              content1: 'Presented my Masters thesis "Usability Study of Data Visualization in WebVR" at the annual Digital Media Showcase - June 2017.',
              content2: 'Presented and won technical paper presentation on "System Virtual Machines" at SIES Graduate School of Technology - September 2010.',
              content3: 'Successfully completed a udemy course called "Modern React with Redux" on July 31, 2017.'
            }
        ];
         
         
         const caward = pres.map((pre) =>
                        <div key={pre.id}>
                                  <h3>Presentation / Award   {' '} <i className="fa fa-certificate ifonts" aria-hidden="true"></i> </h3>
                            <div className="row">
                                  <div className="col-md-12">
                                  <ul  className="lists">
                                    <li>{pre.content1}</li>
                                    <li>{pre.content2}</li>
                                  </ul>
                                  </div>
                             </div>
                                  <h3>Certification   {' '} <i className="fa fa-certificate ifonts" aria-hidden="true"></i> </h3>
                            <div className="row">
                                  <div className="col-md-12">
                                  <ul  className="lists">
                                    <li>{pre.content3}</li>
                                  </ul>
                                  </div>
                             </div>      
                        </div>          
                                  
        );
         
         
         const skills = [
             {
                    id: 1,
                    skill1: 'HTML5 / CSS3',
                    star1: "fa fa-star ifonts" ,
                    star2: "fa fa-star ifonts" ,
                    star3: "fa fa-star ifonts" ,
                    star4: "fa fa-star ifonts" ,
                    star5: "fa fa-star ifonts" 
             },
             {
                    id: 2,
                    skill1: 'PL / SQL',
                    star1: "fa fa-star ifonts" ,
                    star2: "fa fa-star ifonts" ,
                    star3: "fa fa-star ifonts" ,
                    star4: "fa fa-star ifonts" ,
                    star5: "fa fa-star-half-o ifonts" 
             }, 
             {  
                    id: 3,
                    skill1: 'Java / A-frame',
                    star1: "fa fa-star ifonts" ,
                    star2: "fa fa-star ifonts" ,
                    star3: "fa fa-star ifonts" ,
                    star4: "fa fa-star-half-o ifonts" ,
                    star5: "fa fa-star-o ifonts" 
             }, 
             {  
                    id: 4,
                    skill1: 'C# / D3.js / JavaScript (ES5 / ES6) / jQuery',
                    star1: "fa fa-star ifonts" ,
                    star2: "fa fa-star ifonts" ,
                    star3: "fa fa-star ifonts" ,
                    star4: "fa fa-star-o ifonts" ,
                    star5: "fa fa-star-o ifonts" 
             }, 
             {  
                    id: 5,
                    skill1: 'React / Redux',
                    star1: "fa fa-star ifonts" ,
                    star2: "fa fa-star ifonts" ,
                    star3: "fa fa-star ifonts" ,
                    star4: "fa fa-star-o ifonts" ,
                    star5: "fa fa-star-o ifonts" 
             }
         ];
         
         
         const sprogress = skills.map((skill) =>
                           <div key={skill.id}>
                            <div className="row">
                             <div className="col-md-6">
                                <h5 className="skillcol">{skill.skill1}</h5>
                               </div>
                             <div className="col-md-6">
                                  <h5  className="skillcol"><i className={skill.star1} aria-hidden="true"></i>
                                      <i className={skill.star2} aria-hidden="true"></i>
                                      <i className={skill.star3} aria-hidden="true"></i>
                                      <i className={skill.star4} aria-hidden="true"></i>
                                      <i className={skill.star5} aria-hidden="true"></i></h5>
                               </div>
                             </div>       
                           </div>                               
         );
         
         
         const tools = ['Brackets','Oracle 9g','Eclipse','Unity','Visual Studio','MS SQL Server'];
                        
         const tools1 = ['Illustrator','Photoshop','WebVR','webpack','babel','JSON / AJAX'];
                        
         const tools2 = ['WordPress','Bootstrap','Aftereffects','Balsamiq','Azure','Nuke'];
         
         const frames = <div className="row">
                            <div className="col-md-4">
                                <ul  className="lists">
                                  { tools.map((tools) => <li  key={tools}>{tools}</li>) }
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul  className="lists">
                                  { tools1.map((tools1) => <li  key={tools1}>{tools1}</li>) }
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul  className="lists">
                                  { tools2.map((tools2) => <li  key={tools2}>{tools2}</li>) }
                                </ul>
                            </div>
                        </div>
         
         const others = ['Research','User Interface Design','User Experience Methodology','Software Development LifeCycle','Usability Testing','Data Analysis and Interpretation'];
         
         const operate = ['Windows','Mac','Linux'];
         
         const langs = ['English','Hindi','Marathi','Tamil'];
         
         const interests = ['Ardent fan of Progressive Metal / Rock','Playing Tennis','Watching standup comedies'];
         
         const othersystem = <div className="row">
                                <div className="col-md-6">
                                    <h3>Other Skills   {' '} <i className="fa fa-folder-open ifonts" aria-hidden="true"></i> </h3><br />
                                        <ul  className="lists">
                                          { others.map((others) => <li  key={others}>{others}</li>) }
                                        </ul>
                                </div>
                                <div className="col-md-6">
                                    <h3>Operating Systems   {' '} <i className="fa fa-laptop ifonts" aria-hidden="true"></i> </h3><br />
                                        <ul  className="lists">
                                          { operate.map((operate) => <li  key={operate}>{operate}</li>) }
                                        </ul>
                                </div>
                            </div>
                    
         
      const personal =  <div className="row">
                            <div className="col-md-6">
                                <h3>Languages  {' '} <i className="fa fa-language ifonts" aria-hidden="true"></i> </h3><br />
                                <ul  className="lists">
                                  { langs.map((langs) => <li  key={langs}>{langs}</li>) }
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3>Interests  {' '} <i className="fa fa-music ifonts" aria-hidden="true"></i> </h3><br />
                                <ul  className="lists">
                                  { interests.map((interests) => <li  key={interests}>{interests}</li>) }
                                </ul>
                            </div>
                            </div>
         
           
      return (
          <div className="rcard-block">
          <h3>Education {' '} <i className="fa fa-graduation-cap ifonts" aria-hidden="true"></i> </h3>
           {education}
          <hr /><br />
          <h3>Experience {' '} <i className="fa fa-briefcase ifonts" aria-hidden="true"></i> </h3>
          {experience}
          <hr /><br />
          {caward}
          <hr /><br />
          <h3>Skills  {' '} <i className="fa fa-code ifonts" aria-hidden="true"></i> </h3>
          {sprogress}
          <hr /><br />
          <h3>Tools & Frameworks  {' '} <i className="fa fa-cogs ifonts" aria-hidden="true"></i> </h3>
          {frames}
          <hr />
          {othersystem}
          <hr />
          {personal}
          </div>
      );  
    };
}
      
        
        
       
export default Resume;