$(function(){
	"use strict";

	/*=========================================================================
		Initializing stellar.js Plugin
	=========================================================================*/
	$('.section').stellar({
		horizontalScrolling: false
	});
	
	
	$(window).on('load', function(){
	
		$('body').addClass('loaded');
	
		
		/*=========================================================================
			Portfolio Grid
		=========================================================================*/
		// Para o primeiro grid
var grid1 = $('#portfolio-grid');
grid1.shuffle({
  itemSelector: '.item'
});

$('#portfolio-filters > ul > li > a').on('click', function (e) {
  e.preventDefault();
  var groupName = $(this).attr('data-group');
  $('#portfolio-filters > ul > li > a').removeClass('active');
  $(this).addClass('active');
  grid1.shuffle('shuffle', groupName);
});

$('a.image-link').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true
  }
});

// Para o segundo grid
var grid2 = $('#portfolio-grid2');
grid2.shuffle({
  itemSelector: '.item'
});

$('#portfolio-filters2 > ul > li > a').on('click', function (e) {
  e.preventDefault();
  var groupName = $(this).attr('data-group');
  $('#portfolio-filters2 > ul > li > a').removeClass('active');
  $(this).addClass('active');
  grid2.shuffle('shuffle', groupName);
});

$('a.image-link').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true
  }
});
	
	});
	

	
	/*=========================================================================
		Links Navigation System
	=========================================================================*/
	$('.front-person-links > ul > li > a[data-section]').on('click', function(e){
		e.preventDefault();
		var section = $('#' + $(this).data('section'));
		
		if( section.size() != 0 ){
			
			$('body').addClass('section-show');
			
			section.addClass('active');
		
		}
		
	});
	$('.close-btn').on('click', function(){
		$('body').removeClass('section-show');
		$('section.active').removeClass('active');
	});
	
	
	
	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		singleItem: true
	});
	
	
	
	/*=========================================================================
		Skill Bar's Percent Initialization from attribute data-percent
	=========================================================================*/
	$('.skill-bar').each(function(){
		var $this = $(this),
			percent = parseInt( $this.data('percent'), 10 );
		
		$this.find('.bar').css('width', percent + '%');
	});
	
	
	
	
	/*=========================================================================
		Contact Form
	=========================================================================*/
	function isJSON(val){
		var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	}
	$('#contact-form').validator().on('submit', function (e) {
		
		if (!e.isDefaultPrevented()) {
			// If there is no any error in validation then send the message
			
			e.preventDefault();
			var $this = $(this),
				
				//You can edit alerts here
				alerts = {
				
					success: 
					"<div class='form-group' >\
						<div class='alert alert-success alert-dismissible' role='alert'> \
							<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
								<i class='ion-ios-close-empty' ></i> \
							</button> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",
					
					
					error: 
					"<div class='form-group' >\
						<div class='alert alert-danger alert-dismissible' role='alert'> \
							<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
								<i class='ion-ios-close-empty' ></i> \
							</button> \
							<strong>Error!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"
					
				};
			
			$.ajax({
			
				url: 'mail.php',
				type: 'post',
				data: $this.serialize(),
				success: function(data){
					
					if( isJSON(data) ){
						
						data = $.parseJSON(data);
						
						if(data['error'] == false){
							
							$('#contact-form-result').html(alerts.success);
							
							$('#contact-form').trigger('reset');
							
						}else{
							
							$('#contact-form-result').html(
							"<div class='form-group' >\
								<div class='alert alert-danger alert-dismissible' role='alert'> \
									<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
										<i class='ion-ios-close-empty' ></i> \
									</button> \
									"+ data['error'] +"\
								</div>\
							</div>"
							);
							
						}
						
						
					}else{
						$('#contact-form-result').html(alerts.error);
					}
					
				},
				error: function(){
					$('#contact-form-result').html(alerts.error);
				}
			});
		}
	});
	
	
});

	/*=========================================================================
		DATA AGE AUTOMATIC
	=========================================================================*/
	// Defina sua data de nascimento
const birthDate = new Date('1990-01-19'); // Substitua pela sua data de nascimento
const today = new Date();

// Calcule a diferença de anos
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();

// Ajuste a idade se o aniversário ainda não passou neste ano
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

// Insira a idade no elemento <p> com id "age"
document.getElementById('age').textContent = `${age} Years`;

