import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export default function TodoIdPage({
  todo,
  todoId
}: InferGetStaticPropsType<typeof getStaticProps>
) {
  // const router = useRouter();
  // if(router.isFallback) {
  //   return <h1>Loading...</h1>
  // }
  return <h1>Todo {todoId} - {todo.title}</h1>;
}

export const getStaticPaths = (async() => {
  // Fallback false is 404 page.
  // Fallback blocking will try to generate the page using getStaticProps.
  // Fallback true will render the router fallback code commented above.
  return {paths: [{params: {todoId: "1"}}], fallback: false}
}) satisfies GetStaticPaths;

export const getStaticProps = (async({params}) => {
  const todoId = params?.todoId;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(
    response => response.json()
  )
  return {
    props: { todo: data, todoId },
  };
}) satisfies GetStaticProps;
