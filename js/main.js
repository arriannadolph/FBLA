/*
okay, i'm putting this here because i mostly suck at confrontation & expressing opinions, but
i think we may need to seriously consider cutting back on the scope of this project, perhaps 
cutting down to just 2-3 major choices, because we have under a week to have this completed, 
and i just don't think making *all* of those routes in that time is feasible.

if we do decide to cut back, we could decrease the amount of choices you make in your childs
life as it ages, as the child becomes more independent, eventually becoming a choice every
few years. because we have to get roughly 63 choices total (if i'm not mistaken), and in three
days i have only been able to do about 8.
*/



/*----- constants -----*/
const problem = getElementById();
const optionbutton1 = getElementById();
const optionbutton2 = getElementById();
const optionbutton3 = getElementById();
const minigameButton = getElementById();

/*----- state variables -----*/
let intellect = localStorage.getItem('intellect')?parseInt(localStorage.getItem('intellect')):30;
let wealth = localStorage.getItem('wealth')?parseInt(localSotrage.getItem('wealth')):30;
let happiness = localStorage.getItem('happiness')?parseInt(localStorage.getItem('happiness')):30;
let health = localStorage.getItem('health')?parseInt(localStorage.getItem('health')):30;
let parentWellbeing = localStorage.getItem('parentWellbeing')?parseInt(localStorage.getItem('parentWellbeing')): 30;
var years = 1;
var eventCount = 1;

