import { Hero, Companies, Information } from "../views/home";

export const Home = () => {
  return (
    <main className="flex flex-col gap-30">
      <Hero />
      <Companies />
      <Information />
    </main>
  )
}
