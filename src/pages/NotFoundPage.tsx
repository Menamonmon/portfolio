import { Heading, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import { Helmet } from "react-helmet";
import LinkSpan from "../components/LinkSpan";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Mena Filfil - Not Found</title>
      </Helmet>
      <VStack h="80vh">
        <HStack h="100%" justifyContent="space-between">
          <Heading>
            The page you are looking for is not found. Please check the URL and
            try again.
          </Heading>
          <Heading size="4xl">😕</Heading>
        </HStack>
        <Heading>
          Go back to <LinkSpan to="/">the homepage</LinkSpan>.
        </Heading>
      </VStack>
    </div>
  );
};

export default NotFoundPage;
