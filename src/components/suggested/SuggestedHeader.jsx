import { Avatar, Text, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
	return (
		<Flex justifyContent="space-between" align="center" w="full">
			<Flex align="center" gap={2}>
				<Avatar size="md" name="Haruki Murakami" src="/profilepic.png" />
				<Text fontSize={12} fontWeight="bold">
					haruki1949
				</Text>
			</Flex>
			<Link
				as={RouterLink}
				to="/auth"
				fontSize={14}
				fontWeight="medium"
				color="blue.400"
				style={{ textDecoration: "none" }}
				cursor="pointer"
			>
				Logout
			</Link>
		</Flex>
	);
};

export default SuggestedHeader;
