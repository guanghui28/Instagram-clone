import {
	Box,
	Container,
	Flex,
	Skeleton,
	SkeletonCircle,
	VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const id = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(id);
	}, []);

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{isLoading &&
				[...Array(4)].map((_, idx) => (
					<VStack key={idx} gap={4} align="flex-start" mb={10}>
						<Flex gap={2}>
							<SkeletonCircle size={10} />
							<VStack gap={2} align="flex-start">
								<Skeleton height="10px" w="200px" />
								<Skeleton height="10px" w="200px" />
							</VStack>
						</Flex>
						<Skeleton w="full">
							<Box h="500px">Content wrapped</Box>
						</Skeleton>
					</VStack>
				))}
			{!isLoading && (
				<>
					<FeedPost img="/img1.png" username="lisadeng" avatar="/img1.png" />
					<FeedPost img="/img2.png" username="murakami" avatar="/img2.png" />
					<FeedPost img="/img3.png" username="johndoe" avatar="/img3.png" />
					<FeedPost img="/img4.png" username="haruki" avatar="/img4.png" />
				</>
			)}
		</Container>
	);
};

export default FeedPosts;
