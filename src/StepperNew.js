// import React from "react";

// const StepperNew = () => {
       
//     <><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script></>

//     const stepButtons = document.querySelectorAll('.step-button');
//     const progress = document.querySelector('#progress');

//     Array.from(stepButtons).forEach((button, index) => {
//         button.addEventListener('click', () => {
//             progress.setAttribute('value', index * 100 / (stepButtons.length - 1));

//             stepButtons.forEach((item, secindex) => {
//                 if (index > secindex) {
//                     item.classList.add('done');
//                 }
//                 if (index < secindex) {
//                     item.classList.remove('done');
//                 }
//             })
//         })
//     })

//     return (
//         <div class="container">
//             <div class="accordion" id="accordionExample">
//                 <div class="steps">
//                     <progress id="progress" value='0' max='100'></progress>
//                     <div class="step-item">
//                         <button class="step-button text-center" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                             1
//                         </button>
//                         <div class="step-title">
//                             First Step
//                         </div>
//                     </div>
//                     <div class="step-item">
//                         <button class="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                             2
//                         </button>
//                         <div class="step-title">
//                             Second Step
//                         </div>
//                     </div>
//                     <div class="step-item">
//                         <button class="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                             3
//                         </button>
//                         <div class="step-title">
//                             Third Step
//                         </div>
//                     </div>
//                 </div>

//                 <div class="card">
//                     <div id="headingOne">
//                     </div>

//                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
//                         data-bs-parent="#accordionExample">
//                         <div class="card-body">
//                             your content goes here...
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div id="headingTwo">

//                     </div>
//                     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                         <div class="card-body">
//                             your content goes here...
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <div id="headingThree">

//                     </div>
//                     <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
//                         data-bs-parent="#accordionExample">
//                         <div class="card-body">
//                             your content goes here...
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default StepperNew;