/*----- constants -----*/
const problem = getElementById();
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
let intellect = localStorage.getItem('intellect')?parseInt(localStorage.getItem('intellect')):30;
let wealth = localStorage.getItem('wealth')?parseInt(localSotrage.getItem('wealth')):30;
let happiness = localStorage.getItem('happiness')?parseInt(localStorage.getItem('happiness')):30;
let health = localStorage.getItem('health')?parseInt(localStorage.getItem('health')):30;
let parentWellbeing = localStorage.getItem('parentWellbeing')?parseInt(localStorage.getItem('parentWellbeing')): 30;
var years = 1;
var eventCount = 1;

var majorChoice2Modifiers = 0;
var majorChoice3Modifiers = 0;
var majorChoice5Modifiers = 0;

var hasTablet = false;


/*----- cached elements -----*/



/*----- event listeners -----*/
optionButton1.addEventListener("click", function(){
	if(years == 1){
        if(eventCount == 1){
		    var bottleChance = randomNumber(1,2)
            // makes it a 50% chance on whether or not the child needs to breastfeed
		    if (bottleChance == 1){
			    problem.textContent=("Your child eventually came around. He just needed a little more time.");
			    health = health + 1;
			    eventCount = eventCount + 1;
			    updateScreen();
		    }else{
			    problem.textContent=("After a long while of waiting, you decide to switch your child over anyway.")
			    parentHealth = parentHealth - 1;
			    wealth = wealth - 1;
			    eventCount = eventCount + 1;
			    updateScreen();
		    }
	    }else if(eventCount == 2){
		    problem.textContent=("While your sleep may suffer, your child went to bed faster with you there.");
            parentHealth = parentHealth - 1;
            health = health + 1;
            eventCount = eventCount + 1;
            updateScreen();
	    }else{
            problem.textContent=("While your child is falling slightly behind, you set up your future for you and your family");
            wealth = wealth + 2;
            happiness = happiness - 2;
            eventCount = 1;
            years = 2;
            updateScreen();
        }
    }else if(years == 2){
        if(eventCount == 1){
            problem.textContent=("After taking your child to a pediatrician, you discovered that your child's slight delay to walking is completely normal, and not cause for concern.");
            if(parentHealth > 5){
                parentHealth = 5;
            }
            eventCount = eventCount + 1;
            updateScreen();
        }else{
            problem.textContent=("You decide to punish your child with a punishment that makes them think about what they did. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers + 1;
            majorChoice3Modifiers = majorChoice3Modifiers + 1;
            majorChoice5Modifiers = majorChoice5Modifiers + 1;
            eventCount = 1;
            years = 3;
            updateScreen();
        }
    }else if(years == 3){
        if(eventCount == 1){
            problem.textContent=("The pediatrician says that the speech delay is temporary, and that you should try encouraging your child to speak, and speak or read to them.");
            wealth = wealth - 1;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else if(eventCount == 2){
            problem.textContent=("You take your child to the birthday party. While you're there, your friend talks to you about their child's educational tablet, and tells you to consider buying one.");
            happiness = happiness + 1;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else{
            problem.textContent=("You buy your child the tablet, and see it do wonders")
            wealth = wealth - 1;
            intellect = intellect + 1;
            eventCount = 1;
            years = 4;
            hasTablet = true
        }
    }else if(years == 4){
        if(eventCount == 1){
            problem.textContent=("You decide to enroll your child into preschool. This allows both you and your spouse to work longer hours, and make more money.");
            wealth = wealth + 2;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else if(eventCount == 2){
            problem.textContent=("You get the promotion, but as you were working towards it, you had to work even longer.");
            wealth = wealth + 1;
            happiness = happiness - 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide to limit your child's use of the tablet.")
            intellect = intellect + 1;
            eventCount = 1;
            years = 5;
        }else{
            eventCount = 1;
            years = 5;
        }
    }
});

optionButton2.addEventListener("click", function(){
	// there are only two options for the 3 events on year 1, so i will put the second choice into option 3 for aesthetic purposes
    if(years == 1){
        problem.style.display='none';
    }else if(years == 2){
        if(eventCount == 1){
            problem.style.display='none';
        }else{
            problem.textContent=("You decide not to punish your child at all. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers + 1;
            majorChoice3Modifiers = majorChoice3Modifiers + 1;
            majorChoice5Modifiers = majorChoice5Modifiers + 1;
            happiness = happiness + 1;
            intellect = intellect - 1;
            eventCount = eventCount + 1;
            updateScreen();
        }
    }else if(years == 3){
        problem.style.display='none';
    }else if(years == 4){
        if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide that it isn't a problem.")
            intellect = intellect + 1;
            health = health - 1;
            eventCount = 1;
            years = 5;
        }else{
            eventCount = 1;
            years = 5;
        }
    }
});

optionButton3.addEventListener("click", function(){
    if(years == 1){
        if(eventCount == 1){
            var bottleChance = randomNumber(1,2);
            // the aforementioned 50% chance of needing the bottle
            if(bottleChance == 1){
                problem.textContent=("Your child just needed more time. Making the switch wasn't necessary, and your child actually does better breastfeeding.")
                wealth = wealth - 1
                eventCount = eventCount + 1;
                updateScreen();
            }else{
                problem.textContent=("Your child responded much better to bottle-feeding than breastfeeding.")
                health = health + 1;
                eventCount = eventCount + 1;
                updateScreen();
            }
        }
    }else if(years == 2){
        if(eventCount == 1){
            problem.textContent=("You decide not to take your child to the pediatrician, but you still worry about your child.");
            parentHealth = parentHealth - 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else{
            problem.textContent=("You decide to give your child a physical punishment. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers - 2;
            majorChoice3Modifiers = majorChoice3Modifiers - 2;
            majorChoice5Modifiers = majorChoice5Modifiers - 2;
            health = health - 1;
            intellect = intellect - 1;
            happiness = happiness - 1;
            eventCount = eventCount + 1;
            updateScreen();
        }
    }else if(years == 3){
        if(eventCount == 1){
            problem.textContent=("You decide against it. You're sure that your child will come around eventually");
            intellect = intellect - 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else{
            problem.textContent=("You decide against taking your child to the birthday party.");
            happiness = happiness - 1;
            eventCount = 1
            years = 4;
            updateScreen();
        }
    }else if(years == 4){
        if(eventCount == 1){
            problem.textContent=("You decide not to enroll your child into preschool.");
            eventCount = eventCount + 1;
            updateScreen();
        }else if(eventCount == 2){
            problem.textContent=("You don't get the promotion, because you need to spend more time with your kid.");
            happiness = happiness + 1;
            eventCount = eventCount + 1;
            updateScreen();
        }else if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide to scold your child for using their tablet.")
            intellect = intellect + 1;
            happiness = happiness + 1;
            majorChoice2Modifiers = majorChoice2Modifiers - 1;
            majorChoice3Modifiers = majorChoice3Modifiers - 1;
            majorChoice5Modifiers = majorChoice5Modifiers - 1;
            eventCount = 1;
            years = 5;
        }else{
            eventCount = 1;
            years = 5;
        }
    }
});

/*----- functions -----*/

function updateCounters () {
	if(wealth <= 0 || happiness <= 0 || health <= 0 || parentHealth <= 0 || intellect <= 0){
		problem.textContent=("You failed at raising your child. Your child made it to " + years + "years old.");
		//this will be the code to handle a premature game over 
	}else{
		document.getElementById('wealth').textContent = wealth;
        document.getElementById('happiness').textContent = happiness;
        document.getElementById('health').textContent = health;
        document.getElementById('parentWellbeing').textContent = parentWellbeing;
        document.getElementById('intellect').textContent = intellect;
		//this will update the stats ^^
	}
};
