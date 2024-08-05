import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";

export default function TodoPage({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// This will run every single time we go to todos page.
export const getStaticProps = (async() => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    response => response.json()
  )
  return {
    props: { todos: data as any[] },
    revalidate: 10, // revalidate after every 10seconds.
  };
}) satisfies GetStaticProps;
// whatever is returned in this function is satisfied.
