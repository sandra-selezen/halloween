import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Category } from "@/sections/Category/Category"
import { Home } from "@/sections/Home/Home"

const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Category />
      </main>
    </>
  )
}

export default Page