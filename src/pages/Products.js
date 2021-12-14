import { useContext } from "react"
import Layout from "../components/Layout/Layout"
import {Heading , Text , Center} from "@chakra-ui/react"
import {useHistory} from "react-router-dom"
import { ProductContext } from "../context/ProductContext"
import { PRODUCT_TO_UPDATE } from "../context/action.types"



const Products = () =>{
    const {state , dispatch} = useContext(ProductContext)
    const history = useHistory()
    const {products , isLoading} = state
    return(
        <>
          <Layout>
              <Center>
              <Heading>Products List</Heading>
              </Center>
              <hr/>
          </Layout>
        </>
    )
    }
    export default Products