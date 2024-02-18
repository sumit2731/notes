export const Component = () => {
  return (
    <div // cmd-click on me to go to the div types
      aria-posinset={1} // number | undefined
      onChange={(e) => {}} // React.FormEventHandler<HTMLDivElement> | undefined
      // How do I get autocomplete with JSX: ctrl-space
    />
  );
};
/**
 * Here main thing tolearn how Matt got the tyoe of onchange right by hit and miss.
 */