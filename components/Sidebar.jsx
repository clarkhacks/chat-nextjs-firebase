import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
      <Avatar src="" marginEnd={3} />
      <Text> user@gmail.com </Text>
    </Flex>
  );
};

export default function Sidebar() {
  return (
    <Flex
      // bg='blue.100'
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        // bg="red.100"
        h="81px"
        w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={3}
      >
        <Flex align="center">
          <Avatar src="" marginEnd={3} />
          <Text> Johan Leon </Text>
        </Flex>
        <IconButton size="sm" isRound icon={<ArrowLeftIcon />} />
      </Flex>

      <Button m={5} p={4}>
        New chat
      </Button>

      <Flex className="chats-container" overflowX="scroll" direction='column' sx={{scrollbarWidth: "none"}} flex={1}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
      

    </Flex>
  );
}