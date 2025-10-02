import AdvocateList from "@/app/components/advocate-list.tsx";

export default async function Home() {

  const advocatesResponse = await fetch("http://localhost:3000/api/advocates");

  if(!advocatesResponse.ok) {
    throw new Error("Error loading advocates.");
  }

  const advocates = (await advocatesResponse.json()).data;

  return (
      <main style={{margin: "24px"}}>
        <h1>Solace Advocates</h1>
        <br/>
        <br/>
        <AdvocateList initialAdvocates={advocates} />
      </main>
  );
}
