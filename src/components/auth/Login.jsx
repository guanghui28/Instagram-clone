import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<Input
				size="sm"
				placeholder="Email"
				type="email"
				fontSize={14}
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<InputGroup>
				<Input
					size="sm"
					placeholder="Password"
					type={showPassword ? "text" : "password"}
					fontSize={14}
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<InputRightElement h="full">
					<Button
						onClick={() => setShowPassword(!showPassword)}
						variant="ghost"
						size="sm"
					>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

			<Button w="full" colorScheme="blue" size="sm" fontSize={14}>
				Login
			</Button>
		</>
	);
};

export default Login;
