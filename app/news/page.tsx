import Header from "@/components/Header";





const News = () => {
  
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="absolute top-5 left-0 w-full flex items-center justify-center text-lg text-neutral-900">Новости</div>
      </Header>
      <div className="mx-[300px] h-screen flex items-center justify-center text-center">News Content</div>
    </main>
  );
}

export default News;