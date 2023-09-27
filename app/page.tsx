import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Home } from "@/sections/Home/Home"

const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default Page