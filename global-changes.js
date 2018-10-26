$(document).ready(function(){
	
	$('.menu-link').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('.tab').click(function(){
		var tabID = $(this).attr('data-tab');

		$('.tab').removeClass('chosen');
		$('.tab-content').removeClass('chosen');

		$(this).addClass('chosen');
		$('#'+tabID).addClass('chosen');
	})
	
	
	
	
	
	
	


        
            $.ajax({
                url: 'code-test.json',
                type: "POST",
                dataType: "json",
				async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var json = JSON.parse(data.d);
                    $(json).each(function (index, item) {
                        for (var option = 0; option < json[index].answerEntities.length; option++) {
                            var bankName = json[index].answerEntities[option].name;
							var bankApy = json[index].answerEntities[option].apy;
                            var bankearnings = json[index].answerEntities[option].earnings;
                            $('#bank-data').append(
                            '<tr><td>'
                            + bankName
                            + '</td><td>'
                            + bankApy
                            + '</td><td>'
                            + bankEarnings
                            + '</td></tr>')
                        }
                    });
                },
                error: function (data) { alert(data.responseText); }
            });



	
	
	
	
	
});