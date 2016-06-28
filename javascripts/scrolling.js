		;$(function(){
			window.onscroll = function(){

 				if (document.body.scrollTop > 0) {

 					$('#pulse').removeClass('pulseDown');

					$('.cv').html(
							'<h5 id="project_title" class="animate1">Kostiantyn Geiko &nbsp&nbsp&nbsp Junior .NET/JS Developer</h5>'+

						'<div class="container">'+
							'<div class="row">'+
								'<div class="col-lg-1 col-lg-offset-1">'+
									'<a href="mailto:k.i.geiko@gmail.com">'+
										'<div id="pulse" class="animate1"></div>'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'
					);
				}
				else {

 					$('#pulse').addClass('pulseDown');

					$('.cv').html(


						'<header class="inner">	'+
							'<h4 id="project_tagline">Curriculum Vitae</h4>'+
							'<h1 id="project_title" class="animate1">Kostiantyn Geiko</h1>'+
							'<h1 id="project_title" class="animate1">Junior  .NET/JS Developer</h1>'+
						'</header>'+

						'<div class="container">'+
							'<div class="row">'+
								'<div class="col-lg-1 col-lg-offset-1">'+
									'<a href="mailto:k.i.geiko@gmail.com">'+
										'<div id="pulse" class="animate1"></div>'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>	'
					);
				}
			};
		});