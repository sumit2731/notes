is_boiling = True
stri_count = 5
# True is 1 - upcasting
total_actions = stri_count + is_boiling
print(f"Total actions: {total_actions}")

# False is 0, None, 
# any other number is 1
milk_present = 0
print(f"Is there milk? {bool(milk_present)}")

water_hot = True
tea_added = True

# logical operators - and , or, not
can_server = water_hot and tea_added
print(f"Can serve chai? {can_server}")