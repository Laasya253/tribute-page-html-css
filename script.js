function showQuote() {
    const quotes = [
        "If I fail, I try again and again.",
        "No arms, no legs, no worries!",
        "It’s a lie to think you’re not good enough.",
        "Challenges are opportunities to grow."
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
