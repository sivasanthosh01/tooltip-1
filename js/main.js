var ques=document.querySelector(".more");
console.log(ques);


// var para=document.querySelectorAll(".content");
// console.log(para);

ques.addEventListener("click", function(){
	if(ques.nextElementSibling.classList.contains("content")){
		ques.nextElementSibling.classList.remove("content");
	}
	else{
		ques.nextElementSibling.classList.add("content");
	}
	
})