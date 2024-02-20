let movies = [];

function loadMovies(){
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseObject = JSON.parse(xhttp.responseText);
			movies = responseObject.results;
			render();
		}
	};

	xhttp.open("GET", `${process.env.PROXY_API}/api/activities`, true);
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
