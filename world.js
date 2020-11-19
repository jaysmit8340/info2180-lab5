window.onload = function(){
  document.getElementById("lookup").addEventListener("click", function(){
  
	var inputval = document.getElementById("country").value;

	var xh = new XMLHttpRequest();
	xh.onreadystatechange=function(){
		if(this.readyState== 4 && this.status==200){
			document.getElementById("result").innerHTML=xh.responseText;

		}
	}
	xh.open("GET", "world.php?country="+ inputval);
	xh.send();
})



document.getElementById("lookupCit").addEventListener("click", function(){
	
 var inputvalue = document.getElementById("country").value;
  
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange=function(){
		  if(this.readyState== 4 && this.status==200){
			  document.getElementById("result").innerHTML=xhr.responseText;
  
		  }
	  }
	  xhr.open("GET", "world.php?country="+ inputvalue+"&context=cities");
	  xhr.send();
  })
}
  