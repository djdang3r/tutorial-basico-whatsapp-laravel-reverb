$(function() {
  //  **------Load customizer**
  $.get("/assets/customizer.txt", function(html_string)
  {
    let customizer = $("#customizer");
    if (customizer.length >0){
      customizer.html(html_string);
    }
  },'html');
  setTimeout(()=>{
    loadConfiguration();
  },1000);
});

$(document).on("click",".sidebar-option > li", function () {
  let sidebarClassName = $(this).attr('class');
  $("nav").removeClass("horizontal-sidebar vertical-sidebar dark-sidebar").addClass(sidebarClassName);
  setLocalStorageItem("sidebar-option", sidebarClassName);
  setUpHorizontalHeader();
});

$(document).on("click",".layout-option > li", function () {
  let layoutClassName = $(this).attr('class');
  $("body").attr("class", layoutClassName);
  $("html").attr("dir", layoutClassName);
  if(layoutClassName === "box-layout") {
    $("html").removeAttr("dir");
  }
  setLocalStorageItem("layout-option", layoutClassName);
});

$(document).on("click",".color-hint > li", function () {
  let colorClassName = $(this).attr('class');
  let colorOption = getLocalStorageItem("color-option","default");
  $(".app-wrapper").removeClass(colorOption).addClass(colorClassName)
  console.log(colorClassName);
  let primaryColorValues = $(`.${colorClassName}`).css('--primary').split(',');
  if (primaryColorValues.length === 3) {
    let primaryColorHex = rgbToHex(parseInt(primaryColorValues[0]), parseInt(primaryColorValues[1]), parseInt(primaryColorValues[2]));
    setLocalStorageItem("color-primary", primaryColorHex);
  }
  let secondaryColorValues = $(`.${colorClassName}`).css('--secondary').split(',');
  if (secondaryColorValues.length === 3) {
    let secondaryColorHex = rgbToHex(parseInt(secondaryColorValues[0]), parseInt(secondaryColorValues[1]), parseInt(secondaryColorValues[2]));
    setLocalStorageItem("color-secondary", secondaryColorHex);
  }
  setLocalStorageItem("color-option", colorClassName)
  window.location.reload();
});

$(document).on("click",".text-size > li", function () {
  let fontClassName = $(this).attr('class');
  $("body").attr("text", fontClassName);
  setLocalStorageItem("text-option", fontClassName)
});

/*Handle click for Sidebar option, layout option and Text size*/
$(document).on("click",".offcanvas-body > ul > li",function() {
  $(this).parent().find("li").removeClass('selected')
  $(this).addClass('selected');
});

/* Theme name prepend to localstorage key*/
const themeName = "La-Theme";

/* Set item in local store */
function getLocalStorageItem(key,defaultValue=null){
  return localStorage.getItem(`${themeName}-${key}`)??defaultValue;
}
/* Get item in local store */
function setLocalStorageItem(key,value){
  localStorage.setItem(`${themeName}-${key}`, value);
}

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

function loadConfiguration(){
  $(".offcanvas-body > ul > li").removeClass("selected")
  let selectedSidebarOption = getLocalStorageItem("sidebar-option","vertical-sidebar");
  $("nav").addClass(selectedSidebarOption);
  $(".offcanvas-body > ul").find(`.${selectedSidebarOption}`).addClass("selected")
  let textOption = getLocalStorageItem("text-option","medium-text");
  $("body").attr("text", textOption);
  $(".offcanvas-body > ul").find(`.${textOption}`).addClass("selected")
  let layoutOption = getLocalStorageItem("layout-option","ltr");
  $("body").attr("class", layoutOption);
  $("html").attr("dir", layoutOption);
  $(".offcanvas-body > ul").find(`.${layoutOption}`).addClass("selected")
  let colorOption = getLocalStorageItem("color-option","default");
  $(".offcanvas-body > ul").find(`.${colorOption}`).addClass("selected")
  $(".app-wrapper").addClass(`${colorOption}`)


  setUpHorizontalHeader();
}
function setColor(){
  let primaryColor = $("#primary_color").val();
  let secondaryColor = $("#secondary_color").val();
  let root = document.querySelector(':root');
  root.style.setProperty('--primary', hexToRGB(primaryColor));
  root.style.setProperty('--secondary', hexToRGB(secondaryColor));
}

//  **------ Reset Functionality **
function resetCustomizer(){
  let colorOption = getLocalStorageItem("color-option","default");
  $(".app-wrapper").removeClass(colorOption)
  localStorage.clear();
  window.location.reload();
}

//  **------ Function to convert RGB to Hex **
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//  **------ Function to convert RGB to Hex **
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
