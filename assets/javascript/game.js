$(document).ready(function(){
//avatar information
$("#nova").data({"name":"Nova", "lifepoints":100, "attackpower":15,"counterattack":8})
$("#wolverine").data({"name":"Wolverine", "lifepoints":100, "attackpower":18,"counterattack":11})
$("#joe").data({"name":"Viewtiful Joe", "lifepoints":100, "attackpower":20,"counterattack":7})
$("#chunli").data({"name":"Chun-li", "lifepoints":100, "attackpower":25,"counterattack":15})
$("#spiderman").data({"name":"Spider Man", "lifepoints":100, "attackpower":9,"counterattack":10})
$("#morrigan").data({"name":"Morrigan Aensland", "lifepoints":100, "attackpower":8,"counterattack":10})
$("#zero").data({"name":"Zero", "lifepoints":100, "attackpower":12,"counterattack":10})
$("#ironfist").data({"name":"Iron Fist", "lifepoints":100, "attackpower":13,"counterattack":11})



pOneHealth = 100;
pTwoHealth = 100;
var attackCounter = 1;

firstPlayerSelected = false;
secondPlayerSelected = false;





$(".avatarRow").click(function(){
	/*
	function checkifSameAvatar(){
		if (playerOne === playerTwo){
			console.log("wrong")
		} 
	}
	*/
		
	if(firstPlayerSelected === false){
		var playerOne = $(this).attr('id');
		var playerOneImgID = $(this).children('img').attr('id');
		$("#attackerPosition").html('<img class="battleAvatar" id="'+playerOneImgID+'" src="assets/images/' + playerOneImgID + '.png" alt='+playerOneImgID+'>');
		firstPlayerSelected = true;

		$("#" + playerOne).css("opacity",".25")
		console.log(playerOne)

		//$("#gameFooter").html("Choose your Opponent!")
			
	} else if (secondPlayerSelected === false){
		var playerTwo = $(this).attr('id');
		console.log(playerTwo)
		
		var playerTwoImgID = $(this).children('img').attr('id');
		$("#defenderPosition").html('<img class="battleAvatar" id="'+playerTwoImgID+'" src="assets/images/' + playerTwoImgID + '.png" alt='+playerTwoImgID+'>');

		secondPlayerSelected = true;
		$("#" + playerTwo).css("opacity",".25")
		$("#defenderAmt").html(pTwoHealth + "%")
		$("#defenderHealth").css("width", pTwoHealth +"%")
					//$("#gameFooter").html("Attack!")
		}  

	
});




$(".attackButton").click(function(){


	function checkifGameWinner(){
		if ((($("#defenderPosition").find('img').length)==0)&&(($("#novaImg").css('opacity'))==.25)&&(($("#wolverineImg").css('opacity'))==.25)&&(($("#spidermanImg").css('opacity'))==.25)&&(($("#zeroImg").css('opacity'))==.25)&&(($("#morriganImg").css('opacity'))==.25)&&(($("#ironfistImg").css('opacity'))==.25)&&(($("#joeImg").css('opacity'))==.25)&&(($("#chunliImg").css('opacity'))==.25)){
			$("#progressRight").empty();
			setTimeout(function(){
				alert("youwin")
			},500)
		} 
	}
	

	function checkIfRoundWinner(){
		if (pTwoHealth<0){
			
	  		$("#defenderPosition").empty();
	  		
	  		//$("#gameFooter").html("Choose your next opponent!")
	  		if ((($("#novaImg").css('opacity'))==.25)&&(($("#wolverineImg").css('opacity'))==.25)&&(($("#spidermanImg").css('opacity'))==.25)&&(($("#zeroImg").css('opacity'))==.25)&&(($("#morriganImg").css('opacity'))==.25)&&(($("#ironfistImg").css('opacity'))==.25)&&(($("#joeImg").css('opacity'))==.25)&&(($("#chunliImg").css('opacity'))==.25)){
	  			pTwoHealth = 0;
	  		} else {
	  			pTwoHealth = 100;
	  		}
	  		
	  		pOneHealth = 100;
	  		attackCounter = 1;

	  		$("#attackerHealth").css("width", pOneHealth +"%")
			$("#attackerAmt").html(pOneHealth + "%")
			
			secondPlayerSelected = false;
		}
	}

	

	if(($("#attackerPosition").find('img').length)&&($("#defenderPosition").find('img').length)){
		var attackerID = $("#attackerPosition").children('img').attr('id');
		var attackerPower = $("#" + attackerID).data("attackpower");
		var defenderID = $("#defenderPosition").children('img').attr('id');
		var defenderPower = $("#" + defenderID).data("counterattack");
		
		
		
		
		pOneHealth = pOneHealth - defenderPower ;
		pTwoHealth = pTwoHealth - (attackerPower*attackCounter);
		$("#attackerHealth").css("width", pOneHealth +"%")
		$("#defenderHealth").css("width", pTwoHealth +"%")

		$("#attackerAmt").html(pOneHealth + "%")
		$("#defenderAmt").html(pTwoHealth + "%")

		attackCounter++;
		
		
		checkIfRoundWinner();
		checkifGameWinner();
		

	} else if (($("#defenderPosition").find('img').length)){
		alert("Select your opponent first!")
	} else {
		alert("Select your character first!")
	}
			

	
});

});





