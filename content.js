// content.js
var height = '60px';
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL('toolbar.html');

// Add Frame to Page
document.documentElement.appendChild(iframe);

window.onload = function () {  
    var images = document.getElementsByTagName('img');   
    for (var i = 0; img = images[i++];) {    
        img.ondragstart = function() { return false; };
    }  
	var links = document.getElementsByTagName('a');   
    for (var i = 0; link = links[i++];) {    
        link.ondragstart = function() { return false; };
    }  
};  

var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'row-resize');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}