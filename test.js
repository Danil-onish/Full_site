function checkForSpam(message) {
  message = message.toLowerCase();
  return message.includes("spam") || message.includes("sale");
}

console.log(checkForSpam("SAles"));
