chai_type = "Ginger chai"
customer_name = "Priya"

print(f"Order for {customer_name} : {chai_type} please !")

chai_description = "Aromatic and Bold"
""" 

sequence[start:end:step]
String Slicing
    start - default 0
        negative value means start from end
    end - this is not inclusive
        negative value means start from end
    skip - default 1, which means print every character
        negative value means we will move from end to start
 """
# you can skip 0
print(f"First word: {chai_description[:8]}")
# untill end
print(f"Last word: {chai_description[12:]}")
# this revers the string
print(f"Last word: {chai_description[::-1]}")

# Encoding and Decoding when special characters are involved
label_text = "Chai Spécial"
""" 
The common encoding that we use is UTF 8.
This is a, Way to symbolize the strings in the computer format.
 """
ecoded_label = label_text.encode("utf-8")
print(f"Non Encoded label: {label_text}")
print(f"Encoded label: {ecoded_label}")
decoded_label = ecoded_label.decode("utf-8")
print(f"Decoded label: {decoded_label}")