import { it } from "vitest";

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/**
 * Using string enums solve the problem.ts uses duck type system but this is something different.
 * some might say it is good if we need to chnage someting we directly go to enum and change their
 * directly.also see below even if Method2 is exactly same enum we cannot use it in place of of
 * Method enum.
 */

const request = (url: string, method: Method) => {
  // ...
};

it("Should force you to use the enum values", () => {
  request(
    "https://example.com",
    // @ts-expect-error
    "GET"
  );

  request(
    "https://example.com",
    // @ts-expect-error
    "POST"
  );

  request("https://example.com", Method.GET);
  request("https://example.com", Method.POST);
});

it("Should give you an error if you pass a different enum with the same value", () => {
  enum Method2 {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
  }

  request(
    "https://example.com",
    // @ts-expect-error
    Method2.GET
  );
});
