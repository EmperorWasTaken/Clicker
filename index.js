let gem = document.querySelector('.gem-cost');
let parsedGem = parseFloat(gem.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

let clickerLevel = document.querySelector('.clicker-level');
let parsedClickerLevel = parseFloat(clickerLevel.innerHTML);


function incrementGem() {
    parsedGem++;
    gem.innerHTML = parsedGem;
}

function buyClickerLevel() {
    if (parsedGem >= parsedClickerCost) {
        parsedGem -= parsedClickerCost;
        gem.innerHTML = parsedGem;

        parsedClickerCost += 2;
        clickerCost.innerHTML = parsedClickerCost;

        parsedClickerLevel++;
        clickerLevel.innerHTML = parsedClickerLevel;
    }
}

/* function autoClick() {
    incrementGem();
    if (parsedGem >= parsedClickerCost) {
        buyClickerLevel();
    }
    setInterval(incrementGem, 1000);
    let intervalId;
    intervalId = setInterval(incrementGem, 1000);
    function stopAutoClick() {
        clearInterval(intervalId);
    }
    try {
        // code that may throw an error
    } catch (error) {
        // handle the error
    }
} */