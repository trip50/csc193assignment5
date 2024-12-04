document.addEventListener("DOMContentLoaded", function() {
    const biggerButton = document.getElementById("biggerButton");
    const fancyRadio = document.getElementById("fancyShmancy");
    const boringRadio = document.getElementById("boringBetty");
    const textArea = document.getElementById("textInput");
    const mooButton = document.getElementById("mooButton");



    fancyRadio.addEventListener("change", handleRadioChange);
    boringRadio.addEventListener("change", handleRadioChange);
    biggerButton.addEventListener("click",function(){
        textArea.style.fontSize="24pt";

    });


    function handleRadioChange() {
		if (fancyRadio.checked) {
			alert("FancyShmancy selected!");
			textArea.style.fontWeight = "bold";
			textArea.style.textDecoration = "underline";
			textArea.style.color = "blue";
		} else if (boringRadio.checked) {
			alert("BoringBetty selected!");
			textArea.style.fontWeight = "normal";
			textArea.style.fontStyle = "normal";
			textArea.style.textDecoration = "none";
			textArea.style.color = "black";
		}
	}

    mooButton.addEventListener("click", function () {
		
		let text = textArea.value;

		text = text.toUpperCase();

		let sentences = text.split(".");
		
		for (let i = 0; i < sentences.length - 1; i++) {
			let words = sentences[i].trim().split(" "); 
			words[words.length - 1] += "-Moo";         
			sentences[i] = words.join(" ");           
		}

		
		text = sentences.join(". ");

		
		textArea.value = text;
	});



});


