'use strict'
$(document).ready(function(){
	
	var questOrder = $("input[name='questionOrder']:checked").val();
	$("input[name='questionOrderHidden']").val(questOrder);
	$("input[name='questionOrder']").change(function () {
		var temp = $("input[name='questionOrder']:checked").val();
		$("input[name='questionOrderHidden']").val(temp);
	});
	var getQuestionOrder = function(){
		return $("input[name='questionOrderHidden']").val();
	};
	//---------------------------
	$('#gram_do_make').click(function(){
		clickHelper(
			gram_do_make, 
			'Do - make.', 
			getQuestionOrder());
	});
	$('#gram_have_take').click(function(){
		clickHelper(
			gram_have_take, 
			'Have - take.', 
			getQuestionOrder());
	});
	$('#gram_inf_gerun').click(function(){
		clickHelper(
			gram_inf_gerund, 
			'Infinitive - Gerund.', 
			getQuestionOrder());
	});
	$('#gram_phrasal_verbs').click(function(){
		clickHelper(
			gram_phrasal_verbs, 
			'Phrasal verbs.', 
			getQuestionOrder());
	});

	$('#_39_1').click(function(){
		clickHelper(
			_39_1, 
			'Lesson 39.1 According to ___, (he) should ___ .', 
			getQuestionOrder());
	});
	$('#_39_2').click(function(){
		clickHelper(
			_39_2, 
			'Lesson 39.2.<br/><br/> When will ___ ?<br/> It should ___ .<br/> (At ten o\'clock?) <br/> Yes, according to ___ .', 
			getQuestionOrder());
	});
	$('#_39_3').click(function(){
		clickHelper(
			_39_3, 
			'Lesson 39.3.<br/><br/> (I) will ___ as soon as ___.', 
			getQuestionOrder());
	});
	$('#_39_4').click(function(){
		clickHelper(
			_39_4, 
			'Lesson 39.4.<br/><br/> Did (he) ___? I really don\'t remember. (He) might have ___ed (one/some) for (them).', 
			getQuestionOrder());
	});	

	$('#_41_1').click(function(){
		clickHelper(
			_41_1, 
			'Lesson 41.1.<br/><br/> Don\'t (climb to ...). You might (get stuck).', 
			getQuestionOrder());
	});
	$('#_41_2').click(function(){
		clickHelper(
			_41_2, 
			`Lesson 41.2.<br/><br/> I just don\'t know what to think about ...<br/>`+
			`What did (he) do? <br/>`+
			`(He sped down ...). <br/>`+
			`(He) did? (He) shouldn\'t have done that! <br/>`+
			`Of course (he) shouldn't have. (He) could have (gotten ...).`, 
			getQuestionOrder());
	});
	
	$('#dictionary').click(function(){
		clickHelper(
			_dictionary, 
			'Friquent dictionary', 
			getQuestionOrder());
	});
	//---------------------------


	
	var clickHelper = function(dbName, topicName, questionOrder){
		$('.toRemove').remove();
		createNewDoc(topicName);
		startTraining(dbName, questionOrder);	
		$('.nextTask').css('visibility','visible');
	};
	//-----------------------------------------------------
		var createNewDoc = function(topicName){		
			$('body').prepend(function(indx, x){
				var footer = `
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<p class="text-right">` + topicName + `</p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 quiz">
								<p id='question'></p>
								<textarea id="challenge" class="form-control" rows="25" ></textarea>
							</div>
							<div class="col-md-6 answer">
								<button class="btn btn-default btn-xs showSolution">Solution</button>
								<textarea id="solution" class="form-control hidden" rows="25"></textarea>
							</div>
						</div>		
					</div>
				`;
				return footer;
			});
		};
	//-----------------------------------------------------
		var startTraining = function(tasks, questionOrder){

			$('#challenge').focus();

			var task_number_counter = 0;
			$('.nextTask').click({n: task_number_counter, t: tasks, qo: questionOrder}, setNextTask);

			$(document). keyup(function(eventObject){
				if (eventObject.which === 190){
				  	$('.nextTask').click();
				}
			});
	
			$('.nextTask').click();	
		};
	//----------------------------------------------------------------------------

			var setNextTask = function(event){

				var tasks = event.data.t;
				tasks = sortByRating(tasks);
				var questionOrder = event.data.qo;

				var task_number;
				if(questionOrder === 'coherently'){
					task_number = event.data.n++ % tasks.length;
				}
				if(questionOrder === 'randomly'){
					task_number = Math.floor((Math.random() * (tasks.length - 1)) + 0);;
				}

				$('.showSolution').text('Solution');				
				$('#challenge').val('');
				$('#solution').removeClass('show')
							  .addClass('hidden');	
				$('#question').html(tasks[task_number].task);		

				var flag = false;
				$('.showSolution').click({n: task_number, t: tasks, f: flag}, showSolution);

				$(document).on("keyup", function(eventObject) {					
					if (eventObject.which === 222){						
				 	  	$('.showSolution').click();
						var temp = $('#challenge').val();
						temp = temp.replace('\'','');
						$('#challenge').val(temp);
					}		
				  });		
			};

			var showSolution = function(event){		

				console.log('showSolution');
				var tasks = event.data.t;
				var task_number = event.data.n;
				var flag = event.data.f;

				if(flag){
					$(this).text('Solution');
					$('#solution').removeClass('show')
								  .addClass('hidden');
				}
				else{
					$(this).text('Hide');
					$('#solution').html(tasks[task_number].solution)
								  .removeClass('hidden')
								  .addClass('show');
				}
				
				(flag) ? flag = false : flag = true;
			}

			var sortByRating = function(tasks){
				
				var tempTasks = [];
				for(var i = 5; i >= 0; i--){
					for(var j = 0; j < tasks.length; j++){
						if(tasks[j].rating === undefined)
							tasks[j].rating = 1;
						if(tasks[j].rating === i)
							tempTasks.push(tasks[j]);
					}
				}
				
				return tempTasks;
			}
});