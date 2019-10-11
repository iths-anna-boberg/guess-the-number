
function Game(difficulty){
    return {
        low: `You guessed too low! Try again.`,
        high: `You guessed too high! Try again.`,
        won: "You won!",
        loose: `You loose!`,
        notNumber: "You need to write a NUMBER.",
        number: Math.floor(Math.random()*difficulty+1),
        difficulty,
        counterE: 0,
        counterM: 10,
        counterH: 5,
        counterO: 0,
        yourGuess: "",
        inputField : document.querySelector(".guess-input"),
        btn: document.querySelector(".guess-btn"),
        counterText: document.querySelector(".countdown-text"),
        result: false,

        updateMessages(guess, number){
            this.yourGuess = guess;
            this.number = number;
            this.low = `You guessed ${this.yourGuess}, which is too low! Try again.`;
            this.high = `You guessed ${this.yourGuess}, too high! Try again.`;
            this.loose = `The right answer was ${this.number}, so you loose!`;
        },
        
        
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
        
        makeGuess(guess){
            let instruction=document.querySelector(".instructions");
            this.updateMessages(guess, this.number)
            if (guess < this.number){
                instruction.innerText = this.low
            }else if(guess > this.number){
                instruction.innerText = this.high
            }
            else if(guess==this.number){
                this.result = true;
                this.endScreen();
            }else{
                instruction.innerText = this.notNumber
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

        guessOwn(counterO){
            this.counterO--
            this.counterText.innerText = `You have ${this.counterO} guesses remaining`
            let guess=document.querySelector(".guess-input").value;
            if(this.counterO>0){
                game.makeGuess(guess)
            }else{
                this.result=false;
                this.endScreen(this.result)
            }
            
        },

        initOwn(counterO, difficulty){
            let instructions = document.querySelector(".instructions")
            this.difficulty = difficulty
            instructions.innerHTML = `Guess a number between 0 and ${this.difficulty}`
            this.counterO = counterO
            this.counterText.innerText = ""
            this.counterText.innerText = `You have ${this.counterO} guesses remaining`
            this.btn.addEventListener("click", () => this.guessOwn() );
            this.inputField.addEventListener("keyup", event=>{
                if(event.code==="Enter"){
                    this.guessOwn();
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
    let btnOwn = document.querySelector(".own-btn")
    btnEasy.addEventListener("click", function(event){
        let game = new Game(100);
        game.hideLevels();
        game.initEasy();
    })
    btnMedium.addEventListener("click", function(event){
        let game = new Game(100);
        game.hideLevels();
        game.initMedium();
    })
    btnHard.addEventListener("click", function(event){
        let game = new Game(100);
        game.hideLevels()
        game.initHard();
    })
    btnOwn.addEventListener("click", function (event){
        let counterO = document.querySelector(".counter-o").value
        let difficulty = document.querySelector(".max-number").value
        let game = new Game(difficulty);
        game.hideLevels();
        game.initOwn(counterO, difficulty);
        
    })
    
    
    
}

chooseLevel();






