import React, { Component } from 'react';
import './ReusableButton.css';
//import your icons here
import Icon1 from './con/src/letter-a-inside-a-circle.png'

class ReusableButton extends Component {

   //this function will identify what icon to render
   renderIcon = () => {
     switch(this.props.btnText) {
       case 'yourText1': return <Icon1 />;
  
     }
   }

   render() {
       return(
           <div className='button'>
               <button type='button' class='btn-primary buttonStyle'>
                  {this.renderIcon} {this.props.btnText}
               </button>
           </div>
       )
   }
}

export default ReusableButton;