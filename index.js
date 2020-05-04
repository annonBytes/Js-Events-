// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('loaded js');

//Listening to multiple button clicks
const btn = document.querySelectorAll('button.buy');

 const handleClicks = (event) => {
   console.log('Click handled');
   console.log(event.target.dataset);
 }

 btn.forEach(function(btns){
     btns.addEventListener('click', handleClicks);
 });