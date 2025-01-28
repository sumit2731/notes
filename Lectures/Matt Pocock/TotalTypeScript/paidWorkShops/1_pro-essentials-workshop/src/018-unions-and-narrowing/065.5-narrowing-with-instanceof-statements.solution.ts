const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  // compare it with 'in' operator solution
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    throw error;
  }
}
