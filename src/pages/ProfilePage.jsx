import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePosts from "../components/profile/ProfilePosts";

const ProfilePage = () => {
	return (
		<Container maxW="container.lg" py={5}>
			<Flex
				px={4}
				py={10}
				pl={{ base: 4, md: 10 }}
				mx="auto"
				direction="column"
			>
				<ProfileHeader />
			</Flex>
			<Flex
				px={{ base: 2, sm: 4 }}
				maxW="full"
				mx="auto"
				borderTop="1px solid"
				borderColor="whiteAlpha.300"
				direction="column"
			>
				<ProfileTabs />
				<ProfilePosts />
			</Flex>
		</Container>
	);
};

export default ProfilePage;
