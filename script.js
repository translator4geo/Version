// window.addEventListener('DOMContentLoaded', () => {
//   let aboutUsInterval, serviceInterval, contactsInterval;

//   document.getElementById('about-us').addEventListener('click', () => {
//     const ele = document.getElementById('us');
//     clearInterval(aboutUsInterval); // clear any existing interval
//     aboutUsInterval = setInterval(() => {
//       ele.style.visibility =
//         ele.style.visibility === 'hidden' ? 'visible' : 'hidden';
//     }, 200);

//     setTimeout(() => {
//       clearInterval(aboutUsInterval);
//       ele.style.visibility = 'visible';
//     }, 2000);
//   });

// document.getElementById('service').addEventListener('click', () => {
//   const ele = document.getElementById('serv');
//   clearInterval(serviceInterval);
//   serviceInterval = setInterval(() => {
//     ele.style.visibility =
//       ele.style.visibility === 'hidden' ? 'visible' : 'hidden';
//   }, 200);

//   setTimeout(() => {
//     clearInterval(serviceInterval);
//     ele.style.visibility = 'visible';
//   }, 2000);
// });

// document.getElementById('contacts').addEventListener('click', () => {
//   const ele = document.getElementById('contact');
//   clearInterval(contactsInterval);
//   contactsInterval = setInterval(() => {
//     ele.style.visibility =
//       ele.style.visibility === 'hidden' ? 'visible' : 'hidden';
//   }, 200);

//   setTimeout(() => {
//     clearInterval(contactsInterval);
//     ele.style.visibility = 'visible';
//   }, 2000);
//   // });
// });
