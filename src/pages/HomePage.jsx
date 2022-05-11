import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, Button, Container, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate, useParams } from "react-router-dom"
import ModalFile from "../components/ModalFile"
import ModalFolder from "../components/ModalFolder"
import useFiles from "../hooks/useFiles"

const HomePage = () => {
    const navigate = useNavigate()
    let { path } = useParams()
    const files = useFiles(path)
    const { isOpen: isOpenFile, onOpen: onOpenFile, onClose: onCloseFile } = useDisclosure()
    const { isOpen: isOpenFolder, onOpen: onOpenFolder, onClose: onCloseFolder } = useDisclosure()
    const handleNavigate = (path_param) => {
        if (path !== undefined) {
            path += `-${path_param}`
            navigate(`/${path}`)
        }
        else navigate(`/${path_param}`)
    }
    return (
        <Container>
            <Button
                leftIcon={<FontAwesomeIcon icon={faFile} />}
                onClick={onOpenFile}
                colorScheme='linkedin'
                marginTop='5%'
                w='100%'>Upload file</Button>

            <Button
                leftIcon={<FontAwesomeIcon icon={faFolder} />}
                onClick={onOpenFolder}
                colorScheme='facebook'
                marginTop='5%'
                w='100%'>Create directory</Button>
            {
                path !== undefined ? <Box
                    onClick={() => navigate(-1)}
                    bg='black'
                    width='100%'
                    p={4}
                    color='white'
                    borderRadius='5px'
                    marginTop='5%'>
                    <Flex>
                        <ArrowUpIcon />
                        <Text alignContent='center' textAlign='center'>
                            Back...
                        </Text>
                    </Flex>
                </Box>
                    : null
            }
            {
                files.length !== 0 ? files.map(file => (
                    <Box
                        key={file.name}
                        onClick={() => file.name.indexOf('.') === -1 ? handleNavigate(file.name) : ''}
                        bg='black'
                        width='100%'
                        p={4}
                        color='white'
                        borderRadius='5px'
                        marginTop='5%'>
                        <Flex>
                            <FontAwesomeIcon fontSize={35} icon={ file.name.indexOf('.') === -1 ? faFolder : faFile} />
                            <Text fontSize='2xl'>{file.name} {file.size !== 0 ? ` - ${file.size} KB` : null}</Text>
                        </Flex>
                    </Box>
                )) : <Text fontSize='5xl'>No files found</Text>
            }
            <ModalFile isOpen={isOpenFile} onClose={onCloseFile} />
            <ModalFolder isOpen={isOpenFolder} onClose={onCloseFolder}/>
        </Container>
    )
}

export default HomePage