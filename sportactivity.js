let movies = [];

function init(){
	document.getElementById("retrieveActivities").onclick = loadMovies;
	loadMovies();
}

function loadSportActivities(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			movies = responseObject.results;
			render();
		}
	};

	xhttp.open("GET", `${process.env.API_URL}/api/activities`, true);
	xhttp.send();
}

function render(){
	let content = "";
	movies.forEach(movie =>{
		content += `
			<div>
				<p> Activity Id: ${movie.Id}</p>
				<br/>
				<p> Name: ${movie.Name}</p>
			</div>
		`
	})
	document.getElementById("activitydiv").innerHTML = content;
}