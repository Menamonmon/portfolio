import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { SiGmail } from "react-icons/si";
import { BsPerson } from "react-icons/bs";
import Title from "../components/Title";
import useField from "../hooks/useField";
import { Button } from "@chakra-ui/button";
import FormLabel from "../components/FormLabel";
import PageContainer from "../layout/PageContainer";

const ContactMePage = () => {
  const [name, handleNameChange] = useField();
  const [message, handleMessageChange] = useField();
  const [email, handleEmailChange] = useField();

  return (
    <PageContainer>
      <Box>
        <Title>Contact Me 🤙</Title>
        <Box
          maxW="500px"
          mx="auto"
          p={5}
          borderWidth="1px"
          borderColor="blue.300"
          rounded="xl"
        >
          <FormControl as="form">
            <Box my={3}>
              <FormLabel>Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  isRequired
                  colorScheme="blue"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="John Doe"
                  type="text"
                  variant="filled"
                />
              </InputGroup>
            </Box>
            <Box my={3}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<SiGmail />} />
                <Input
                  isRequired
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  placeholder="example@example.com"
                  variant="filled"
                />
              </InputGroup>
            </Box>
            <Box my={3}>
              <FormLabel>Message</FormLabel>
              <Textarea
                isRequired
                value={message}
                onChange={handleMessageChange}
                placeholder="Message......"
                variant="filled"
              />
            </Box>
            <Box display="flex">
              <Button colorScheme="blue" ml="auto" type="submit">
                Send
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default ContactMePage;
