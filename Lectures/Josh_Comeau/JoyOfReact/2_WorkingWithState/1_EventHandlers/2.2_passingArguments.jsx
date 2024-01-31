/**
 *  ✅ Valid:
    <button onClick={() => setTheme('dark')}>
    Toggle theme
    </button>
 */

/**
 * announmous functions are not bad for performnace
 *
 * React has a built-in event delegation system that implements a bunch of optimizations for us.
 */

/**
 * Solution using bind
 */

// ✅ Valid:
<button onClick={setTheme.bind(null, "dark")}>Toggle theme</button>;

/**
 * First argument to callback is - SyntheticBaseEvent object
 *   altkey: false
 *   bubbles: true
 *   button: 0
 *   buttons:0
 */
