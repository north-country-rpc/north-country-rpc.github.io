// pull api and convert to html elements
$(document).ready(function(){
	$.getJSON('https://api.sheety.co/8e7bb733-230c-4d61-a9ce-18e0350a15e4', function(data) {
		var template = Handlebars.compile($('#item-template-desk').html())
		$('#items-desk').html(template(data));
	})
	$.getJSON('https://api.sheety.co/8e7bb733-230c-4d61-a9ce-18e0350a15e4', function(data) {
		var template = Handlebars.compile($('#item-template-mobile').html())
		$('#items-mobile').html(template(data));
	})
})

// add sorting to table
function FetchTable() {
	$('#bed-table-sort').tablesorter({
	tableClass: 'tablesorter',
	cssAsc: "tablesorter-headerSortUp",
	cssDesc: "tablesorter-headerSortDown",
	cssHeader: "tablesorter-header",
	cssHeaderRow: "tablesorter-headerRow",
	cssIcon: "tablesorter-icon",
	cssChildRow: "tablesorter-childRow",
	cssInfoBlock: "tablesorter-infoOnly",
	cssProcessing: "tablesorter-processing",
	})
};

// add sorting to table after 1.45 seconds
setTimeout(FetchTable,1550);

// search filter
function searchFilter(){
	$("#bed-table-search").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		if ($(window).width() >= 992) { 
			$("#items-desk tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			   	$("#items-desk tr:visible").each(function (index) {
	        		$(this).css("background-color", !!(index & 1)? "rgba(0,0,0,0)" : "rgba(0,0,0,.05)");
	    		});
			});
    	} 
    	else{ 
			$("#items-mobile .bed-org").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
    	}	
	});   
};

// keep checking browser width
$(document).ready(function() {
    searchFilter();
    $(window).resize(searchFilter);
});






