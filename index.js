function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

const string3 = "hellp";
function logShout(string3) {
  console.log(string3.toUpperCase());
}

const string1 = "HELP";
function logWhisper(string1) {
  console.log(string1.toLowerCase());
}
const string = "";
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
    debugger;
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
    debugger;
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
    debugger;
  }
}
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
