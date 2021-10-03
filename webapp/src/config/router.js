export let layoutsType = ["basicLayouts"];

export let pagesRouterConfig = [
   {
      path: "/",
      component: "frontPage/index.jsx",
      layout: layoutsType[0]
   },
   {
      path: "/shader/:shaderClass/:shaderName",
      component: "shader/index.jsx",
      layout: layoutsType[0]
   }
];