// this loads a github repo spruce code from the url
// execute the following in the url

//include javascript: then paste the following code in the url bar

(function(){fetch('https://raw.githubusercontent.com/90-C0KE/cookie-clicker/main/main.js').then(response => {if (!response.ok) {throw new Error('Network response was not ok');}return response.text();}).then(scriptText => {try {eval(scriptText);console.log('Script executed successfully');}catch (error) {console.error('Error executing script:', error);}}).catch(error => {console.error('Failed to load the script:', error);});})();
