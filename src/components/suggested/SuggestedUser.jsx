import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
	const [isFollowed, setIsFollowed] = useState(false);

	const handleFollowUnfollow = () => {
		setIsFollowed(!isFollowed);
	};

	return (
		<Flex alignItems="center" justifyContent="space-between" w="full">
			<Flex align="center" gap={2}>
				<Avatar src={avatar} name={name} size="md" />
				<VStack spacing={2} alignItems="flex-start">
					<Box fontSize={12} fontWeight="bold">
						{name}
					</Box>
					<Box fontSize={11} color="gray.500">
						{followers} followers
					</Box>
				</VStack>
			</Flex>
			<Button
				fontSize={13}
				bg="transparent"
				p={0}
				h="max-content"
				color="blue.400"
				cursor="pointer"
				_hover={{ color: "white" }}
				onClick={handleFollowUnfollow}
			>
				{isFollowed ? "Unfollow" : "Follow"}
			</Button>
		</Flex>
	);
};

export default SuggestedUser;
