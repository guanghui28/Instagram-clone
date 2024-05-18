import {
	Avatar,
	AvatarGroup,
	Button,
	Flex,
	Text,
	VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
		>
			<AvatarGroup
				size={{ base: "xl", md: "2xl" }}
				justifySelf={"center"}
				alignSelf={"flex-start"}
				mx="auto"
			>
				<Avatar
					src="/profilepic.png"
					alt="Haruki murakami"
					name="Haruki murakami"
				/>
			</AvatarGroup>
			<VStack flex={1} alignItems="start" spacing={2} mx="auto">
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justify={{ base: "center", sm: "flex-start" }}
					align="center"
					w="full"
				>
					<Text fontSize={{ base: "sm", md: "lg" }}>harukimurakami</Text>
					<Flex gap={4} align="center" justify="center">
						<Button
							bg="white"
							color="black"
							_hover={{ bg: "whiteAlpha.800" }}
							size={{ base: "xs", md: "sm" }}
						>
							Edit profile
						</Button>
					</Flex>
				</Flex>
				<Flex align="center" gap={{ base: 2, md: 4 }}>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight="bold" mr={1}>
							4
						</Text>{" "}
						Post
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight="bold" mr={1}>
							100
						</Text>{" "}
						Followers
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as="span" fontWeight="bold" mr={1}>
							175
						</Text>{" "}
						Following
					</Text>
				</Flex>
				<Flex alignItems="center" gap={4}>
					<Text fontSize="sm" fontWeight="bold">
						Haruki Murakami
					</Text>
				</Flex>
				<Text fontSize="sm">
					The life is always awesome! Don&apos;t give up!
				</Text>
			</VStack>
		</Flex>
	);
};

export default ProfileHeader;
