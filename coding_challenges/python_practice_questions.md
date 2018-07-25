#1
Create a function called is_abbreviation that will take in two strings and determine if one of the strings is 
an abbreviation of the other.

word w1 is an abbreviation of word w2 if:
1. w1 and w2 are direct ordered subsets (when tokenized into characters) meaning that if we read from left to right, w2 has at least as many characters as w1 and maybe more
abcd is an abbrevation of aqqqqbqqqqqcqqqqqqdqqqqqq because abcd appears in aqqqqbqqqqqcqqqqqqdqqqqqq in order
abcd is NOT an abbreviation of aqqqqbqqqqqcqqqqqqqqqqqq because abcd does not appear in aqqqqbqqqqqcqqqqqqdqqqqqq in order
2. w1 and w2 start and end with the same letter

- function should be case in-sensitive

Note that these unit tests may not encompass all edge cases of the problem. 
Feel free to write your own to test more situations!
"""

print(is_abbreviation("HyDe Park", "hd pk") == True)
print(is_abbreviation("hd prk", "HyDe Park") == True)

print(is_abbreviation("BROOKLYN", "bklyn") == True)

print(is_abbreviation("minneapolis", "MPLS") == True)

print(is_abbreviation("ARLINGTON", "arlgtn") == True)
print(is_abbreviation("ARLINGTON", "arlgnt") == False) # doesn't both end in n
print(is_abbreviation("ARLINGTON", "arlington") == True)

print(is_abbreviation("COLORADO SPGS", "Colordo Springs") == False)  # neither is a direct subset of the other
print(is_abbreviation("COLORADO SPGS", "Colorado Springs") == True)
print(is_abbreviation("Colorado Springs", "COLORADO SPGS") == True)
print(is_abbreviation("COLORADO SPGS", "Colorado Springs") == True)
print(is_abbreviation("labcd", "abcd") == False) # should not start with a different character



#2 
# Below is a class called PhoneFinder with the method: find() that should take in a string and return a formatted phone number from the input
# Add error handling to handle non-valid phone numbers (non-valid phone numbers should return None)
# Not all types of phone numbers are accepted
# All unit tests below should pass.
# Note that these unit tests may not encompass all edge cases of the problem. Feel free to write your own to test more situations!
# DO not use any non-standard Python Librarys

class PhoneFinder():
    def __init__(self, regex_format):
        self.regex_format = regex_format  
    def find(self, st):
        return st
	
phone_regex_format = "phone_regex"

r = PhoneFinder(phone_regex_format)

print(r.find("605352-2334") == "(605) 352 - 2334")
print(r.find("+1 605352-2334") == "+1 (605) 352 - 2334")
print(r.find("+ 605351-7334") == "(605) 351 - 7334")
print(r.find("+605351-74") == None)


# 3
# Add a method to PhoneFinder to take in a csv (given by string path) and 
# outputs a list of outputs of the find method called on each element
# r.parse_csv('phones.csv') == ["(605) 352 - 2334", None ...]


# 5
# In a conversation it is often necessary to track specific pieces of information in order to generate an
# appropriate response. 
# For instance if a customer were to ask Kylie: "Can you help me setup my amazon echo show?" 
# Kylie will have to keep in mind that the customer owns the echo "show" as opposed to the echo "dot" 
# in order to respond appropriately at a later time in the conversation.

# This information may be stored in objects called 'Slots'as defined below.


class Slot(object):
    
    def __init__(self,
                 slot_name,
                 data=None):
        """
        :param: slot_name: A string identifying the category of information stored by the slot this may be the
                             'amazon_device' as in the example above
        :param: data: The data stored by the slot this for instance may be 'show' as in the above example
        """
        self.slot_name = slot_name
        self.data = data
    


# Presume we are dealing with two types of Slots: CategoricalSlots and BooleanSlots, Boolean slots may only contain
# data of type bool and CategoricalSlots may only contain data which is also found in its data_set. 
# In other words a CategoricalSlot.data may only take on a value which is given in the data_set with which 
# it is initialized.


class CategoricalSlot(Slot):
    
    def __init__(self,
                 slot_name,
                 data_set=set(),
                 data=None):
        """
        :param slot_name: A string identifying the slot
        :param data_set: A python data set with all the possible values that the Slot can take on
        """
        super(CategoricalSlot, self).__init__(slot_name,
                                        data)
        self.data_set = data_set
        

class BooleanSlot(Slot):
    pass


# For the purposes of this example, a conversation "State" may be defined by the combination of Slots
# and the data they hold. This may be expressed as a list of Slot objects. 
# A collection of conversation states may be expressed as a lookup between strings and lists of Slots as 
# shown below:


state_lookup = {
    'state_1': [CategoricalSlot('amazon_device', data_set={'spot', 'show'}, data='spot'),
               BooleanSlot('internet_connected', data=False)],
    'state_2': [CategoricalSlot('amazon_device', data_set={'spot', 'show'}, data='show')],
    'state_3': [BooleanSlot('internet_connected', data=False)]
}


# Presume we have another object that is responsible for predicting dialogue states, 
# using Slots and a state_lookup. Let's call this our StateTracker


class StateTracker(object):
    
    def __init__(self,
                 state_lookup):
        pass
    
    def find_states(self,
                    slot_list):
        """
        :param slot_list: A list of Slot objects or more specifically Boolean and CategoricalSlots
        :return: A python set of state strings (i.e. the keys of state_lookup) for which the list of Slot 
        conditions is satisified by slot_list
        """
        raise NotImplementedError


"""
Your Task: Implement find_states in StateTracker as well as the _init_ method. A slot_list will NOT match a slot configuration
if it contains a slot with same slot_name but a different slot_value as the slot configuration under consideration, 
all other slot configurations may be considered to match. Hence, an empty slot_list should match to all slot configurations and therefore
states in state_lookup. This is because the empty slot_list does not share any slots with any of the state_configurations and hence every state
defaults to a match.
# Considerations:
# 
# 1) state_lookup may contain > 1000 state configurations
# 
# 2) It is important that we keep the latency of find_states to a minimum
#
# 3) Two tests are provided to help you out but feel free to add more to demonstrate functionality and account for edge cases.
"""


state_tracker = StateTracker(state_lookup)

assert state_tracker.find_states([BooleanSlot('internet_connected', data=False)]) == {'state_1', 'state_3'}