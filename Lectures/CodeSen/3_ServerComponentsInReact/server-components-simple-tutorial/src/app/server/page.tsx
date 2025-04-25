import ClientComponent from "@/ClientComponent";
import { expensiveFunction } from "@/expensiveFunction";
import ServerComponent from "@/ServerComponent";
import ServerPage2 from "@/ServerComponent2";
import { Suspense, use } from "react";

export default async function ServerPage() {
  expensiveFunction();
  const data = "data";

  try {
    // const data = await fetch("/api/data").then((res) => res.json());
    // const data: Promise<String> = await new Promise((resolve, reject) =>
    //   setTimeout(() => resolve("Sumeet Sood"), 15)
    // );
    // console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  console.log("Returning");
  return (
    <main>
      <h1>Rendered on Server</h1>
      <h1>{data}</h1>
      {/* Client Component is rendering another server component by importing it */}
      {/* <ClientComponent /> */}
      {/* 
      client component is only rendering the jsx passed to it
      */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <Suspense fallback={<p>Loading...</p>}>
        <ServerPage2 />
      </Suspense>
      {/* <ServerPage2 /> */}
    </main>
  );
}
