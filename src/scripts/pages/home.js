const base = "https://smtdfctools.github.io"
async function loadSource() {
  let response = await axios({
    url: `../../sources.json`,
  })
  return response.data.sources
}

async function loadContent(source) {
  let response = await axios({
    url: `${source}/info.json`,
  })
  return response.data
}

Turtle.component("home-page", function($) {
  $.addItem = function(info,source,link) {
    let div = document.createElement("div")
    div.innerHTML = `
      <div class="fade tool-info mt-4 p-4 shadow d-flex align-items-center justify-content-sb">
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined">${info.icon ?? ""}</span>
          <h4 class="ml-1"> ${info.name} </h4>
        </div>
        <span class="material-symbols-outlined">arrow_right_alt</span>
      </div>
    `
    console.log(source)
    div.addEventListener("click", function() {
      showLoader()
      window.location = `${link}/index.html?time=${Date.now()}&key=${generateKey("_")+generateKey()+generateKey()+generateKey()}&group=${source.key}&name=${info.key}`
    })
    
    $.refs.list.appendChild(div)
  }

  showLoader()
  $.onRender = function() {
    loadSource()
      .then((sources) => {
        sources.forEach((source) => {
          loadContent(source)
            .then(s => {
              s.tools.forEach(item => {
                $.addItem(item,s.info,source)
              })
            })
        })
        hideLoader()
      })
      .catch((err) => {
        app.ui.addMsg("Cannot load content ", "error", 4000)
      })
      .finally(() => {

      })

  }

  return `
  <h1>List Tools </h1>
  <div class="" ${Turtle.ref("list")}></div>
  `
})