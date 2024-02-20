let movies = [];

function init(){
	document.getElementById("retrieveMovies").onclick = loadMovies;
	getVariable();
}
async function getVariable(){
	return fetch("/getVariable").then(res => res.text()).then(data => data);
}
async function loadMovies(){
	let baseUrl = await getVariable();
	console.log(baseUrl);
	fetch(baseUrl)
	.then(response => {
	  if (response.ok) {
		movies = response.json(); // Parse the response data as JSON
	  } else {
		throw new Error('API request failed');
	  }
	})
	.then(data => {
	  // Process the response data here
	  console.log(data); // Example: Logging the data to the console
	})
	.catch(error => {
	  // Handle any errors here
	  console.error(error); // Example: Logging the error to the console
	});
}

async function c(){
	try{
		let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			movies = responseObject.results;
			render();
		}
	};
	let baseUrl = await getVariable();
	console.log(baseUrl);
	xhttp.open("GET", baseUrl, true);
	xhttp.send();
	}
	catch(err){
		console.log(err);
	}
}

function render(){
	let content = "";
	movies.forEach(movie =>{
		content += `
			<div>
				<p> Movie: ${movie.Id}</p>
				<br/>
				<p> Runtime: ${movie.Name}</p>
			</div>
		`
	})
	document.getElementById("moviediv").innerHTML = content;
}
