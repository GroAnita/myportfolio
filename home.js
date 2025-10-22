const linkBoxes = document.querySelector('.home-container__box')
const linkBox1 = document.querySelector('.home-container__box--1')
const linkBox2 = document.querySelector('.home-container__box--2')  
const linkBox3 = document.querySelector('.home-container__box--3')
const linkBox4 = document.querySelector('.home-container__box--4')  


    
linkBox1.onclick = () => window.location.href = 'whoamI.html';

linkBox2.onclick = () => window.location.href = 'whatcanIdo.html';

linkBox3.onclick = () => window.location.href = 'mywork.html';

linkBox4.onclick = () => window.location.href = 'contactme.html';