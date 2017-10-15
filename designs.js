/**
*@description Creates string for table Html
@constructor
@param {number} gridHeight
@param {number} gridWidth
@returns {string} Table Html with gridHeight x gridWidth
*/
function getGridHtml(gridHeight, gridWidth) {
	let grid = '';
	for (let i = 0; i < gridHeight; i++) {
		let tr = '<tr>';
		let td = '';
		let j = 0;
		while (j < gridWidth) {
			td += '<td></td>';
			j++;
		}
		tr += td + '</tr>';
		grid += tr;
	}
	return grid;
}

/** empty table and build canvas from user selected height x width */
function makeGrid() {
	$('#pixel_canvas').empty();
	const gridHeight = $('#input_height').val();
	const gridWidth = $('#input_width').val();
	const gridHtml = getGridHtml(gridHeight, gridWidth);
	$('#pixel_canvas').append(gridHtml);
}

/**
@description color clicked td according to color picker
@constructor
@param {object} evt
*/
function colorTd(evt) {
	var target = $(evt.target);
	if (target.is('td')) {
		var colorPicker = $('#colorPicker').val();
		target.css('background-color', colorPicker);
	}
}

/** attach click events to submit and table on document ready */
$(function() {
	$('input[type="submit"]').click(function(evt) {
		evt.preventDefault();
		makeGrid();
	});
	$('#pixel_canvas').click(function(evt) {
		colorTd(evt);
	});
});