var majorChoice1 = 0;
var majorChoice2 = 0;
var majorChoice3 = 0;
var majorChoice4 = 0;
var majorChoice5 = 0;
var majorChoice6 = 0;
// having the major choices be a variable with values 1-3 instead of all of that stuff i was doing with lists is *so* much easier.

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
			    updateCounters();
		    }else{
			    problem.textContent=("After a long while of waiting, you decide to switch your child over anyway.")
			    parentWellbeing = parentWellbeing - 1;
			    wealth = wealth - 1;
			    eventCount = eventCount + 1;
			    updateCounters();
		    }
	    }else if(eventCount == 2){
		    problem.textContent=("While your sleep may suffer, your child went to bed faster with you there.");
            parentWellbeing = parentWellbeing - 1;
            health = health + 1;
            eventCount = eventCount + 1;
            updateCounters();
	    }else{
            problem.textContent=("While your child is falling slightly behind, you set up your future for you and your family");
            wealth = wealth + 2;
            happiness = happiness - 2;
            eventCount = 1;
            years = 2;
            updateCounters();
        }
    }else if(years == 2){
        if(eventCount == 1){
            problem.textContent=("After taking your child to a pediatrician, you discovered that your child's slight delay to walking is completely normal, and not cause for concern.");
            if(parentWellbeing > 5){
                parentWellbeing = 5;
            }
            eventCount = eventCount + 1;
            updateCounters();
        }else{
            problem.textContent=("You decide to punish your child with a punishment that makes them think about what they did. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers + 1;
            majorChoice3Modifiers = majorChoice3Modifiers + 1;
            majorChoice5Modifiers = majorChoice5Modifiers + 1;
            eventCount = 1;
            years = 3;
            updateCounters();
        }
    }else if(years == 3){
        if(eventCount == 1){
            problem.textContent=("The pediatrician says that the speech delay is temporary, and that you should try encouraging your child to speak, and speak or read to them.");
            wealth = wealth - 1;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else if(eventCount == 2){
            problem.textContent=("You take your child to the birthday party. While you're there, your friend talks to you about their child's educational tablet, and tells you to consider buying one.");
            happiness = happiness + 1;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else{
            problem.textContent=("You buy your child the tablet, and see it do wonders")
            wealth = wealth - 1;
            intellect = intellect + 1;
            eventCount = 1;
            years = 4;
            hasTablet = true
            updateCounters();
        }
    }else if(years == 4){
        if(eventCount == 1){
            problem.textContent=("You decide to enroll your child into preschool. This allows both you and your spouse to work longer hours, and make more money.");
            wealth = wealth + 2;
            intellect = intellect + 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else if(eventCount == 2){
            problem.textContent=("You get the promotion, but as you were working towards it, you had to work even longer.");
            wealth = wealth + 1;
            happiness = happiness - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide to limit your child's use of the tablet.")
            intellect = intellect + 1;
            eventCount = 1;
            years = 5;
            updateCounters();
        }else{
            eventCount = 1;
            years = 5;
            updateCounters();
        }
    }else if(years == 5){
        if(eventCount == 1){
            problem.textContent=("You decide to buy your child a toy from the store")
            happiness = happiness + 1;
            wealth = wealth - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else{
            problem.textContent=("You confront your partner. It escalates into a full-blown argument. Your child can hear.")
            happiness = happiness - 1;
            parentWellbeing = parentWellbeing - 1;
            eventCount = 1;
            years = 6;
            updateCounters();
        }
    }else if(years == 6){
        // MAJOR CHOICE ONE
        if (eventCount == 1){
            problem.textContent=("You decide to enroll your child in private school. This does end up being expensive.");
            wealth = wealth - 4;
            intellect = intellect + 11;
            majorChoice1 = 1;
            eventCount = eventCount + 1;
            updateCounters();
        }
    }
});

optionButton2.addEventListener("click", function(){
	// there are only two options for the 3 events on year 1, so i will put the second choice into option 3 for aesthetic purposes
    if(years == 1){
        optionButton2.style.display='none';
    }else if(years == 2){
        if(eventCount == 1){
            optionButton2.style.display='none';
        }else{
            problem.textContent=("You decide not to punish your child at all. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers + 1;
            majorChoice3Modifiers = majorChoice3Modifiers + 1;
            majorChoice5Modifiers = majorChoice5Modifiers + 1;
            happiness = happiness + 1;
            intellect = intellect - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }
    }else if(years == 3){
        optionButton2.style.display='none';
    }else if(years == 4){
        if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide that it isn't a problem.")
            intellect = intellect + 1;
            health = health - 1;
            eventCount = 1;
            years = 5;
            updateCounters();
        }else{
            eventCount = 1;
            years = 5;
            updateCounters();
        }
    }else if(years == 5){
        if(eventCount == 1){
            optionButton2.style.display='none';
        }else{
            problem.textContent=("You calmly discuss the issue with your partner. Your partner still disagrees, and you are both left frustrated.")
            parentWellbeing = parentWellbeing - 1;
            eventCount = 1;
            years = 6;
            updateCounters();
        }
    }else if(years == 6){
        // MAJOR CHOICE ONE
        if(eventCount == 1){
            problem.textContent=("You decide to enroll your child in public school. This allows you to pick up more hours.");
            intellect = intellect + 8; 
            wealth = wealth + 2;
            majorChoice1 = 2;
            eventCount = eventCount + 1;
            updateCounters();
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
                updateCounters();
            }else{
                problem.textContent=("Your child responded much better to bottle-feeding than breastfeeding.")
                health = health + 1;
                eventCount = eventCount + 1;
                updateCounters();
            }
        }
    }else if(years == 2){
        if(eventCount == 1){
            problem.textContent=("You decide not to take your child to the pediatrician, but you still worry about your child.");
            parentWellbeing = parentWellbeing - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else{
            problem.textContent=("You decide to give your child a physical punishment. (This will affect the game later.)");
            majorChoice2Modifiers = majorChoice2Modifiers - 2;
            majorChoice3Modifiers = majorChoice3Modifiers - 2;
            majorChoice5Modifiers = majorChoice5Modifiers - 2;
            health = health - 1;
            intellect = intellect - 1;
            happiness = happiness - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }
    }else if(years == 3){
        if(eventCount == 1){
            problem.textContent=("You decide against it. You're sure that your child will come around eventually");
            intellect = intellect - 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else{
            problem.textContent=("You decide against taking your child to the birthday party.");
            happiness = happiness - 1;
            eventCount = 1
            years = 4;
            updateCounters();
        }
    }else if(years == 4){
        if(eventCount == 1){
            problem.textContent=("You decide not to enroll your child into preschool.");
            eventCount = eventCount + 1;
            updateCounters();
        }else if(eventCount == 2){
            problem.textContent=("You don't get the promotion, because you need to spend more time with your kid.");
            happiness = happiness + 1;
            eventCount = eventCount + 1;
            updateCounters();
        }else if(eventCount == 3 && hasTablet == true) {
            problem.textContent=("You decide to scold your child for using their tablet.")
            intellect = intellect + 1;
            happiness = happiness + 1;
            majorChoice2Modifiers = majorChoice2Modifiers - 1;
            majorChoice3Modifiers = majorChoice3Modifiers - 1;
            majorChoice5Modifiers = majorChoice5Modifiers - 1;
            eventCount = 1;
            years = 5;
            updateCounters();
        }else{
            eventCount = 1;
            years = 5;
            updateCounters();
        }
    }else if(years == 5){
        if(eventCount == 1){
            problem.textContent=("You decide not to get your child a toy.")
            happiness - 1;
            eventCount = eventCount + 1;
        }else{
            problem.textContent=("You decide to stay silent about it. Frustrations begin to build.")
            parentWellbeing = parentWellbeing - 1;
            years = 6;
            updateCounters();
        }
    }else if(years == 6){
        // MAJOR CHOICE ONE
        if(eventCount == 1){
            problem.textContent=("You decide to homeschool your child.");
            majorChoice1 = 3;
            eventCount = eventCount + 1;
            updateCounters();
        }if(majorChoice1 == 1 & eventCount >= 2){
            problem.textContent=("");
        }else if(majorChoice1 == 2 && eventCount >= 2){
            problem.textContent=("You ");
        }else if(majorChoice1 == 3 && eventCount >= 2){
            if (eventCount == 2){
                // the rest of year 6, which really just revolves around the major choice in this route
                problem.textContent=("You decide to utilize a mixed curriculum");
                intellect = intellect + 1;
                eventCount = eventCount + 1;
                updateCounters();
            }else if(eventCount == 3){
                problem.textContent=("You decide to do a parent-led teaching style.")
                intellect = intellect + 1;
                eventCount = eventCount + 1;
            }else if(eventCount == 4){
                problem.textContent=("You begin using negative reinforcement to help your child with homeschooling")
                intellect = intellect - 1;
                happiness = happiness - 1;
                eventCount = 1;
                updateCounters();
            }
        }
    }
});

/*----- functions -----*/

function updateCounters () {
	if(wealth <= 0 || happiness <= 0 || health <= 0 || parentWellbeing <= 0 || intellect <= 0){
		problem.textContent=("You failed at raising your child. Your child made it to " + years + " years old.");
		//this will be the code to handle a premature game over 
	}else{
		document.getElementById('wealth').textContent = "Wealth = " + wealth;
        document.getElementById('happiness').textContent = "Happiness = " + happiness;
        document.getElementById('health').textContent = "Health = " + health;
        document.getElementById('parentWellbeing').textContent = "Parent Wellbeing = " + parentWellbeing;
        document.getElementById('intellect').textContent = "Intellect = " + intellect;
		//this will update the stats ^^
	}
};
