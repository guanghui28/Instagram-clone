import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import AuthFrom from "../components/auth/AuthFrom";

const AuthPage = () => {
	return (
		<Flex minH="100vh" align="center" justify="center" p={4}>
			<Container maxW="container.md" p={0}>
				<Flex justify="center" align="center" gap={10}>
					{/* Left hand-side */}
					<Box
						display={{
							base: "none",
							md: "block",
						}}
					>
						<Image h="650px" alt="Phone img" src="/auth.png" />
					</Box>
					{/* Right hand-side */}
					<VStack spacing={4} align="stretch">
						<AuthFrom />
						<Text textAlign="center">Get the app.</Text>
						<Flex align="center" justify="center" gap={5}>
							<Image src="/playstore.png" h={10} alt="Play store img" />
							<Image src="/microsoft.png" h={10} alt="Microsoft" />
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;
