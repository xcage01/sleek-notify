"use strict";
function sleekNotify (timeout) {
	this.timeout = timeout;
	this.className = "";
	this.alert = function(message) {
		var div = document.createElement("div");
		div.style.width = "300px";
		div.style.position = "fixed";
		div.style.right = "40px";
		div.style.top = "40px";
		div.style.padding = "10px";
		div.style.borderRadius = "3px";
		div.style.border = "1px solid black";
		// div.style.color = "white";
		div.className += " "+this.className;
		div.innerHTML = message;
		document.body.appendChild(div);
		var currentInstance = this;
		console.log("Timeout : "+this.timeout);
		setTimeout(function(){div.remove();},this.timeout*1000);
	};
	this.addClass = function(className) {
		this.className = className;
	}
};