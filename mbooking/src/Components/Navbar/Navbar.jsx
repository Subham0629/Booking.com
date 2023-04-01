import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useToast,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineFlightTakeoff } from "react-icons/fa";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const toast = useToast();
  return (
    <Box backgroundColor="#003b95" paddingTop="7px" marginBottom="20px">
      <Flex
        bg={useColorModeValue("#003b95", "white")}
        color={useColorModeValue("white", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white", "white")}
          >
            <Image
              src="https://i.ibb.co/DMXbS2y/Screenshot-2023-03-29-220121.png"
              alt="LOGO"
              width="50%"
              marginTop="5px"
            />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAuthenticated ? (
            <Button
              fontSize="20px"
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontWeight={600}
              color={"Black"}
              bg={"#bcc1ba"}
              href={"#"}
              _hover={{
                bg: "#9E9E9E",
              }}
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                }) &&
                toast({
                  title: "Logged Out.",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Log Out
            </Button>
          ) : (
            <Button
              fontSize="20px"
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontWeight={600}
              color={"Black"}
              bg={"#bcc1ba"}
              href={"#"}
              _hover={{
                bg: "#9E9E9E",
              }}
              onClick={() => loginWithRedirect()}
            >
              Sign Up/Sign-In
            </Button>
          )}
          {/* ///I have added a button of Admin Section PLease add UI here */}
          {/* ///I have added a button of Admin Section PLease add UI here */}
          {/* ///I have added a button of Admin Section PLease add UI here */}
          {/* ///I have added a button of Admin Section PLease add UI here */}
          {/* ///I have added a button of Admin Section PLease add UI here */}
          <Link href="/adminlogin">
            <Button
              style={{
                color: "#fff",
                fontWeight: "700",
                fontStyle: "italic",
                backgroundColor: "#003b95",
                border:"2px dotted #fff",
                borderRadius:"50px",
                textDecoration:"none"
              }}
              _hover={{
                bg: "#9E9E9E",
              }}
            >
              Admin
            </Button>
          </Link>
          <ul>{isAuthenticated && <p>{user.name}</p>}</ul>
          {isAuthenticated
            ? toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            : ""}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                border="2px solid white"
                borderRadius="35px"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color="white"
                _hover={{
                  textDecoration: "none",
                  backgroundColor: "#3a62a6",
                  border: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: "Stays",
    href: "/",
  },
  {
    label: "CarRentals",
    href: "/carrental",
  },
  {
    label: "Flights",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
