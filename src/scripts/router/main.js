const router = app.use(Turtle.RouterModule)

router.define({
  element: "#contents",
  routes: {
    "/": {
      title: "smtdfc Tools",
      component: "home-page",
      loader: async () => await import("../pages/home.js")
    },
   
  }
})

router.on("notfound", function(err) {
  err.router.element.innerHTML = `
    <div class="d-flex align-items-center flex-col">
      <h1 style="margin-bottom:0;font-size:100px;">404</h1>
      <br>
      <h1 class="mt-2 m-0">Page not found</h1>
      <br>
      <a class="btn btn-primary" href="#/">Goto home page</a>
    </div>
  `
})

router.start()