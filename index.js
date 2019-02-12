var values = ["#homeTxt", "#scenesTxt", "#settingsTxt", "#infoTxt"];

$(()=>{
  // $(".home").find("p").addClass("not-active");
  for(i in values) $(values[i]).addClass("not-active");
});

clickFunc = (str) => {
  if($(str).hasClass("not-active")) $(str).removeClass("not-active");
  $(str).addClass("active");
  
  for(i in values){
    if(values[i] != str){
      if($(values[i]).hasClass("active")){
        $(values[i]).removeClass("active");
      }
      $(values[i]).addClass("not-active");
    }
  }
}