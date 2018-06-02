function timeConverter(time) {
	var days = Math.floor(time / 86400);
	var hours = Math.floor((time - (days * 86400)) / 3600); 
	var minutes = Math.floor((time - ((days * 86400) + (hours * 3600))) / 60)
	var seconds = Math.floor(time - (days * 86400) - (hours * 3600) - (minutes * 60));
	if (days   < 10) {hours   = "0"+days;}
	if (hours   < 10) {hours   = "0"+hours;}
	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}
	return days+':'+hours+':'+minutes+':'+seconds;
	//console.log(days+':'+hours+':'+minutes+':'+seconds);
}

exports.print = timeConverter;