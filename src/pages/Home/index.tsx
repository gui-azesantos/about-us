import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export function Home() {
  const userData = {
    fullName: "John Doe",
    birthDate: "25/05/1995",
    gender: "Masculino",
    nationality: "Brasileiro",
  };

  const hobbiesData = {
    hobbies: "Fotografia, Viagens, Leitura e Ciclismo",
  };

  const educationData = {
    educationLevel: "Graduação",
    institution: "FIAP",
    fieldOfStudy: "Sistemas para internet",
    graduationYear: "2024",
  };

  const experienceData = {
    jobTitle: "Desenvolvedor Web",
    company: "Empresa XYZ",
    startDate: "02/10/2016",
    endDate: "15/08/2021",
  };

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "dark");
  }, []);

  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" py={8}>
      <Flex direction="column" align="center" w="100%" mb={16}>
        <Avatar size="xl" name={userData.fullName} src="URL_DA_IMAGEM" />
        <Text mt={4} fontSize="2xl" fontWeight="bold" textAlign={"center"}>
          {userData.fullName}
        </Text>
        <Text
          fontSize="lg"
          color="gray.500"
          fontWeight="bold"
          fontStyle="italic"
        >
          About Us
        </Text>
      </Flex>

      <SimpleGrid columns={2} spacing={8} w="100%">
        <Box bgColor="#F58A07" p={4} borderRadius="lg">
          <Header title="Sobre você" onclick={() => navigate("/sobre-voce")} />
          <Divider my={4} borderColor="blackAlpha.500" />
          <VStack spacing={4} align="start">
            <Text fontWeight="bold" alignSelf={"center"} textAlign={"center"}>
              {userData.fullName}
            </Text>
            <Text>{userData.birthDate}</Text>
            <Text>{userData.gender}</Text>
            <Text>{userData.nationality}</Text>
          </VStack>
        </Box>

        <Box bgColor="#59A96A" p={4} borderRadius="lg">
        <Header title="Hobbies" onclick={() => navigate("/hobbies")} />
          <Divider my={4} borderColor="blackAlpha.500" />
          <VStack spacing={4} align="start">
            <Text alignSelf={"center"}>{hobbiesData.hobbies}</Text>
          </VStack>
        </Box>

        <Box bgColor="#376996" p={4} borderRadius="lg">
          <Header title="Formação" onclick={() => navigate("/formacao")} />
          <Divider my={4} borderColor="blackAlpha.500" />

          <VStack spacing={4} align="start">
            <Text fontWeight="bold" alignSelf={"center"}>
              {educationData.educationLevel}
            </Text>
            <Text>{educationData.institution}</Text>
            <Text>{educationData.fieldOfStudy}</Text>
            <Text>{educationData.graduationYear}</Text>
          </VStack>
        </Box>

        <Box bgColor="red.500" p={4} borderRadius="lg">
          <Header
            title="Experiências"
            onclick={() => navigate("/experiencias")}
          />
          <Divider my={4} borderColor="red.200" />
          <VStack spacing={4} align="start">
            <Text fontWeight="bold" alignSelf={"center"} textAlign={"center"}>
              {experienceData.jobTitle}
            </Text>
            <Text>{experienceData.company}</Text>
            <Text>{experienceData.startDate} até {experienceData.endDate}</Text> 
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
