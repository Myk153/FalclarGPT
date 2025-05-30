// OpenAI API anahtarını buraya ekleyin
const apiKey = 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; // Buraya kendi OpenAI API anahtarınızı ekleyin

// Kullanıcı mesajını al ve OpenAI'ye gönder
async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  // Kullanıcının mesajını ekrana yazdır
  chatBox.innerHTML += `<div><strong>Sen:</strong> ${userInput}</div>`;
  document.getElementById("user-input").value = ''; // Mesaj kutusunu temizle

  // API'ye mesaj gönder
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userInput,
      max_tokens: 150,
      temperature: 0.7
    })
  });

  // API yanıtını al ve ekranda göster
  const data = await response.json();
  const reply = data.choices[0].text.trim();
  chatBox.innerHTML += `<div><strong>EkipGPT:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight; // Yeni cevaba kaydır
}
