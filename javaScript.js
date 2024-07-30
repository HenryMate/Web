const navlinks = document.getElementById('navlinks');
const show = () => navlinks.style.top = "0px";
const hide = () => navlinks.style.top = "-1000px" ;


const day = () => {
   document.getElementById("change").innerHTML = "Alright!"
};

courses = () => {

}


let copyright = document.getElementById('copyright');
madeByme = document.createElement('p');
madeByme.innerHTML = 'Website made by Henry whatsapp on <em>0977169102 </ em> for website biulding';
madeByme.style = 'color:black; font-style: italic;';
copyright.appendChild(madeByme);

