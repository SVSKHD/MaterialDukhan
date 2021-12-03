import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Center,
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo";

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Material Dukan | Contact"
        description="Contact us material duakan for cement store and hardware store."
        keyphrase="Material Dukan "
        keywords=""
      />
      <Container
        bg="#FFFFFF"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="#2D3748"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Center>
                      <Heading>Contact</Heading>
                    </Center>
                    <br />
                    <hr />
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Center>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            <Link target="_blank" href=" https://api.whatsapp.com/send?phone=917288018339&text=Hello We want Some More Details in the Products">
                              +91-7288018339
                            </Link>
                          </Button>
                        </Center>
                        <Center>
                          <Link target="_blank" href = "mailto: abc@example.com">
                          <Button
                            size="md"
                            height="48px"
                            width="250px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            materialdukan@gmail.com
                          </Button>
                          </Link>
                        </Center>
                        <Center>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={
                              <MdLocationOn color="#1970F1" size="20px" />
                            }
                          >
                            Hyderabad, India
                          </Button>
                        </Center>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <Link>
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdFacebook size="28px" />}
                        />
                      </Link>
                      <Link>
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdLocationOn size="28px" />}
                        />
                      </Link>
                      <Link href=" https://api.whatsapp.com/send?phone=917288018339&text=Hello We want Some More Details in the Products">
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<FaWhatsapp size="28px" />}
                        />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Contact;
