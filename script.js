document.addEventListener('DOMContentLoaded', function () {


    const computerScoresElement = document.querySelector('.currentComputerScores');
    const userScoresElement = document.querySelector('.currentUserScores');
    const displayScores = document.querySelector('.displayScores');
    const tieMatch = document.getElementById('tieMatch');
    const userWinImage = document.getElementById('userWinImage');
    const computerWinImage = document.getElementById('computerWinImage');
    const content = document.getElementById('content');
    const btnId = document.getElementById('btn-id');
    const closeButton = document.querySelector('.close-button');
    const finalPage = document.getElementById('finalPage');
    const nextBtn = document.getElementById('nextBtn');
    const startMatch = document.getElementById('startMatch');
    const winTitle = document.getElementById('winTitle')
    const lostTitle = document.getElementById('lostTitke');
    const gameArena = document.getElementById('gameArena');

    startMatch.addEventListener('click' , function(){
        finalPage.style.display = 'none';
        displayScores.style.display = 'block';
        gameArena.style.display = 'block';
        lostTitle.style.display = 'none';

    })

    nextBtn.addEventListener('click' , function(){
    console.log('play again button is executed')
    displayScores.style.display = 'none';
    tieMatch.style.display = 'none';
    userWinImage.style.display = 'none';
    finalPage.style.display = 'block';
    nextBtn.style.display = 'none';
    })

    // Check if the flag is set to display the content
    const shouldDisplayContent = sessionStorage.getItem('shouldDisplayContent') === 'true';

    // Display or hide the content based on the flag
    content.style.display = shouldDisplayContent ? 'block' : 'none';

    // Function to toggle the visibility of the content
    function toggleContent() {
        content.style.display = 'block';
        // Set sessionStorage to remember the user's preference
        sessionStorage.setItem('shouldDisplayContent', 'true');
    }

    // Function to close the content
    function closeContent() {
        content.style.display = 'none';
        // Set sessionStorage to remember the user's preference
        sessionStorage.setItem('shouldDisplayContent', 'false');
    }

    

    // Add click event listeners
    btnId.addEventListener('click', toggleContent);
    closeButton.addEventListener('click', closeContent);
   

    // Initialize scores from local storage or set them to 0 if not available
    let userScore = parseInt(localStorage.getItem('userScore')) || 0;
    let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

    // Display initial scores
    userScoresElement.textContent = userScore;
    computerScoresElement.textContent = computerScore;

    document.getElementById('rockImage').addEventListener('click', function () {
        playRound('rock');
    });

    document.getElementById('scissorImage').addEventListener('click', function () {
        playRound('scissor');
    });

    document.getElementById('paperImage').addEventListener('click', function () {
        playRound('paper');
    });

    function playRound(userChoice) {
        const computerChoices = ['rock', 'paper', 'scissor'];
        const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
        console.log('Computer selected: ' + computerChoice);
        updateScores(userChoice, computerChoice);
        userScoresElement.textContent = userScore;
        computerScoresElement.textContent = computerScore;  
    }

    function updateScores(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log('It\'s a tie!');
            tieMatch.style.display = 'block';
            gameArena.style.display = 'none';
        } 
        else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {

            console.log('You win!');
            winTitle.style.display = 'block';
            tieMatch.style.display = 'none';
            nextBtn.style.display = 'block';
            gameArena.style.display = 'none'
            userWinImage.style.display = 'block';
            userScore++;
            localStorage.setItem('userScore', userScore);
        } else {
            lostTitle.style.display = 'block';
            tieMatch.style.display = 'none';
            gameArena.style.display = 'none';
            nextBtn.style.display = 'block';
            computerWinImage.style.display = 'block';
            console.log('Computer wins!');
            computerScore++;
            localStorage.setItem('computerScore', computerScore);
        }
    }
    const tieMatchBtn = document.getElementById('tieMatchBtn');
        tieMatchBtn.addEventListener('click' , function(){
        console.log('play again button is executed')
        gameArena.style.display = 'block';
    })
    
    
    const playAgainUserWin = document.getElementById('playAgainUserWin');
    playAgainUserWin.addEventListener('click' , function() {
        console.log('play me again ')
        gameArena.style.display = 'block';
        console.log('played');
        // lostTitle.style.display = 'none';
        winTitle.style.display = 'none';
        playAgainUserWin.style.display = 'none';
    } )

    const playAgainComputerWin = document.getElementById('playAgainComputerWin');
    playAgainComputerWin.addEventListener('click' , function() {
        gameArena.style.display = 'block';
        winTitle.style.display = 'none';
        playAgainComputerWin.style.display = 'none';
    })

    
})

