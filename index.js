

function shout(string) {
    return string.toUpperCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string == "Let's have dinner together!")
    return "I would love to!";

    else if (string[0] == whisper(string[0]))
        return "I can't hear you!";
    else if (string[0] == shout(string[0]))
        return "YES INDEED!";

  }