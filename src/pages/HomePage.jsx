import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Text, useDisclosure } from "@chakra-ui/react"
import ModalFile from "../components/ModalFile"
import useFiles from "../hooks/useFiles"

const HomePage = () => {
    const files = useFiles()
    const { isOpen: isOpenFile, onOpen, onClose } = useDisclosure()
    return (
        <Container>
            <Button leftIcon={<ArrowUpIcon/>} onClick = {onOpen} colorScheme = 'linkedin' marginTop='5%' w='100%'>Upload file</Button>
            <Button leftIcon={<ArrowUpIcon/>} colorScheme = 'facebook' marginTop='5%' w='100%'>Create directory</Button>
            {
                files.length !== 0 ? files.map(file => (
                    <Box key={file.name} bg='tomato' width='100%' p={4} color='white' borderRadius='5px' marginTop='5%'>
                        <Flex>
                            {file.name} {file.size !== 0 ? ` - ${file.size} KB` : null}
                        </Flex>
                    </Box>
                )) : <Text fontSize='5xl'>No files found</Text>
            }
            <ModalFile isOpen = {isOpenFile} onClose = {onClose}/>
        </Container>
    )
}

export default HomePage