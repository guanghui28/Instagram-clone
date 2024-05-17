import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
	CreatePostLogo,
	InstagramLogo,
	InstagramMobileLogo,
	NotificationsLogo,
	SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const sidebarItems = [
	{
		icon: <AiFillHome size={25} />,
		text: "Home",
		link: "/",
	},
	{
		icon: <SearchLogo />,
		text: "Search",
	},
	{
		icon: <NotificationsLogo />,
		text: "Notifications",
	},
	{
		icon: <CreatePostLogo />,
		text: "Create",
	},
	{
		icon: <Avatar size="sm" name="Haruki Murakami" src="/profilepic.png" />,
		text: "Profile",
		link: "/haruki",
	},
];

const Sidebar = () => {
	return (
		<Box
			h="100vh"
			position="sticky"
			borderRight="1px solid"
			borderColor="whiteAlpha.300"
			py={8}
			top={0}
			left="0"
			px={{ base: 2, md: 4 }}
		>
			<Flex direction="column" gap={10} w="full" h="full">
				<Link
					to="/"
					as={RouterLink}
					pl={2}
					display={{ base: "none", md: "block" }}
					cursor="pointer"
				>
					<InstagramLogo />
				</Link>
				<Link
					to="/"
					as={RouterLink}
					p={2}
					borderRadius={6}
					display={{ base: "block", md: "none" }}
					cursor="pointer"
					_hover={{
						bg: "whiteAlpha.200",
					}}
					w={10}
				>
					<InstagramMobileLogo />
				</Link>
				<Flex direction="column" gap={5} cursor="pointer">
					{sidebarItems.map((item, index) => (
						<Tooltip
							key={index}
							hasArrow
							placement="right"
							ml={1}
							openDelay={500}
							label={item.text}
							display={{ base: "block", md: "none" }}
						>
							<Link
								as={RouterLink}
								to={item.link || null}
								display="flex"
								alignItems="center"
								justifyContent={{
									base: "center",
									md: "flex-start",
								}}
								gap={4}
								p={2}
								borderRadius={6}
								w={{ base: 10, md: "full" }}
								_hover={{
									bg: "whiteAlpha.400",
								}}
							>
								{item.icon}
								<Box
									display={{
										base: "none",
										md: "block",
									}}
								>
									{item.text}
								</Box>
							</Link>
						</Tooltip>
					))}
				</Flex>
				<Tooltip
					hasArrow
					label="Logout"
					placement="right"
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Link
						as={RouterLink}
						to="/auth"
						display="flex"
						alignItems="center"
						justifyContent={{
							base: "center",
							md: "flex-start",
						}}
						gap={4}
						p={2}
						borderRadius={6}
						w={{ base: 10, md: "full" }}
						_hover={{
							bg: "whiteAlpha.400",
						}}
						mt="auto"
					>
						<BiLogOut size={25} />
						<Box display={{ base: "none", md: "block" }}>Logout</Box>
					</Link>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
