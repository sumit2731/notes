import sys
# now you will be able to deal up with a whole lot of fractions, to the power of six and seven
from fractions import Fraction
from decimal import Decimal

ideal_temp = 95.5
current_temp = 95.49

print(f"Ideal temp { ideal_temp }")
print(f"Current temp { current_temp }")
# 95.5 - 95.4999999, result
# This is not exactly zero because sometimes the precision are there and the way how Python calculate the precision is bit different.
# So when you want to deal with higher numbers there are packages,

print(f"Difference temp { ideal_temp - current_temp }")
# This actually varies on system to system that how much calculation you can do.
print(sys.float_info)