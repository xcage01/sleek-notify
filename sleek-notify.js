"use strict";
function sleekNotify (timeout) {
	this.timeout = timeout;
	this.className = "";
	this.parent = document.createElement("div");
	this.parent.style.width = "300px";
	this.parent.style.position = "fixed";
	this.parent.style.right = "40px";
	this.parent.style.top = "30px";
	document.body.appendChild(this.parent);

	this.alert = function(message) {
		var div = document.createElement("div");
		div.style.width = "300px";
		div.style.padding = "10px";
		div.style.marginTop = "8px";
		div.style.borderRadius = "3px";
		div.style.border = "1px solid black";
		div.className += " "+this.className;
		div.innerHTML = message;
		this.parent.appendChild(div);
		var currentInstance = this;
		setTimeout(function(){div.remove();},this.timeout*1000);
	};
	this.alertTime = function(message,timeout) {
		var div = document.createElement("div");
		div.style.width = "300px";
		div.style.padding = "10px";
		div.style.marginTop = "8px";
		div.style.borderRadius = "3px";
		div.style.border = "1px solid black";
		div.className += " "+this.className;
		div.innerHTML = message;
		this.parent.appendChild(div);
		var currentInstance = this;
		setTimeout(function(){div.remove();},timeout*1000);
	};
	this.alertClass = function(message,className) {
		var div = document.createElement("div");
		div.style.width = "300px";
		div.style.padding = "10px";
		div.style.marginTop = "8px";
		div.style.borderRadius = "3px";
		div.style.border = "1px solid black";
		div.className += " "+this.className+" "+className;
		div.innerHTML = message;
		this.parent.appendChild(div);
		var currentInstance = this;
		setTimeout(function(){div.remove();},timeout*1000);
	};
	this.addClass = function(className) {
		this.className = className;
	}
};