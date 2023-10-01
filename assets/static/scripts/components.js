class ToolResourcesLoadProccess {
  constructor(name) {
    this.name = name
    this.totalTask = 0
    this.success = 0
    this.precent = 0
    this.done = false
    this.configs = {}
  }

  start() {
    this.done = false
    let count = 0
    let jsResources = this.configs.requirements.resources.js ?? []
    let resources = this.configs.requirements.resources
    this.totalTask = jsResources.length
    resources.js.forEach((p) => {
      let ctx = this
      addScript(
        p,
        new Function(),
        function(){
          ctx.reportDone()
        }
      )
    })
  }
  
  onSuccess() {}
  onStatusChange(p) {}
  reportDone() {
    if (this.done) return
    this.success++
    if (this.success > this.totalTask) {
      this.done = true
      return
    }
    this.precent = (this.success / this.totalTask) * 100
    this.onStatusChange(this.path)
    if (this.success == this.totalTask) {
      this.onSuccess()
      this.done = true
    }
  }

}


function addScript(path, onError = new Function(), onSuccess = new Function()) {
  let script = document.createElement("script")
  script.onerror = function() {
    onError()
    console.log(`Failed to load script ${path} `);
  }
  script.onload = function(){
    onSuccess()
  }
  script.src = path
  document.body.appendChild(script)
  return script
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

async function loadToolResources(configs) {
  let process = new ToolResourcesLoadProccess("t")
  process.configs = configs
  return process
}

Turtle.component("tool-nav", function($) {
  $.onRender = function() {
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