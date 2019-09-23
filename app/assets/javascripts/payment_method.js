function whiteCard() {
  event.preventDefault();
  $(".js-purple-card").hide();
  $(".js-white-card").show();
  $(".js-purple-oxxo").show();
  $(".js-white-oxxo").hide();
  $(".js-purple-spei").show();
  $(".js-white-spei").hide();
  $(".js-card-container.js-card").css("background-color","#BE5EFC");
  $(".js-card-container.js-oxxo").css("background-color","#FFFFFF");
  $(".js-card-container.js-spei").css("background-color","#FFFFFF");
}

function whiteOxxo() {
  event.preventDefault();
  $(".js-purple-oxxo").hide();
  $(".js-white-oxxo").show();
  $(".js-purple-card").show();
  $(".js-white-card").hide();
  $(".js-purple-spei").show();
  $(".js-white-spei").hide();
  $(".js-card-container.js-oxxo").css("background-color","#BE5EFC");
  $(".js-card-container.js-card").css("background-color","#FFFFFF");
  $(".js-card-container.js-spei").css("background-color","#FFFFFF");
}

function whiteSpei() {
  event.preventDefault();
  $(".js-purple-spei").hide();
  $(".js-white-spei").show();
  $(".js-purple-oxxo").show();
  $(".js-white-oxxo").hide();
  $(".js-purple-card").show();
  $(".js-white-card").hide();
  $(".js-card-container.js-spei").css("background-color","#BE5EFC");
  $(".js-card-container.js-oxxo").css("background-color","#FFFFFF");
  $(".js-card-container.js-card").css("background-color","#FFFFFF");
}