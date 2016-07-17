define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += 'Entry module works!';
	// called secondModule run function for jsOutput element
    secondModule.run(jsOutput);
});
