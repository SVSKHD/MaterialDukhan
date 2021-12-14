import {useState , useContext} from "react"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Seo from "../../components/Seo";
import Layout from "../../components/Layout/Layout";
import {UserContext} from "../../context/userContext"
import firebase from "firebase/app";

const Signup = () => {
  const context = useContext(UserContext)
  const [email , setEmail] = useState("")
  const [password , setpassword] = useState("")

  const handleSignup = () =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email , password)
    .then(res=>{
      context.setUser({email: res.user.email, uid: res.user.uid}) 
    }).catch(error=>{

    })
  }
  return (
    <>
      <Layout>
        <Seo
          title="Material Dukan | Signup"
          description="Material Dukan Signup is here."
        />
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Signup
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
};
export default Signup;
