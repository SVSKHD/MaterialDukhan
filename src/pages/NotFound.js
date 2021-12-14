import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Material Dukhan | Not Found Page"
        description="Material Dukan Page is not found"
        keywords="Material Dukan , cement store"
      />
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link href="/">
          <Button
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            <FaHome size={25} />
          </Button>
        </Link>
      </Box>
    </>
  );
};
export default NotFound;
