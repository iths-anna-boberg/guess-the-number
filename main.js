
function Game(difficulty){
    return {
        low: "You guessed too low! Try again.",
        high: "You guessed too high! Try again.",
        won: "You won!",
        loose: "You didn't make it!",
        number: Math.floor(Math.random()*difficulty+1),
        difficulty,
        counterE: 0,
        counterM: 10,
        counterH: 5,
        inputField : document.querySelector(".guess-input"),
        btn: document.querySelector(".guess-btn"),
        counterText: document.querySelector(".countdown-text"),
        result: false,
        
        
        endScreen(result) {
            let playagain=document.querySelector(".play-again")
            playagain.style.display = "flex";
            let message = playagain.querySelector(".outcome-message")
            let playBtn = document.querySelector(".play")
            if(this.result==true){
                playagain.style.backgroundColor="green"
                message.innerText = this.won
            }else{
                playagain.style.backgroundColor="red"
                message.innerText = this.loose  
            }
            playBtn.addEventListener("click", ()=>{
                location.reload();
            })

            
        },
        //let guess="100"
//Number(guess)
//100
//guess="grillkorv"
//Number(guess)
//NaN
        
        makeGuess(guess){
            let instruction=document.querySelector(".instructions");
            if (!number)
            //Här lägger vi in at kolla om det är en siffra. se ovan.
            else if(guess < this.number){
                instruction.innerText = this.low
            }else if(guess > this.number){
                instruction.innerText = this.high
            }
            else{
                this.result = true;
                this.endScreen();
            }
            
        },

        guessEasy(){
            this.counterE++
                let count=document.querySelector(".counter");
                count.innerText = this.counterE;
                let guess=document.querySelector(".guess-input").value;
                game.makeGuess(guess)
        },
        
        
        initEasy(){
            this.btn.addEventListener("click", () => this.guessEasy() );
            this.inputField.addEventListener("keyup", event=>{
                if(event.code==="Enter"){
                    this.guessEasy();
                }
            })
        },

        guessMedium(){
            this.counterM--
            this.counterText.innerText = `You have ${this.counterM} guesses remaining`
            let guess=document.querySelector(".guess-input").value;
            if(this.counterM>0){
                game.makeGuess(guess)
            }else{
                this.result=false;
                this.endScreen(this.result)
            }
                
        },
        
        initMedium(){
            this.counterText.innerText = ""
            this.counterText.innerText = `You have ${this.counterM} guesses remaining`
            this.btn.addEventListener("click", () => this.guessMedium() );
            this.inputField.addEventListener("keyup", event=>{
                if(event.code==="Enter"){
                    this.guessMedium();
                }
            })
        },

        guessHard(){
            this.counterH--
            this.counterText.innerText = `You have ${this.counterH} guesses remaining`
            let guess=document.querySelector(".guess-input").value;
            if(this.counterH>0){
                game.makeGuess(guess)
            }else{
                this.result=false;
                this.endScreen(this.result)
            }
            
        },
        
        initHard(){
            this.counterText.innerText = ""
            this.counterText.innerText = `You have ${this.counterH} guesses remaining`
            this.btn.addEventListener("click", () => this.guessHard() );
            this.inputField.addEventListener("keyup", event=>{
                if(event.code==="Enter"){
                    this.guessHard();
                }
            })
        },
        
        hideLevels(){
            let levels = document.querySelector(".choose-level")
            let showGame = document.querySelector(".game")
            levels.style.display = "none"
            showGame.style.display = "flex"

        },
        
    }
}




function chooseLevel(){
    let btnEasy = document.querySelector(".easy-btn")
    let btnMedium = document.querySelector(".medium-btn")
    let btnHard = document.querySelector(".hard-btn")
    btnEasy.addEventListener("click", function(event){
        game.hideLevels()
        game.initEasy();
    })
    btnMedium.addEventListener("click", function(event){
        game.hideLevels()
        game.initMedium();
    })
    btnHard.addEventListener("click", function(event){
        game.hideLevels()
        game.initHard();
    })
    
    
    
}

let game = new Game(100)

chooseLevel();



