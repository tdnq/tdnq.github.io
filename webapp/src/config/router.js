export let layoutsType = ["basicLayouts"];

export let pagesRouterConfig = [
   {
      path: "/",
      component: "./pages/frontPage/index.jsx",
      layout: layoutsType[0]
   },
   {
      path: "/shader/:shaderName",
      component: "./pages/shader/index.jsx",
      layout: layoutsType[0]
   }
];