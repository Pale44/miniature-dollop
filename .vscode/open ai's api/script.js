const openai = require('openai');

openai.promise.promisifyAll(openai);

const apiKey = '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';
openai.default.setApiKey(apiKey);

const modelEngine = 'text-davinci-002';
const prompt = 'comment je gagne de l\'argent sur gta?';

const options = {
  maxTokens: 1024,
  n: 1,
  stop: null,
  temperature: 0.5
};

openai.default.completions(modelEngine, options)
  .then(function(completions) {
    const message = completions.choices[0].text;
    console.log(message);
  })
  .catch(function(error) {
    console.error(error);
  });
