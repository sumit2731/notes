/**
 * First we lifted the state up, so that siblings can share state
 * 
 * then we colocating state(moving the state down to prevent unnecsary renders). we read Ken articles about how it can improve
 * performace. there are some kentc articles about how it is better than memorization.
 * 
 * Same thing applies for context , keep the value as close to context as possible.
 * 
 * 
 */