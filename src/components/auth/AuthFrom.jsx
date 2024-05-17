import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthFrom = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const handleAuth = () => {
		if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
			alert("Please fill all the field");
			return;
		}
		navigate("/");
	};

	const handleOnChangeInputs = (e) => {
		const { value, name } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<>
			<Box border="1px solid gray" borderRadius={4} p={5}>
				<VStack spacing={4}>
					<Image h={24} src="/logo.png" alt="Logo" cursor="pointer" />
					<Input
						placeholder="Email"
						type="email"
						fontSize={14}
						name="email"
						value={inputs.email}
						onChange={handleOnChangeInputs}
					/>
					<Input
						placeholder="Password"
						type="password"
						fontSize={14}
						name="password"
						value={inputs.password}
						onChange={handleOnChangeInputs}
					/>

					{!isLogin && (
						<Input
							placeholder="Confirm password"
							type="password"
							fontSize={14}
							name="confirmPassword"
							value={inputs.confirmPassword}
							onChange={handleOnChangeInputs}
						/>
					)}

					<Button
						w="full"
						colorScheme="blue"
						size="sm"
						fontSize={14}
						onClick={handleAuth}
					>
						{isLogin ? "Login" : "Sign up"}
					</Button>

					{/* -------------OR--------------- */}
					<Flex align="center" justify="center" w="full" gap={1}>
						<Box w="full" h={"1px"} bg={"gray.400"} />
						<Text fontSize="xl">OR</Text>
						<Box w="full" h={"1px"} bg={"gray.400"} />
					</Flex>
					{/* -------------OR--------------- */}

					<Flex align="center" justify="center" cursor="pointer">
						<Image src="/google.png" w={5} alt="google" />
						<Text mx={2} color="blue.500">
							Log in with google
						</Text>
					</Flex>
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
