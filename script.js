// document.getElementById("hat").addEventListener("mouseover", function() {
//   document.getElementById("rabbit").style.visibility = "visible";
// });

// document.getElementById("hat").addEventListener("mouseout", function() {
//   document.getElementById("rabbit").style.visibility = "hidden";
// });

// document.getElementById("hat").addEventListener("click", function() {
//   window.open("https://www.example.com");
// });

const links = [
  { url: "https://stablediffusionweb.com/"},
  { url: "https://www.syllaby.io/"},
  { url: "https://www.d-id.com/"},
  { url: "https://donotpay.com/"},
  { url: "https://soundful.com/"},
  { url: "https://mightygpt.com/"},
  { url: "https://www.jasper.ai/"},
  { url: "https://www.synthesia.io/"},
  { url: "https://openai.com/dall-e-2/"},
  { url: "https://www.repurpose.ai/"},
  { url: "https://jenni.ai/"},
  { url: "https://timelyapp.com/"},
  { url: "https://beta.tome.app/"},
  { url: "https://murf.ai/"},
  { url: "https://www.chatbot.com/integrations/livechat/"},
  { url: "https://www.copy.ai/"},
  { url: "https://soundraw.io/"},
  { url: "https://www.shopify.com/tools/logo-maker"},
  { url: "https://boomy.com/"},
  { url: "https://www.fotor.com/"},
  { url: "https://www.deepl.com/translator"},
  { url: "https://www.amygb.ai/"}
];

const linkImg = document.getElementById("magic-hat");
linkImg.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * links.length);
  const link = links[randomIndex].url;
  window.open(link, "_blank");
});

function setNewImage(){
  document.getElementById("magic-hat").src = "images/rabbit.png";
}

function setOldImage(){
  document.getElementById("magic-hat").src = "images/magic-hat.png";
}