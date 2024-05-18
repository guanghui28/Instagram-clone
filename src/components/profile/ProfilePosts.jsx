import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const id = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(id);
	}, []);

	return (
		<Grid
			templateColumns={{
				base: "repeat(1, 1fr)",
				sm: "repeat(2, 1fr)",
				md: "repeat(3, 1fr)",
			}}
			gap={1}
			columnGap={1}
		>
			{isLoading &&
				[...Array(6)].map((_, idx) => (
					<VStack key={idx} align="flex-start" gap={4}>
						<Skeleton w="full">
							<Box h="300px">Content wrapped</Box>
						</Skeleton>
					</VStack>
				))}
			{!isLoading && (
				<>
					<ProfilePost img="/img1.png" />
					<ProfilePost img="/img2.png" />
					<ProfilePost img="/img3.png" />
					<ProfilePost img="/img4.png" />
				</>
			)}
		</Grid>
	);
};

export default ProfilePosts;
