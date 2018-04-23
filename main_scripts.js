var sidebarWidth = "240px";
var mobilew = 601;
var itsearch = ["accordion", "dropdown", "hbox", "modal", "radiogroup", "sidebar", "tabbedbox", "table", "vbox",
			"audio", "button", "checkbox", "image", "label", "radiobutton", "separator", "textfield", "video",
			"align", "alt", "animation", "autoplay", "bgcolor", "border", "border-color", "border-radius", "class",
			"controls", "delay", "effect", "elevation", "font-family", "font-size", "height", "id", "link", "loop",
			"margin", "muted", "onchange", "onclick", "padding", "placeholder", "poster", "preload", "selected",
			"src", "text", "text-align", "text-color", "text-decoration", "tooltip", "width"];


function w3_toggleOpen(){
	if(document.getElementById("sideMenu").style.display == "none"){
		w3_open();
	}else{
		w3_close();
	}
}

function w3_open() {
	if(window.innerWidth < mobilew){
		document.getElementById("sideMenu").style.width = "100%";
		document.getElementById("closeSidebar").style.width = "100%";
	}else{
		document.getElementById("sideMenu").style.width = sidebarWidth;
		document.getElementById("closeSidebar").style.width = sidebarWidth;
		document.getElementById("main").style.marginLeft = sidebarWidth;
		document.getElementById("footer").style.marginLeft = sidebarWidth;
	}
	document.getElementById("sideMenu").style.display = "block";
}

function w3_close() {
	document.getElementById("sideMenu").style.display = "none";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("footer").style.marginLeft = "0";
}

function loadFunc(){
	// TABLE::td
	var tds = document.getElementsByTagName("td");
	for(var i = 0, j = tds.length; i < j; ++i)
		tds[i].style.verticalAlign = "middle";

	// SIDEBAR
	if(window.innerWidth < mobilew){
		w3_close();
	}else{
		w3_open();
	}
	
	// HEADER
	if(window.innerWidth < mobilew){
		document.getElementById("openNav").style.top = "60px";
		document.getElementById("openNav").style.left = "10px";
		document.getElementById("headerTitle").style.top = "18px";
		document.getElementById("headerTitle").style.left = "18px";
		document.getElementById("searchbox").style.top = " 68px";
		document.getElementById("searchbox").style.right = "54px";
		document.getElementById("searchboxbtn").style.top = "68px";
		document.getElementById("searchboxbtn").style.right = "18px";
		document.getElementById("searchbox").style.width = "200px";
		document.getElementById("headerin").style.height = "112px";
		document.getElementById("headerSeparator").style.height = "112px";
	}else{
		document.getElementById("openNav").style.top = "10px";
		document.getElementById("openNav").style.left = "10px";
		document.getElementById("headerTitle").style.top = "18px";
		document.getElementById("headerTitle").style.left = "92px";
		document.getElementById("searchbox").style.top = " 18px";
		document.getElementById("searchbox").style.right = "54px";
		document.getElementById("searchboxbtn").style.top = "18px";
		document.getElementById("searchboxbtn").style.right = "18px";
		document.getElementById("searchbox").style.width = "340px";
		document.getElementById("headerin").style.height = "72px";
		document.getElementById("headerSeparator").style.height = "72px";
	}
	
}

function gotoRef(ref){
	window.location.href = ref;
	if(window.innerWidth < mobilew){
		window.scrollBy(0, -112);
	}else{
		window.scrollBy(0, -72);
	}
}

function searchboxFind(){
	if(existsSearchedItem(document.getElementById("searchbox").value) == true){
		gotoRef("#"+document.getElementById("searchbox").value.replace('-', '')+"ref");
	}
}

function existsSearchedItem(s){
	var i;
	var found = false;
	for(i=0; i<itsearch.length; i++){
		if(s === itsearch[i]){
			found = true;
		}
	}
	return found;
}

function setSearchboxItems(){
	if(event.key === 'Enter') {
		searchboxFind();
	}
	
	if(document.getElementById("searchbox").value.length>1){
		if(document.getElementById("searchlist").innerHTML.length==0){
			var toappend = "";
			for(var i=0; i<itsearch.length; i++){
				toappend += "<option value="+itsearch[i]+">"
			}
			document.getElementById("searchlist").innerHTML = toappend;
		}
	}else{
		document.getElementById("searchlist").innerHTML = "";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("goUpBtn").style.display = "block";
	} else {
		document.getElementById("goUpBtn").style.display = "none";
	}
}

window.onscroll = function() {scrollFunction()};


