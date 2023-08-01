
/**
 * properties on entry -
 *  contentRect - width, height, top, left, bottom, right, etc. of our element
 *  target - actual element
 *  entry.borderBoxSize[0].blockSize
 * 
 * Config Options -
 *  box: border-box,conteent-box,device-pixel,content-box
 */

const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const isSmall = entry.contentRect.width < 150
      entry.target.style.backgroundColor = isSmall ? "blue" : "orange"
    })
  })
  