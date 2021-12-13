const parseTranscripts = (messages) => {
  var parsedTranscript = [];
  for (let i = 0; i < messages.length; ++i) {
    parsedTranscript.push(messages[i].origin + ": " + messages[i].message);
  }
  return parsedTranscript;
};
