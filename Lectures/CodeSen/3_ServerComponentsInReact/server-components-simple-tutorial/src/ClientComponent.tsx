"use client";

import ServerComponent from "./ServerComponent";

type ClientComponentProps = {
  children: React.ReactNode;
};

export default function ClientComponent({ children }: ClientComponentProps) {
  /**
   * if we use like this then ServerComponent will also run on browser
   */
  //return <ServerComponent/>
  /**
   * now if this jsx is passed from ServerComponent then, required jsx will run on server
   */
  return <>{children}</>;
}
