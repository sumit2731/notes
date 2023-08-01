/**
 *entries parameter is the only argument that the function accepts and it just outputs the information related to each element 
 that changes its intersection status.for an element to change its intersection status it must scroll in/out of the current 
 viewport

entries have these proeprties -
    isIntersecting - true if in viewport, otherwise false
    target - actual element
    intersectionRatio - How much element is visible and how much is hidden

Intersection Observable Config Options -
    threshold - This accepts a value between 0 and 1 and represents the percentage of the element that must be visible before 
        isIntersecting becomes true. By default this is set to 0 which means as soon as any part of the element is visible it 
        will be considered intersecting.You can also pass an array to threshold which means that the Intersection Observer will 
        fire each time your element passes one of the thresholds passed to it.

        { threshold: 1 }
        { threshold: [0, 0.25, 0.5, 0.75, 1] }

    root margin -The rootMargin will be added to the container viewport so in essence we can shrink/grow our view port with this 
        value.negative and positive values are possible.

        positive values - lazy load
        negative values - animations

    root - This property must be an element that is an ancestor of the elements being observed. This root element is then used as 
        the viewport for intersection. This is really only useful when you have a scrolling container inside your page that you 
        want to check observations for since you can make the scrolling container the root element instead of the screen.


Intersection Observer Properties -
    observer.unobserve(htmlElement);
    observer.disconnect()
 */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
    })
  })
  
  observer.observe(document.getElementById("test"))
