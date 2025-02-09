function startGame(title, imgSrc) {
    document.getElementById("gameSelection").classList.add("hidden");
    document.getElementById("gamePlay").classList.remove("hidden");
    
    document.getElementById("gameTitle").innerText = title;
    document.getElementById("gameImage").src = imgSrc;
}

function setInput(value) {
    let inputs = document.querySelectorAll(".input-section input");
    for (let input of inputs) {
        if (input.value === "") {
            input.value = value;
            break;
        }
    }
}

function predictResult() {
    let inputs = [];
    document.querySelectorAll(".input-section input").forEach(input => {
        if (input.value) inputs.push(input.value);
    });

    if (inputs.length < 4) {
        alert("Please enter all 4 previous results!");
        return;
    }

    let pattern = inputs.join(""); // Convert to pattern string
    let predicted;

    if (pattern === "SmallSmallBigBig" || pattern === "BigBigSmallSmall") {
        predicted = "Big"; // Repeating Alternation Pattern
    } else if (pattern === "BigSmallBigSmall" || pattern === "SmallBigSmallBig") {
        predicted = "Small"; // Zig-Zag Pattern
    } else {
        let smallCount = inputs.filter(i => i === "Small").length;
        let bigCount = inputs.filter(i => i === "Big").length;
        predicted = (smallCount > bigCount) ? "Small" : "Big"; // Majority Rule
    }

    document.getElementById("predictedResult").innerText = "Next Prediction: " + predicted;
}

function goBack() {
    document.getElementById("gamePlay").classList.add("hidden");
    document.getElementById("gameSelection").classList.remove("hidden");
}
