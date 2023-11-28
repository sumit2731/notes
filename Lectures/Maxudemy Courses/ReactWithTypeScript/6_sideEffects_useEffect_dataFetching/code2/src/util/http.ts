export async function get(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed To fetch Data");
  /**
   * It will eventually yield any kind of value,because of course, TypeScript has no chance of knowing which data will eventually be returned by a backend.
   *Therefore, I'll await this year and get back  data,but that's now of type any.
   *Now, we could now use a third party library like Zod to validate that data and get automatic type inference

    I'll instead add as unknown to make it clear that this data, which I get back here,is unknown to me.And unknown is better than any because with any,
    you can access any property without an error.With unknown, you will instead get an error if you try to access a property TypeScript doesn't know about.
    So you get more type safety when using unknown,because it will force you to then, at some point,explicitly set your own types.
   */
  const data = (await response.json()) as unknown;
  return data;
}
