import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import GoogleMap from './google_map';
import axios from 'axios';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class Contact extends Component{
    
    //outside your render method. stateless function
    
    renderField(field) {
        
        const { meta: { touched, error } } =field; // ES6 destructuring field.meta.touched and field.meta.error
        
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <input
                    className="form-control  form-control-danger"
                    type="text"
                    placeholder={field.label}
                    {...field.input}
                />
                <div className="form-control-feedback">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values) {
            
    //    window.alert(JSON.stringify(values));
        
        /* StringClient uses the application/x-www-form-urlencoded format by default while axios uses application/json by default 
         querystring is used to encode the data. */
        
        const queryString = require('query-string');

        
            axios.post('http://raghu666.com/spring/contact_page.php', queryString.stringify({
                name: values.name, 
                email: values.email,
                message: values.message
            }))
                .then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                console.log(error);
            });
        
        values.name = '';
        values.email = '';
        values.message = '';
        
    }
    
    
    render(){
        
       const { handleSubmit, reset } = this.props; 
        
      return(
          <div className="rcard-block">
          <div className="row">
            <div className="col-md-6">
                    <h4>Send a message :</h4><br />
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                           <Field
                               label="Name"
                               name="name"
                               component={this.renderField}
                           />
                           <Field
                               label="Email"
                               name="email"
                               component={this.renderField}
                           />
                           <Field
                               label="Message"
                               name="message"
                               component={this.renderField}
                           />
                           <button type="submit" className="btnsubmit">Send</button>
                           <button type="button" className="btnsubmit" onClick={reset}>Clear</button>
                       </form>
                </div>
                <div className="col-md-6 weathers">
                    <SearchBar />
                    <WeatherList />
                </div>    
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <h4>Get in touch:</h4><br />
                    <h5>
                        <i className="fa fa-map-marker fa-lg fa-fw ifonts1" aria-hidden="true"></i>
                        <div  className="address">3613 Powelton Avenue
                        Apt 3F, Philadelphia
                        PA - 19104</div>
                    </h5><br /><br />
                    <h5>
                        <i className="fa fa-at fa-lg fa-fw ifonts1" aria-hidden="true"></i>
                        <div  className="address"><a className="email" href="mailto:raghu_s1990@live.com">raghu_s1990@live.com</a></div>
                    </h5>
                    <br /><br />
                    <h5>
                        <i className="fa fa-mobile fa-lg fa-fw ifonts1" aria-hidden="true"></i>
                        <div  className="address"><strong>(229)-299-6667</strong></div>
                    </h5>
                    <br /><br />
                    <h4>Follow me on : <br /><br />
                        <a href="https://linkedin.com/in/raghu-shivaraman-8076b3103/" target="_blank"><i className="fa fa-linkedin fa-2x fa-fw" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/raghu.shivaraman" target="_blank"><i className="fa fa-facebook fa-2x fa-fw" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/the_prog_aficionado/" target="_blank"><i className="fa fa-instagram fa-2x fa-fw" aria-hidden="true"></i></a>
                        <a href="https://open.spotify.com/user/22jdb77n37u4razxgwnhtbauy/playlist/4vphDXG9C1tWFD8dfIbh8c" target="_blank"><i className="fa fa-spotify fa-2x fa-fw" aria-hidden="true"></i></a>
                    </h4>
                 </div>
                    <div className="col-md-8">
                        <div className="gmap">
                               <GoogleMap />    
                           </div>
                        </div>
                </div>
        </div>
      );  
    };
}

// Validation Function 

function validate(values){
    
   // console.log(values) 
    
    const errors = {};
    
    if(!values.name){
        errors.name = 'Enter your name';
    }
    if(!values.email){
        errors.email = 'Enter email';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if(!values.message){
        errors.message = 'Enter some message please';
    }
    
    
    // if errors is empty the form is fine to submit. 
    // If errors has any properties, redux form assumes form is invalid.
    return errors;
}



export default reduxForm({
    validate,
    form: 'ContactForm'
})(Contact);