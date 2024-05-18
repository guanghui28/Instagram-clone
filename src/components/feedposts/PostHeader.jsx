import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ avatar, username }) => {
	return (
		<Flex justify="space-between" align={"center"} width="full" my={2}>
			<Flex align="center" gap={2}>
				<Avatar src={avatar} alt={username} size="sm" />
				<Flex fontSize={12} fontWeight={"bold"} gap={2}>
					{username}
					<Box color="gray.500">1w</Box>
				</Flex>
			</Flex>
			<Box cursor="pointer">
				<Text
					fontSize={12}
					color="blue.500"
					fontWeight={"bold"}
					_hover={{ color: "white" }}
					transition={"0.2s ease-in-out"}
				>
					Unfollow
				</Text>
			</Box>
		</Flex>
	);
};

export default PostHeader;
