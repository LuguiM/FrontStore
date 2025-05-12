import { Hero, Companies, Information, Categories, Shipping } from "../views/home";

export const Home = () => {
  return (
    <main className="flex flex-col gap-30">
      <Hero />
      <Companies />
      <Information />
      <Categories />
      <Shipping />
    </main>
  )
}
