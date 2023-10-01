function addScript(path) {
  let script = document.createElement("script")
  script.src = path
  script.onerror = function() {
    console.log(`Failed to load script ${path} `);
  }
  document.body.appendChild(script)
}

async function loadTool(base, key) {
  let data = await import(`${base}/tools/${key}/init.js`)
  let resources = data.requirements.resources
  resources.js.forEach((p) => {
    addScript(p)
  })
  addScript(`../tools/${key}/main.js`)
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