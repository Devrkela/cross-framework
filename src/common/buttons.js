export default [
  {
    icon:"/common/icons/bold_text.svg", 
    action:  function(){window["#store"].bold.setValue(!window["#store"].bold.getValue());}    
  }, 
  {
    icon:"/common/icons/italic_text.svg", 
    action:  function(){window["#store"].italic.setValue(!window["#store"].italic.getValue());}    
  },     
      {
    icon:"/common/icons/underline_text.svg", 
    action:  function(){window["#store"].underline.setValue(!window["#store"].underline.getValue());}    
  },
  {
    icon:"/common/icons/color_text.svg", 
    action:  function(){window["#store"].color.setValue(!window["#store"].color.getValue());}    
  },
  {
    icon:"/common/icons/more_options_vert.svg", 
    action:  function(){}
  }, 
]