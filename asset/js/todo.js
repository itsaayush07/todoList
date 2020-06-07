$("ul").on("click","li",function()
	{
		$(this).toggleClass("completed");

	});

//to fade out coplete task after click on X

$("ul").on("click","span",function(event)
	{
		$(this).parent().fadeOut(function()
			{
				$(this).remove();
			});
		event.stopPropagation();
	});

$("input[type='text'").keypress(function(event)
	{
		if(event.which===13)
		{
			var toDo=$(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" +toDo + "</li>");
		}
	});

$(".fa-edit").click(function(){
	$("input[type='text'").fadeToggle();
});
