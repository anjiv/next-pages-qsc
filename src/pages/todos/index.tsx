import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";

export default function TodoPage({
  todos,
}: {todos: any[]}) {
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

TodoPage.getInitialProps = async() => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    response => response.json()
  )
  return {todos: data as any}
}
