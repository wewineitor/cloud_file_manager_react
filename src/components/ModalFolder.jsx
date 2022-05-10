import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useCreateFolder from '../hooks/useCreateFolder'

const ModalFolder = ({ isOpen, onClose }) => {
    const {path} = useParams()
    const createFolder = useCreateFolder(path)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <form method='post' onSubmit={createFolder}>
                <ModalHeader>Upload File</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction='column'>
                            <FormControl>
                                <FormLabel htmlFor='email'>Folder</FormLabel>
                                <Input name='new_folder'/>
                            </FormControl>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme='messenger' type='submit'>Create</Button>
                </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ModalFolder