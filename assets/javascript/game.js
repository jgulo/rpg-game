$(document).ready(function(){
//avatar information
$("#cyclopsImg").data({"name":"Cyclops", "lifepoints":100, "attackpower":15,"counterattack":8})
$("#wolverineImg").data({"name":"Wolverine", "lifepoints":100, "attackpower":18,"counterattack":11})
$("#megamanImg").data({"name":"Mega Man", "lifepoints":100, "attackpower":20,"counterattack":7})
$("#ryuImg").data({"name":"Ryu", "lifepoints":100, "attackpower":25,"counterattack":15})
$("#morriganImg").data({"name":"Morrigan Aensland", "lifepoints":100, "attackpower":13,"counterattack":10})


pOneHealth = 100;
pTwoHealth = 100;
var attackCounter = 1;

firstPlayerSelected = false;
secondPlayerSelected = false;





$(".avatarRow").click(function(){
	if (($("#playerTwo").find('img').length)){
		$("#gameFooter").html("Finish your battle!")
	} else {
		if(firstPlayerSelected === false){
			var playerOne = $(this).attr('id');
			var playerOneImgID = $(this).children('img').attr('id');
			var playerOneSrc = $(this).children('img').attr('src');
			$($('#' + playerOne).contents()).appendTo('#playerOne')
			$('#playerOne').append('<div class="progress"> <div class="progress-bar" id="attackerHealth" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> '+ pOneHealth + "%" +' </div> </div>')
	       	
			firstPlayerSelected = true;

			$("#gameFooter").html("Choose your Opponent!")
			console.log(playerOne)
		} else if (secondPlayerSelected== false){
			var playerTwo = $(this).attr('id');
			var playerTwoImgID = $(this).children('img').attr('id');
			var playerTwoSrc = $(this).children('img').attr('src');

			$($('#' + playerTwo).contents()).appendTo('#playerTwo')
			$('#playerTwo').append('<div class="progress"> <div class="progress-bar" id="defenderHealth" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> '+ pTwoHealth + "%" +' </div> </div>')
	       	
			secondPlayerSelected = true;
			$("#gameFooter").html("Attack!")
			console.log(playerTwo)
		}  
	}
});



$(".attackButton").click(function(){
	
	function checkifGameWinner(){
		if (((($("#cyclops").find('img').length))==false)&&(($("#wolverine").find('img').length)==false)&&(($("#megaman").find('img').length)==false)&&(($("#ryu").find('img').length)==false)&&(($("#morrigan").find('img').length)==false)){
			$("#gameFooter").html("You won the game!")

		}
	}

	function checkIfRoundWinner(){
		if (pTwoHealth<0){
			
	  		$("#playerTwo").empty();
	  		$("#playerTwo").append("<h1>Defender</h1>")
	  		$("#gameFooter").html("Choose your next opponent!")
	  		
	  		pTwoHealth = 100;
	  		pOneHealth = 100;
	  		attackCounter = 1;

	  		$("#attackerHealth").css("width", pOneHealth +"%")
			$("#defenderHealth").css("width", pTwoHealth +"%")

			$("#attackerHealth").html(pOneHealth + "%")
			$("#defenderHealth").html(pTwoHealth + "%")
			secondPlayerSelected = false;
		}
	}

	

	if(($("#playerOne").find('img').length)&&($("#playerTwo").find('img').length)){
		var attackerPower = $("#playerOne").children('img').data("attackpower");
		var defenderPower = $("#playerTwo").children('img').data("counterattack");
		
		
		pOneHealth = pOneHealth - defenderPower;
		pTwoHealth = pTwoHealth - (attackerPower*attackCounter);
		$("#attackerHealth").css("width", pOneHealth +"%")
		$("#defenderHealth").css("width", pTwoHealth +"%")

		$("#attackerHealth").html(pOneHealth + "%")
		$("#defenderHealth").html(pTwoHealth + "%")

		attackCounter++;
		console.log(attackCounter)
		checkifGameWinner();
		checkIfRoundWinner();

	} else if (($("#playerTwo").find('img').length)==false){
		alert("Select your opponent first!")
	} else {
		alert("Select your character first!")
	}
    
		
});


});


