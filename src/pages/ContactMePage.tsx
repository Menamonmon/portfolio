import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { FormEventHandler, useState } from "react";
import { SiGmail } from "react-icons/si";
import { BsPerson } from "react-icons/bs";
import Title from "../components/Title";
import useField from "../hooks/useField";
import { Button } from "@chakra-ui/button";
import FormLabel from "../components/FormLabel";
import PageContainer from "../layout/PageContainer";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

const ContactMePage = () => {
  const [name, handleNameChange] = useField();
  const [message, handleMessageChange] = useField();
  const [email, handleEmailChange] = useField();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(
        "https://email-sender-api36051623579128.herokuapp.com/send-email/",
        { name, email, message }
      );
      toast({
        title: "Message Sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Error With Sending Message",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

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
          <FormControl as="form" onSubmit={handleSubmit}>
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
              <Button
                colorScheme="blue"
                ml="auto"
                type="submit"
                onSubmit={handleSubmit}
                disabled={isLoading}
              >
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
