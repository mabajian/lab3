'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("I DID THE STRETCH GOAL");
		$("#testjs").text("you broke the button. GOOD JOB.");	
		$("#mess").text("(and also messed around)");	
		$("#toggle").toggleClass("active");
   	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#testjs").mouseenter(function(e) {
         $("#testjs").text("just kidding ;)");
	});


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    $("#mess").text("");

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
    	if(description.is(":visible"))
   		{  
   			$(description).fadeOut();
   			var thumb = $(containingProject).find(".img");
   			$(thumb).fadeOut(); 
   		}
    	else
    	{
 		   	$(description).fadeIn(); 
 		   	var thumb = $(containingProject).find(".img");
    		$(thumb).fadeIn();
        }
    }
}

}