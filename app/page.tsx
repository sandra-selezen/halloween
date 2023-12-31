import { About } from "@/sections/About/About"
import { Footer } from "@/components/Footer/Footer"
import { Category } from "@/sections/Category/Category"
import { Header } from "@/components/Header/Header"
import { Home } from "@/sections/Home/Home"
import { Items } from "@/sections/Items/Items"
import { Party } from "@/sections/Party/Party"
import { ScrollUpButton } from "@/components/ScrollUpButton/ScrollUpButton"

const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Category />
        <About />
        <Items />
        <Party />
        <Footer />
        <ScrollUpButton />
      </main>
    </>
  )
}

export default Page