async function getListTools(){
  let response = await axios.post("https://smtdfctools.cyclic.app/api/v1/tools/list")
  return response.data
}



Turtle.component("group-items", function($) {
  let items = $.props.list ?? []
  let title = $.props.title
  $.onRender = function() {
    items.forEach((item) => {
     // console.log(item);
      const { list } = $.refs
      let div = document.createElement("div")
      div.className = "item fade"
      div.innerHTML = `
        <img class="icon" src="${item.base_url}/assets/icon.png" alt="tool_icon">
        <span>${item.name}</span>
      `
      
      div.onclick = function() {
        window.location = `${item.base_url}${item.entry_point}`
      }

      list.addChild(div)
    })
  }
  return `
    <div class=" group">
      <h3>${title}</h3>
      <div class="menu" ${Turtle.ref("list")}></div>
    </div>
  `
})

Turtle.component("list-tool-page", function($) {
  $.onRender = async function(){
    let list = await getListTools()
    $.innerHTML =`
		<group-items 
      ${Turtle.props({
    		title:"List tools",
    		list:list
    	})}
    ></group-items>
    `
  }
  
  return `

    <div class="circle-loader loader-sm"></div>
	`
})