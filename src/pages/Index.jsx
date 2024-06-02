import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Image, Box } from "@chakra-ui/react";
import { FaUpload, FaCog } from "react-icons/fa";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedText, setProcessedText] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImage = () => {
    // Simulate OCR processing
    setProcessedText("Simulated OCR text from the image.");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Image to Text Converter</Text>
        <Input type="file" accept="image/*" onChange={handleImageUpload} display="none" id="upload-input" />
        <Button as="label" htmlFor="upload-input" leftIcon={<FaUpload />} colorScheme="teal">
          Upload Image
        </Button>
        {selectedImage && (
          <Box boxSize="sm">
            <Image src={selectedImage} alt="Uploaded" />
          </Box>
        )}
        <Button onClick={handleProcessImage} leftIcon={<FaCog />} colorScheme="blue" isDisabled={!selectedImage}>
          Process Image
        </Button>
        {processedText && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>{processedText}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
