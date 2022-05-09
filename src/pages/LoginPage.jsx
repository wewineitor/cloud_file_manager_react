import { Button, Center, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"

const LoginPage = () => {
    return(
        <Center>
            <Flex direction='column' border='1px solid' borderRadius="5px" padding="2rem" marginTop="1em" color="#fff">
                <h1>Login</h1>
                <FormControl width='100%'>
                    <FormLabel>Email</FormLabel>
                    <Input id = 'email' type='email'/>
                </FormControl>

                <FormControl width='100%'>
                    <FormLabel>Password</FormLabel>
                    <Input id = 'password' type='password'/>
                </FormControl>

                <Button colorScheme="linkedin" marginTop="1em" width='100%'>Button</Button>
            </Flex>
        </Center>
    )
}

export default LoginPage