Turtle.component("tool-nav", function($) {
  return `
     <nav class="navbar shadow " id="main-navbar">  
       <div class="navbar-brand">
       <button class="mr-4 navbar-btn material-symbols-outlined" data-toggle="offcanvas" data-navbar="#main-offcanvas" style="font-size:30px;" ${Turtle.events({
         click:function(){
           window.location="https://smtdfctools.github.io"
         }
       })} >arrow_left_alt</button>
         <h3 ${Turtle.ref("name")} >smtdfc tools</h3>
       </div>
     </nav>
  `
})