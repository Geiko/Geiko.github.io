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
	$('#_39_1').click(function(){
		clickHelper(_39_1, 'Lesson 39.1 According to ..., (he) should ... ', getQuestionOrder());
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
								<textarea id="challenge" class="form-control" rows="16" ></textarea>
							</div>
							<div class="col-md-6 answer">
								<button class="btn btn-default btn-xs showSolution">Solution</button>
								<textarea id="solution" class="form-control hidden" rows="16"></textarea>
							</div>
						</div>		
					</div>
				`;

					 // <button class="btn btn-default btn-xs" id="taskOrderCoherently"> Ask coherently </button>
					 // <button class="btn btn-default btn-xs" id="taskOrderRandomly"> Ask randomly </button>
				return footer;
			});
		};
	//-----------------------------------------------------
		var startTraining = function(tasks, questionOrder){

			var task_number_counter = 0;
			$('.nextTask').click({n: task_number_counter, t: tasks}, setNextTask);
			$('.nextTask').click();
			
			console.log(questionOrder);/////////////////
		};
	//----------------------------------------------------------------------------

			var setNextTask = function(event){

				var tasks = event.data.t;
				var task_number = event.data.n++ % tasks.length;

				$('.showSolution').text('Solution');
				$('#challenge').val('');

								//-----------------------------------
								// change to show solution-----------
								// $('#solution').html(tasks[task_number].solution)/////////////////
								//			  .removeClass('hidden')
								// 			  .addClass('show');
								$('#solution').removeClass('show')
								 			   .addClass('hidden');		
								//-----------------------------------		

				$('#question').html(tasks[task_number].task);

				var flag = false;
				$('.showSolution').click(function(){		
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
				});

			};



});