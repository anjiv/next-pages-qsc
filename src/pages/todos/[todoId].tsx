import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function TodoIdPage({
  todo
}: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <h1>Todo {todo.id} - {todo.title}</h1>;
}

export const getServerSideProps = (async({params}) => {
  const todoId = params?.todoId;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(
    response => response.json()
  )

  if(data.id == null) {
    // Return not found page.
    // return { notFound: true}

    // Redirect to homepage is the id is null.
    return {redirect: {destination: "/", permanent: false}}
  }

  return {
    // Return props
    props: { todo: data },
  };
}) satisfies GetServerSideProps;
