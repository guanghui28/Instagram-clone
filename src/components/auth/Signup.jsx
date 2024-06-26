import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
	const [inputs, setInputs] = useState({
		email: "",
		username: "",
		fullName: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, signup } = useSignUpWithEmailAndPassword();

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
			<Input
				size="sm"
				placeholder="Username"
				type="text"
				fontSize={14}
				value={inputs.username}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
			<Input
				size="sm"
				placeholder="Full name"
				type="text"
				fontSize={14}
				value={inputs.fullName}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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

			<Button
				w="full"
				colorScheme="blue"
				size="sm"
				fontSize={14}
				onClick={() => signup(inputs)}
				isLoading={loading}
			>
				Sign up
			</Button>
		</>
	);
};

export default Signup;
