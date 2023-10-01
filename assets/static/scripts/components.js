function addScript(path) {
  let script = document.createElement("script")
  script.src = path
  script.onerror = function() {
    console.log(`Failed to load script ${path} `);
  }
  document.body.appendChild(script)
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



async function loadTool(configs) {
  let resources = configs.requirements.resources
  resources.js.forEach((p) => {
    addScript(p)
  })
  
}

Turtle.component("tool-nav", function($) {
  $.onRender = function(){
    $.refs.name.textContent = $.getAttribute("title")
  }
  
  return `
     <nav class="navbar shadow " id="main-navbar">  
       <div class="navbar-brand">
       <button class="mr-4 navbar-btn material-symbols-outlined" style="font-size:30px;" ${Turtle.events({
         click:function(){
           window.location="https://smtdfctools.github.io"
         }
       })} >arrow_left_alt</button>
         <h3 ${Turtle.ref("name")} >smtdfc tools</h3>
       </div>
     </nav>
  `
})