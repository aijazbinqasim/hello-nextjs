import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function clickHandler() {
    // router.push("/clients/aijaz/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "aijaz", clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>

      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default ClientProjectsPage;
