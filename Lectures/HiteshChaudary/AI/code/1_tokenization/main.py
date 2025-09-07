import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o")

text = "Het There! My name is Sumeet Sood"
tokens = enc.encode(text)

print("Tokens", tokens)

decoded = enc.decode([13418, 3274, 0, 3673, 1308, 382, 336, 3095, 292, 336, 1762])
print("Decoded", decoded)