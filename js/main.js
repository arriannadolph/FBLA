/*----- constants -----*/
const problem = getElementById();
const wealthStat = getElementById();
const happinessStat = getElementById();
const healthStat = getElementById();
const parentHealthStat = getElementById();
const intellectStat = getElementById();
const optionbutton1 = getElementById();
const optionbutton2 = getElementById();
const optionbutton3 = getElementById();
const minigameButton = getElementById();
const majorChoice1 = [Year6A, Year6B, Year6C];
const majorChoice2 = [Year9A, Year9B, Year9C];
const majorChoice3 = [Year13A, Year13B, Year13C];
const majorChoice4 = [Year16A, Year16B, Year16C];
const majorChoice5 = [Year18A, Year18B, Year18C];

/*----- state variables -----*/
var wealth = 5;
var happiness = 5;
var health = 5;
var parentHealth = 5;
var intellect = 5;
var years = 1;
var eventCount = 1;

var modifiers = 0;


/*----- cached elements -----*/



/*----- event listeners -----*/
optionButton1.addEventListener("click", function(){
	if(years == 1){
        if(eventCount == 1){
		    var bottleChance = randomNumber(1,2)
		    if (randomNumber == 1){
			    problem.textContent=("Your baby eventually came around. He just needed a little more time.");
			    health = health + 1;
			    eventCount = eventCount + 1;
			    updateScreen();
		    }else{
			    problem.textContent=("After a long while of waiting, you decide to switch your baby over anyway.")
			    parentHealth = parentHealth - 1;
			    wealth = wealth - 1;
			    eventCount = eventCount + 1;
			    updateScreen();
		    }
	    }else if(eventCount == 2){
		    problem.textContent=("While your sleep may suffer, your baby went to bed faster with you there.");
            parentHealth = parentHealth - 1;
            health = health + 1;
            eventCount = eventCount + 1;
            updateScreen();
	    }else{
            problem.textContent=("While your child is falling slightly behind, you set up your future for you and your family");
            wealth = wealth + 2;
            happiness = happiness - 2;
            eventCount = 1;
            updateScreen();
    }
}
});
optionButton2.addEventListener("click", function(){
	// there are only two options for the 3 events on year 1, so i will put the second choice into option 3 for aesthetic purposes
});
optionButton3.addEventListener("click", function(){
    if(years == 1){
        if(eventCount == 1){
            var bottleChance = randomNumber(1,2);
            if(randomNumber == 1){
                problem.textContent=("Your child just needed more time. Making the switch wasn't necessary, and your baby actually does better breastfeeding.")
                wealth = wealth - 1
                eventCount = eventCount + 1;
                updateScreen();
            }else{
                problem.textContent=("Your baby responded much better to bottle-feeding.")
                health = health + 1;
                eventCount = eventCount + 1;
                updateScreen();
            }
        }
    }
});


/*----- functions -----*/

function updateScreen () {
	if(wealth <= 0 || happiness <= 0 || health <= 0 || parentHealth <= 0 || intellect <= 0){
		problem.textContent=("You failed at raising your child. Your child made it to " + years + "years old.");
		//this will be the code to handle a premature game over 
	}else{
		wealthStat.textContent=("Wealth ( $ ) = " + wealth);
		happinessStat.textContent=("Happiness ( :D ) = " + happiness);
		healthStat.textContent=("Health ( <3 ) = " + health);
		parentHealthStat.textContent=("Parent Wellbeing ( <> ) = " + parentHealth);
		intellectStat.textContent=("Intellect (IQ) = " + intellect);
		//this will update the stats ^^
	}
};

function option1Selected (){
	if(majorChoice1[Year6A] == true){

    }
};
