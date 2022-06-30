/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    )
      .then((res) => res.data),
  );
  // console.log(data)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>


      {data.map((e, i) => (
        <div key={i}>
          <span>Name: - {e.name}</span>
          <span>City: - {e.city}</span>
          {/* <span>{e.lname}</span> */}
        </div>
      ))}
      {/* <h1>{data.info.id}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

