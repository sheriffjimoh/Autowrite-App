
const Text = document.getElementById('text').innerText;

 const DisplayText = document.getElementById('displaytext');


    let Textindex = 0;

    function WriteText() {


     DisplayText.innerText = Text.slice(0 , Textindex);

 	Textindex++;

 	if (Textindex > Text.length - 1) {

 		Textindex = 0;		
 	}
 	
 	}

 	 setInterval(WriteText, 100);