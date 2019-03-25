// variables and helper functions
var container = document.querySelector('.container');
var button = document.querySelector('.create-grid');
var rgbButton = document.querySelector('.rgb-button')
var blackRadioButton = document.querySelector('.black')
var rgbRadioButton = document.querySelector('.rgb')
var alphaRadioButton = document.querySelector('.alpha')

function createNewGrid(){
	let gridSize = prompt('Type in the size of the grid.');

	container.style.gridTemplateColumns = 'repeat(' + gridSize + ', auto)';

	for(let i = 0; i < gridSize**2; i++){
		var box = document.createElement('div');
		container.appendChild(box);
	}
}

function rebuildGrid(){
	var gridSize = Math.sqrt(container.childElementCount);
	
	// remove grid
	while (container.firstChild){
		container.removeChild(container.firstChild)
	}

	container.style.gridTemplateColumns = 'repeat(' + gridSize + ', auto)';

	for(let i = 0; i < gridSize**2; i++){
		var box = document.createElement('div');
		container.appendChild(box);
	}
}

function enableHoverToBlack(){
	var divs = document.querySelectorAll('.container div')
	
	divs.forEach((div) => {
		div.addEventListener('mouseover', (e) => {
			e.target.style.background = 'black'
		})
	})
}

function createInitialGrid(){
	for (let i = 0; i < 16**2; i++){
		container.style.gridTemplateColumns = 'repeat(16, auto)'
		var box = document.createElement('div');
		container.appendChild(box)
	}
}

function getRandomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return('rgb(' + r + ',' + g + ',' + b + ')')
}

function enableHoverToRGB(){
	var divs = document.querySelectorAll('.container div')
	
	divs.forEach((div) => {
		div.addEventListener('mouseover', (e) => {
			rgb = getRandomRGB()
			e.target.style.background = rgb;
		})
	})
}

function enableHoverToAlpha(){
	var divs = document.querySelectorAll('.container div')
		
	divs.forEach((div) => {
		div.style.background = 'rgba(0, 0, 0, 0)';
	})
	
	divs.forEach((div) => {
		var theAlpha = div.style.background.slice(14,-1);
		div.addEventListener('mouseover', () => {
			
			div.style.background = 'rgba(0, 0, 0, ' + Number(theAlpha) + 0.1 + ')';
		})
	})
}

// MAIN LOGIC STARTS NOW!!!
createInitialGrid()
enableHoverToBlack()

// 'create grid' event and select corresponding color
button.addEventListener('click', () => {
	while (container.firstChild){
		container.removeChild(container.firstChild)
	}
	createNewGrid();
	if (blackRadioButton.checked){enableHoverToBlack()} else {enableHoverToRGB()}
})

// radio button hover to black
blackRadioButton.onclick = () => {
	rebuildGrid()
	enableHoverToBlack()
}

// radio button hover to rgb
rgbRadioButton.onclick = () => {
	rebuildGrid()
	enableHoverToRGB()
}

// 10 percent thingy
alphaRadioButton.onclick = () => {
	rebuildGrid()
	enableHoverToAlpha()
}