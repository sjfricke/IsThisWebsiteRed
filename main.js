var intervalLoop, current_palette;
var noDiv = document.getElementById('noDiv');
var sorryDiv = document.getElementById('sorryDiv');

(function () {
    intervalLoop = setInterval(function(){
        current_palette = colorPalette[Math.floor(Math.random()*colorPalette.length)]; // [ 0 - length-1 ];
	document.body.style.background = current_palette.background;	
        noDiv.style.color = current_palette.text;
        sorryDiv.style.color = current_palette.text;
    }, 1000)
})();

// using fitText to have text full screen all times
fitText(noDiv, 0.3);
fitText(sorryDiv, 1.0);
