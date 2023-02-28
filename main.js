let frnds = [
     {
	 name:"apple",
	 detail:"apple is red",
	 },
     {
	 name:"banana",
	 detail:"banana is yellow",
	 },
     {
	 name:"orange",
	 detail:"orange is orange",
	 },
     {
	 name:"grapes",
	 detail:"grapes is purple",
	 },
	 {
	 name:"mango",
	 detail:"mango is green",
	 }
];



let btn = document.querySelector("#btn");
let content1 = document.querySelector("#content1");
let content2 = document.querySelector("#content2");
 let arrayN=[];
 let arrayD=[];
 
btn.addEventListener("click", function(e){
   frnds.forEach(frnd => {
        arrayN.push(frnd.name)
		arrayD.push(frnd.detail)
		});
     let a = parseInt(Math.random()*arrayD.length);
	  content1.innerHTML = arrayN[a];
     content2.innerHTML = arrayD[a];

});