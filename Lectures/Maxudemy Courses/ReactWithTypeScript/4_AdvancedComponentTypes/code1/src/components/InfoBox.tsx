import { ReactNode } from "react";
/**
 * way1 - Keep severity prop as optional
 * Drawback - we can forget to pass severity prop, when mode is warning
 */
/* type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
}; */

/**
 * @Way2 - Use Descrinated union
 * 
 * discriminated union feature,where you build different objects with an identification property,
    the mode property in this case, and you then require different other properties depending on that
    mode property, that's a really useful feature and pattern which allows you to build way more 
    flexible components and, in general, in TypeScript, allows you to write more flexible code.
 *
 * Advantages -
 *  a)TS will not complaint for severity type when it sees that mode is 'hint'. TS will complain about
 *      severity when mode is warning
 *  b)IN this component also we will know in some specififc code places that severity will be present.
 *      see component code below
 */

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

/**
 * Now we cannot destructure severity because it is not always present
 */
const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;
  if (mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  /**
   * Here is typescript is smart enough to know that we will reach at this point only if
   * mode is 'warning' and that means severity props will be present
   */
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
