import { TodoItem } from "@/components/TodoItem"
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getTodos } from "@/db/todos";

export default function TodosPage({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

// Rendered statically.
export const getStaticProps = (async () => {
  const todos = await getTodos();

  return {
    props: { todos },
  };
}) satisfies GetStaticProps;
