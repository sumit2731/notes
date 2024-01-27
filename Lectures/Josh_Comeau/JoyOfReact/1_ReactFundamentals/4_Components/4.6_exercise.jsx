//solution1

function Button({ color, borderColor, children }) {
  return (
    <button
      style={{
        border: "2px solid",
        color,
        borderColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

//solution2

function Button({ themeColor, children }) {
  return (
    <button
      style={{
        border: "2px solid",
        color: themeColor,
        borderColor: themeColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

//solution3

// status: 'cancel' | 'confirm'
function Button({ status, children }) {
  let themeColor;

  if (status === "cancel") {
    themeColor = "red";
  } else if (status === "confirm") {
    themeColor = "black";
  } else {
    throw new Error("Unrecognized value");
  }

  return (
    <button
      style={{
        border: "2px solid",
        color: themeColor,
        borderColor: themeColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}
