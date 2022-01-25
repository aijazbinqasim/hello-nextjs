import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "aijaz", name: "Aijaz Ali" },
    { id: "ahmed", name: "Ahmed Khan" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((c) => {
          return (
            <li key={c.id}>
              {/* <Link href={`/clients/${c.id}`}>{c.name}</Link> */}
              <Link href={{ pathname: "/clients/[id]", query: { id: c.id } }}>
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
