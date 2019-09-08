var temp = 0;
function currentimg( leftvalue ){
  temp+=leftvalue;
var j= 0;
var imageposition = document.getElementsByClassName("product-image");
  if( temp < -75){
    temp = 0;
    for(j=0; j < imageposition.length; j++){
      imageposition[j].style.left = temp + "%";
    }
  }
  else if( temp > 0){
    temp = -75;
    for(j=0; j < imageposition.length; j++){
      imageposition[j].style.left = temp + "%";
    }
  }
  else{
    for(j=0; j < imageposition.length; j++){
      imageposition[j].style.left = temp + "%";
    }
  }
}
