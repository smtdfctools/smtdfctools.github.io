Turtle.component("main-navbar", function($) {
  
  return `
    <div class="d-none pos-absolute line-loader loader-md loader-info" style="top:0; z-index:10000;" id="main-loader" >
      <span></span>
    </div>
   <nav class="navbar  " id="main-navbar">  
     <div class="navbar-brand">
       <h3>smtdfc tools</h3>
     </div>
     <div class="navbar-contents" style="height:100%;">
        <button class="m-3 navbar-btn navbar-toggle-btn material-symbols-outlined" data-toggle="navbar" data-navbar="#main-navbar" >close</button>
        <ul class="navbar-menu">
          <li><a href="#/">Home</a></li>
          <li><a href="https://smtdfc.github.io/#/help/report">Report</a></li>
          <li><a href="https://smtdfc.github.io/#/help/contact">Contact</a></li>
        </ul>
     </div>
       <button class="mr-4 navbar-btn navbar-toggle-btn material-symbols-outlined" data-toggle="navbar" data-navbar="#main-navbar" style="font-size:30px;" >menu</button>
   </nav>
  `
})