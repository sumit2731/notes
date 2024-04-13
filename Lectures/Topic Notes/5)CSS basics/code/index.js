const highlighter = (timeout = 4000) => {
  const $ul = document.querySelector("ul");
  let $style = false;

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomHighlighter = ($s, c) => {
    const nth1 = [1, 4, 7, 10, 13];
    const nth2 = [2, 5, 8, 11, 14];
    const nth3 = [3, 6, 9, 12, 15];
    let c1 = getRandomNumber(1, 5);
    let c2 = getRandomNumber(1, 5);
    let c3 = getRandomNumber(1, 5);

    console.log(c1);
    console.log(c2);
    console.log(c3);

    if (c && nth1.indexOf(c) !== -1) {
      c1 = nth1.indexOf(c) + 1;
    }

    if (c && nth2.indexOf(c) !== -1) {
      c2 = nth2.indexOf(c) + 1;
    }

    if (c && nth3.indexOf(c) !== -1) {
      c3 = nth3.indexOf(c) + 1;
    }

    $s.setAttribute("data-col1", c1);
    $s.setAttribute("data-col2", c2);
    $s.setAttribute("data-col3", c3);

    if (!$style) {
      $style = document.createElement("style");
      document.body.append($style);
    }
    console.log(c1);
    console.log(c2);
    console.log(c3);

    $style.innerHTML = `
        [data-col1="${c1}"][data-col2="${c2}"] li:nth-child(${
      nth1[c1 - 1]
    }):before {
          content: "";
          position: absolute;
          left: 100%;
          ${c2 - c1 < 0 ? "bottom: 50%;" : "top: 50%;"}
          ${
            c2 - c1 < 0
              ? "border-bottom: var(--line-width) solid var(--color-gamma);"
              : "border-top: var(--line-width) solid var(--color-gamma);"
          }
          border-right: var(--line-width) solid var(--color-gamma);
          min-block-size: calc(
            (
                (100% * ${Math.abs(c2 - c1)}) 
                + 
                (var(--space-alpha) * ${Math.abs(c2 - c1)}) 
                - 
                var(--line-width)) / 2
            );
          min-inline-size: calc((var(--space-alpha) / 2) - calc(var(--line-width) / 2));
          translate: 0 calc(var(--line-width) / -2);
        }
  
        [data-col1="${c1}"][data-col2="${c2}"] li:nth-child(${
      nth1[c1 - 1]
    }):after {
          content: "";
          position: absolute;
          left: 100%;
          ${c2 - c1 < 0 ? "bottom: 50%;" : "top: 50%;"}
          ${
            c2 - c1 < 0
              ? "border-top: var(--line-width) solid var(--color-gamma);"
              : "border-bottom: var(--line-width) solid var(--color-gamma);"
          }
          border-left: var(--line-width) solid var(--color-gamma);
          min-block-size: calc((
            (100% * ${Math.abs(c2 - c1)}) 
            + 
            (var(--space-alpha) * ${Math.abs(c2 - c1)}) 
            - 
            var(--line-width)) / 2);
          min-inline-size: calc((var(--space-alpha) / 2) - calc(var(--line-width) / 2));
          translate: calc(100% - var(--line-width)) calc(${
            c2 - c1 <= 0
              ? "-100% + calc(var(--line-width) / 2)"
              : "100% - calc(var(--line-width) / 2)"
          });
        }
  
        [data-col2="${c2}"][data-col3="${c3}"] li:nth-child(${
      nth2[c2 - 1]
    }):before {
          content: "";
          position: absolute;
          left: 100%;
          ${c3 - c2 < 0 ? "bottom: 50%;" : "top: 50%;"}
          ${
            c3 - c2 < 0
              ? "border-bottom: var(--line-width) solid var(--color-gamma);"
              : "border-top: var(--line-width) solid var(--color-gamma);"
          }
          border-right: var(--line-width) solid var(--color-gamma);
          min-block-size: calc(((100% * ${Math.abs(
            c3 - c2
          )}) + (var(--space-alpha) * ${Math.abs(
      c3 - c2
    )}) - var(--line-width)) / 2);
          min-inline-size: calc((var(--space-alpha) / 2) - calc(var(--line-width) / 2));
          translate: 0 calc(var(--line-width) / -2);
        }
  
        [data-col2="${c2}"][data-col3="${c3}"] li:nth-child(${
      nth2[c2 - 1]
    }):after {
          content: "";
          position: absolute;
          left: 100%;
          ${c3 - c2 < 0 ? "bottom: 50%;" : "top: 50%;"}
          ${
            c3 - c2 < 0
              ? "border-top: var(--line-width) solid var(--color-gamma);"
              : "border-bottom: var(--line-width) solid var(--color-gamma);"
          }
          border-left: var(--line-width) solid var(--color-gamma);
          min-block-size: calc(((100% * ${Math.abs(
            c3 - c2
          )}) + (var(--space-alpha) * ${Math.abs(
      c3 - c2
    )}) - var(--line-width)) / 2);
          min-inline-size: calc((var(--space-alpha) / 2) - calc(var(--line-width) / 2));
          translate: calc(100% - var(--line-width)) calc(${
            c3 - c2 <= 0
              ? "-100% + calc(var(--line-width) / 2)"
              : "100% - calc(var(--line-width) / 2)"
          });
        }
      `;
  };

  if ($ul) {
    const $lis = $ul.querySelectorAll("li");

    let hover = false;

    randomHighlighter($ul);

    // const si = setInterval(() => {
    //   if (!hover) {
    //     randomHighlighter($ul);
    //   }
    // }, timeout);

    // $lis.forEach(($li, i) => {
    //   $li.addEventListener("mouseenter", () => {
    //     randomHighlighter($ul, i + 1);

    //     hover = true;
    //   });

    //   $li.addEventListener("click", () => {
    //     randomHighlighter($ul, i + 1);

    //     hover = true;
    //   });
    // });

    // $ul.addEventListener("mouseleave", () => {
    //   hover = false;
    // });
  }
};

highlighter();
