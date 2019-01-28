(() => {
	console.log('fired');

	const theButton = document.queryselector("buttonHolder img");


	function changeHeadline() {
		document.queryselector("h1").textcontent = "Hello There";
		document.queryselector("p").textcontent = "Welcome";
	}
	// set up the puzzle pieces and boards

	theButton.addEventListener("click", changeHeadline)
	
})();