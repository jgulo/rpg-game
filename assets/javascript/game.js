$(document).ready(function(){
//avatar information
$("#cyclopsImg").data({"name":"Cyclops", "lifepoints":100, "attackpower":15,"counterattack":8})
$("#wolverineImg").data({"name":"Wolverine", "lifepoints":100, "attackpower":18,"counterattack":11})
$("#megamanImg").data({"name":"Mega Man", "lifepoints":100, "attackpower":20,"counterattack":7})
$("#ryuImg").data({"name":"Ryu", "lifepoints":100, "attackpower":25,"counterattack":15})
$("#morriganImg").data({"name":"Morrigan Aensland", "lifepoints":100, "attackpower":13,"counterattack":10})


pOneHealth = 100;
pTwoHealth = 100;
firstPlayerSelected = false;

 



$(".avatarRow").click(function(){

	if(firstPlayerSelected === false){
		var playerOne = $(this).attr('id');
		var playerOneImgID = $(this).children('img').attr('id');
		var playerOneSrc = $(this).children('img').attr('src');
		$($('#' + playerOne).contents()).appendTo('#playerOne')
		$('#playerOne').append('<div class="progress"> <div class="progress-bar" id="attackerHealth" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> '+ pOneHealth + "%" +' </div> </div>')
       	//$("#" + playerOne).empty();
		//$('#playerOne').append('<img id="' + playerOneImgID + '" src="' + playerOneSrc + '" /> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> 100% </div> </div>');
		firstPlayerSelected = true;
		console.log(playerOne)
	} else{
		var playerTwo = $(this).attr('id');
		var playerTwoImgID = $(this).children('img').attr('id');
		var playerTwoSrc = $(this).children('img').attr('src');

		$($('#' + playerTwo).contents()).appendTo('#playerTwo')
		$('#playerTwo').append('<div class="progress"> <div class="progress-bar" id="defenderHealth" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> '+ pOneHealth + "%" +' </div> </div>')
       	//$("#" + playerTwo).empty();
		//$('#playerTwo').append('<img id="' + playerTwoImgID + '" src="' + playerTwoSrc + '" /> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> 100% </div> </div>');
		console.log(playerTwo)
		
	}  
});



$(".attackButton").click(function(){

	function checkIfWinner(){
		if (pTwoHealth<0){
			alert("you win")
	  		$("#playerTwo").empty();
	  		$("#playerTwo").append("<h1>Defender</h1>")
	  		alert("chose next opponent")
	  		
	  		pTwoHealth = 100;
	  		pOneHealth = 100;

	  		$("#attackerHealth").css("width", pOneHealth +"%")
			$("#defenderHealth").css("width", pTwoHealth +"%")
		}
	}

	if(($("#playerOne").find('img').length)&&($("#playerTwo").find('img').length)){
		var attackerPower = $("#playerOne").children('img').data("attackpower");
		var defenderPower = $("#playerTwo").children('img').data("counterattack");

		
		pOneHealth = pOneHealth - defenderPower;
		pTwoHealth = pTwoHealth - attackerPower;
		$("#attackerHealth").css("width", pOneHealth +"%")
		$("#defenderHealth").css("width", pTwoHealth +"%")

		checkIfWinner();

	} else if (($("#playerTwo").find('img').length)==false){
		alert("Select your opponent first!")
	} else {
		alert("Select your character first!")
	}
    
		
});









});


