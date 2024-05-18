import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthFrom = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<Box border="1px solid gray" borderRadius={4} p={5}>
				<VStack spacing={4}>
					<Image h={24} src="/logo.png" alt="Logo" cursor="pointer" />

					{isLogin ? <Login /> : <Signup />}

					{/* -------------OR--------------- */}
					<Flex align="center" justify="center" w="full" gap={1}>
						<Box w="full" h={"1px"} bg={"gray.400"} />
						<Text fontSize="xl">OR</Text>
						<Box w="full" h={"1px"} bg={"gray.400"} />
					</Flex>
					{/* -------------OR--------------- */}

					<GoogleAuth />
				</VStack>
			</Box>
			{/* Switches between login and sign up */}

			<Box border="1px solid gray" borderRadius={4} p={5}>
				<Flex align="center" justify="center">
					<Box fontSize={14} mx={2}>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Box>
					<Box
						onClick={() => setIsLogin(!isLogin)}
						color="blue.500"
						cursor="pointer"
					>
						{isLogin ? "Sign up" : "Login"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthFrom;
