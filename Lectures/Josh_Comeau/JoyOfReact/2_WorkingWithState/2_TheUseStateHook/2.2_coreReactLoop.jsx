/**
 *Reconciliation - When state changes, component re-renders.Each render is like taking a snapshot.
 We generate a description that shows what the UI should look like, based on the component's 
 props/state.

 React now has to figure out how to update the DOM, so that it matches this latest snapshot.

 React essentially has to play this sort of game, hunting for changes between the two snapshots.

This process is known as reconciliation. Using fancy optimized algorithms, React figures out what's
changed. It sees that the button's text content has changed from "Value: 0" to "Value: 1".

Once React has solved the puzzle and worked out what's different, it will need to commit these 
changes. With surgical precision, it updates the DOM, taking care to only tweak the things that
need to be tweaked.
 */
