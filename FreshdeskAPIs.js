function send () {
	var body = {
	  name: document.getElementById('name').value,
	  email: document.getElementById('email').value,
	  fd_url: document.getElementById('fd_url').value,
	  tickets: (document.getElementById('tickets').value).split(",")
	}
	var check = JSON.stringify(body);
	var xhr = new window.XMLHttpRequest();
	xhr.open('POST','csv');
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.send(check);
	console.log(check);
}
function csvToArray(fileInput,) {
	var csvArray = [];
	var i = 0;
	var element = "";
	readFile = function () {
		var reader = new FileReader();
		reader.onload = function () {
			var final = reader.result;
			while(i<final.length){
					csvArray.push(element.split("\n"));
					element = "";
					i++;
				}
            document.getElementById("tickets").value = String(csvArray);
			console.log(document.getElementById("tickets").value);
		};
		// start reading the file. When it is done, calls the onload event defined above.
		reader.readAsBinaryString(fileInput.files[0]);
	};
	fileInput.addEventListener('change', readFile);
}