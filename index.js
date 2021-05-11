import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 var todayDate = new Date();
 todayDate=todayDate.getHours();
var greeting="";

var cssStyle={};
 if(todayDate>=11 && todayDate<2)
 {
     greeting="GOOD MORNING";
     cssStyle.color="green";
 }
 else if(todayDate>=2 && todayDate<7)
 {
     greeting="GOOD EVENING";
     cssStyle.color="Yellow";
 }
 else
 {
     greeting="GOOD NIGHT";
     cssStyle.color="blue";
 }
ReactDOM.render(
<>
<div>
<h1>Hello HAMZA,<span style={cssStyle}>{greeting}</span></h1>
</div>
</>  
    
    
    ,document.getElementById('root'));