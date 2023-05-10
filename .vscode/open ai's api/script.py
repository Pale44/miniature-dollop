import openai

openai.api_key = "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"

model_engine = "text-davinci-002"

prompt = "tell me ajoke concerning this state of the world."

completions = openai.Completion.create(
engine=model_engine,
prompt=prompt,
max_tokens=1024,
n=1,
stop=None,
temperature=0.5,
)

message = completions.choices[0].text
print(message)
