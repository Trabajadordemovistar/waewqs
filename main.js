var images = ["1ninja.png",
  "2ninja.png",
  "3ninja.png",
  "4ninja.png",
  "5ninja.png",
  "6ninja.png",
  "7ninja.png",
  "8ninja.png",

  "9ninja.png"] 
var i = 0; function update()
 { i++; var numbers_of_family_member_in_array = 5; 
  if (i > numbers_of_family_member_in_array) { i = 0; }
   var updatedImage = images[i]; 
   var updatedName = names[i];
    document.getElementById("album").src = updatedImage;
 }