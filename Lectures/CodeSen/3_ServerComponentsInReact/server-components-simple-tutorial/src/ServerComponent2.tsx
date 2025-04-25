export default async function ServerPage2() {
  const data: Promise<String> = await new Promise((resolve, reject) =>
    setTimeout(() => resolve("Jasvir Sood"), 15_000)
  );
  return <h1>{data}</h1>;
}
