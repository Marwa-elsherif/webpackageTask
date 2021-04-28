import './style.scss';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "webpackage task ";
    element.classList.add('divstyle')
    return element;
};

document.body.appendChild(component());