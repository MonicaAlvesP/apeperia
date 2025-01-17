import { About } from "../../components/About"
import { Banner } from "../../components/Banner"
import { Blog } from "../../components/Blog"
import { Cards } from "../../components/Cards"
import { Form } from "../../components/Form"

export const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Cards />
      <Blog />
      <Form />
    </>
  )
}