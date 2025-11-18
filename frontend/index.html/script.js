async function translateText() {
    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    const response = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, source, target })
    });

    const data = await response.json();
    document.getElementById("outputText").value = data.translated;
}

function copyText() {
    let text = document.getElementById("outputText");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied!");
}

function speak() {
    let text = document.getElementById("outputText").value;
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
