// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];


$(function(){
	showHideCloseWhenHover();
	removeLabelOnCloseClick();
	$("#add").click(function(){
		var label="";
		 label = $(".template").clone(true);
		 label.removeClass("template");
		 var name = $("#nameInput").val();
		 var image = getImage(name);
		 label.children(".name").text(name);
		 label.children(".avatar").attr("src",image);
		$("#wrapper").append(label);
		//$("#wrapper").children(".label").show();
		$("#nameInput").val();

	});
	
	
});

function getImage(inputName){
	var image="";
	if($("#imgInput").val()!=""){ //if the image input has an URL
	image = $("#imgInput").val();
	}else{
	$.each(data, function(){
		if(this.name==inputName){ //if the name field matches with one of the JSON data variable
			image=this.photo_url;
		}
			});
		if(image==""){					 // Sets the default avatar picture if not found and no image found
			image="img/default.png";
			}
	}
	return image;
}
function showHideCloseWhenHover(){

	$(".label").hover(function(){
		$(this).children(".x").show();
	}, function(){
		$(this).children(".x").hide();
	})
}
function removeLabelOnCloseClick(){
	$(".x").click(function(){
		$(this).parent().remove();
	})
}