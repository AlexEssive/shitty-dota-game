function show_team() {
	JsHttpRequest.query('/content.php',{'w':'show_team'}, 
	function (result, errors){ if (errors) {alert(errors);} if (result){  
		alert(result["content"]);
	} else console.log("error"); }, true);
}
