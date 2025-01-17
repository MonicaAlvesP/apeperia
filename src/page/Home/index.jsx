import { About } from "../../components/About"
import { Banner } from "../../components/Banner"
import { Blog } from "../../components/Blog"
import { Cards } from "../../components/Cards"

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Cards />
      <Blog />
    </>
  )
}