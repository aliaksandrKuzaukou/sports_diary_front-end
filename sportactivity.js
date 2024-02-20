let movies = [];

function init(){
	document.getElementById("retrieveMovies").onclick = loadMovies;
	getVariable();
}
async function getVariable(){
	return fetch("/getVariable").then(res => res.text()).then(data => data);
}
async function loadMovies(){
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
