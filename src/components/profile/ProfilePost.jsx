import {
	Avatar,
	Box,
	Divider,
	Flex,
	GridItem,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../comment/Comment";
import PostFooter from "../feedposts/PostFooter";

const ProfilePost = ({ img }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<GridItem
				cursor="pointer"
				position="relative"
				aspectRatio={1 / 1}
				border="1px solid"
				borderColor="whiteAlpha.700"
				overflow="hidden"
				borderRadius={4}
				onClick={onOpen}
			>
				<Flex
					opacity={0}
					_hover={{ opacity: 1 }}
					transition="all ease-in-out 0.3s"
					position="absolute"
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg="blackAlpha.700"
					zIndex={1}
					justify="center"
				>
					<Flex align="center" justify="center" gap={50}>
						<Flex align="center">
							<AiFillHeart size={20} />
							<Text fontWeight="bold" ml={2}>
								7
							</Text>
						</Flex>
						<Flex align="center">
							<FaComment size={20} />
							<Text fontWeight="bold" ml={2}>
								7
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Image
					src={img}
					alt="profile post"
					w="100%"
					h="100%"
					objectFit={"cover"}
				/>
			</GridItem>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered={true}
				size={{ base: "3xl", md: "5xl" }}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody bg="black">
						<Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx="auto">
							<Box
								borderRadius={4}
								overflow="hidden"
								border="1px solid"
								borderColor="whiteAlpha.300"
								flex={1.5}
							>
								<Image src={img} alt="profile post" />
							</Box>
							<Flex
								flex={1}
								direction="column"
								px={10}
								display={{ base: "none", md: "flex" }}
							>
								<Flex align="center" justify="space-between">
									<Flex align="center" gap={4}>
										<Avatar
											src="/profilepic.png"
											size="sm"
											name="Haruki Murakami"
										/>
										<Text fontSize={12} fontWeight="bold">
											harukimurakami
										</Text>
									</Flex>
									<Box
										_hover={{ bg: "whiteAlpha.300", color: "red.600" }}
										borderRadius={4}
										p={1}
									>
										<MdDelete size={20} cursor="pointer" />
									</Box>
								</Flex>
								<Divider my={4} bg="gray.500" />
								<VStack w="full" align="start" maxH="350px" overflowY="auto">
									<Comment
										createdAt="2d ago"
										username="tomholland"
										profilePic="https://bit.ly/sage-adebayo"
										text="Beautiful"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/tioluwani-kolawole"
										text="Good Girl on the pic!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/dan-abramov"
										text="You're prettiest"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/ryan-florence"
										text="Dummy image profile. Good!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/tioluwani-kolawole"
										text="Good Girl on the pic!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/dan-abramov"
										text="You're prettiest"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/ryan-florence"
										text="Dummy image profile. Good!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/tioluwani-kolawole"
										text="Good Girl on the pic!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/dan-abramov"
										text="You're prettiest"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/ryan-florence"
										text="Dummy image profile. Good!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/tioluwani-kolawole"
										text="Good Girl on the pic!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/dan-abramov"
										text="You're prettiest"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/ryan-florence"
										text="Dummy image profile. Good!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/tioluwani-kolawole"
										text="Good Girl on the pic!"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/dan-abramov"
										text="You're prettiest"
									/>
									<Comment
										createdAt="1d ago"
										username="tomholland"
										profilePic="https://bit.ly/ryan-florence"
										text="Dummy image profile. Good!"
									/>
								</VStack>
								<Divider my={4} bg="gray.800" />
								<PostFooter isProfilePage={true} />
							</Flex>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProfilePost;
