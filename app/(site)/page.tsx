import Header from "../../components/Header";


export default function Home() {
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="absolute top-5 left-0 w-full flex items-center justify-center text-lg text-neutral-900">Главная</div>
      </Header>
      <div className="">Main Content</div>
    </main>
  );
}
