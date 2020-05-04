// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('loaded js');

//Listening to multiple button clicks
const btn = document.querySelectorAll('button.buy');

 const handleClicks = (event) => {
if(event.type === 'click' || event.key === 'Enter'){
console.log('Click handled');
}
  
  //  console.log(event.target.dataset.price);
 }

 btn.forEach(function(btns){
     btns.addEventListener('click', handleClicks);
 });


 const photoEl = document.querySelector('.photo');

 photoEl.addEventListener('click', handleClicks);
 photoEl.addEventListener('keyup', handleClicks);

 const logo = document.querySelector('.bytes');

 logo.addEventListener('click', function (e){
   e.preventDefault();
 });

const signupForm = document.querySelector('[name="signup"]');

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.email.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
