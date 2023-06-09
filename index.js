const k1 = "sk-jWirrerqeHLQ7";
const k2 = "v4SEdvmT3BlbkFJrU";
const k3 = "Oy24yDt5OIlSo0Ex1E";
const inputPergunta = document.getElementById("pergunta");
const imgLoading = document.getElementById("imgLoading");
const pResposta = document.getElementById("resposta");

async function enviarPergunta() {
  var pergunta = inputPergunta.value;
  pResposta.innerText = "";

  imgLoading.style.display = "block";

  await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + k1 + k2 + k3,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: pergunta,
      max_tokens: 2048,
      temperature: 0.5,
    }),
  })
    .then((objResposta) => objResposta.json())
    .then((resposta) => {
      imgLoading.style.display = "none";
      pResposta.innerText = resposta.choices[0].text;
    });
}
