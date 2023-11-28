import { ReactNode, useEffect, useState } from "react";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();
  /**
   * callback passed to useEffect cannot be async because async functions returns a promise and callback function
   * passed to useEffect should return a cleanup function.
   *
   * since we cannot use async function outside so we defined a async inner function
   */
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawDataBlogPost[];
        /**
         * Now we should also add an explicit type annotation here to make it clear that blog posts in the end
         * should be an array of blog posts.This will ensure that we'll get an error if we make a mistake during
         * this conversion here.
         */
        const blogPosts: BlogPost[] = data.map((rawPost) => ({
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        }));
        setFetchedPosts(blogPosts);
      } catch (error) {
        /**
         * So TypeScript doesn't know what type of value it will get here and therefore we either have to add some checks here
            and check if error, for example has a certain property or if the type of error, for example is string or something 
            like this.We can do all of that,but for this application here,we know that it will be an error object.Therefore we
            can also just use type casting here and tell TypeScript that this will be of type error.
         */
        //setError((error as Error).message);
        if (error instanceof Error) setError(error.message);
      }
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  /**
   * Ts was giving error if we directly try to render BlogPosts component as fetchPosts can be undefined also.
   * here inside if condition ts knows that fethcPosts is not undefined
   */
  let content: ReactNode;
  if (error) content = <ErrorMessage text={error} />;
  if (fetchedPosts) content = <BlogPosts posts={fetchedPosts} />;
  if (isFetching) content = <p id="loading-fallback">Fetching Posts</p>;
  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process"
      />
      {/* here we are getting ts error as fetchPosts can be null also */}
      {/* <BlogPosts posts={fetchedPosts}></BlogPosts> */}
      {content}
    </main>
  );
}

export default App;
