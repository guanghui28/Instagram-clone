import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
	return (
		<Flex align="center" justify="center" cursor="pointer">
			<Image src="/google.png" w={5} alt="google" />
			<Text mx={2} color="blue.500">
				Log in with google
			</Text>
		</Flex>
	);
};

export default GoogleAuth;
