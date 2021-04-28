import "./style.css";
const element = document.createElement("header");

element.innerHTML = "this is webpack lab";
element.classList.add('class1')
import photo from '../../assets/q1.jpg'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="50px"
element.appendChild(img);
document.body.appendChild(element);





