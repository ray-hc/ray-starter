import $ from 'jquery';
import './style.scss';

let num = 0;
console.log('starting up!');

setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
},

1000);
