// SELECT ELEMENTS 
let totalPoints = document.querySelector('.points span'),
reaction = document.querySelector('.reaction'),
memory = document.querySelector('.memory'),
verbal = document.querySelector('.verbal'),
visual = document.querySelector('.visual'),
boxSkills = document.querySelectorAll('.box-skill'),
userPoints = document.querySelectorAll('.box-points .new');



function newReq() {

	let myRequest = new XMLHttpRequest();
	
	myRequest.onreadystatechange = function() {
		// check if the request is complete
		if(this.readyState === 4 && this.status === 200) {
			// get js object from response text
			let jsObj = JSON.parse(this.responseText);

			// get object count 
			let countObj = jsObj.length;
			
			replaceData(jsObj,countObj);
		}
		
	}
	// Configure 
	myRequest.open('GET','data.json');
	// send the request
	myRequest.send();
}


newReq();

function replaceData(jsObj,count) {
	let theSum = 0;

	for(let i = 0; i < count; i++) {
		// create img tag
		let img = document.createElement('img');
		// add alt 
		img.alt = 'reac';

		// add src to img
		img.src = jsObj[i].icon
		// add img to main box
		boxSkills[i].prepend(img);
		// score points 
		userPoints[i].innerText = jsObj[i]['score'];

		theSum += jsObj[i].score;

	}
	reaction.innerText = jsObj[0].category;
	memory.textContent = jsObj[1].category;
	verbal.innerText = jsObj[2].category;
	visual.innerText = jsObj[3].category;


	totalPoints.innerText = Math.round(theSum / count);
}

