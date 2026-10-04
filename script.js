function analyzeText() {

    let text = document.getElementById("textInput").value;

    let words = text.toLowerCase()
        .replace(/[.,!?;:]/g, "")
        .split(/\s+/)
        .filter(word => word !== "");

    document.getElementById("wordCount").innerText = words.length;
    document.getElementById("charCount").innerText = text.length;

    let frequency = {};

    for (let word of words) {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    }

    let output = "";

    for (let word in frequency) {
        output += word + " : " + frequency[word] + "<br>";
    }

    document.getElementById("frequency").innerHTML =
        output || "No text entered.";
}
