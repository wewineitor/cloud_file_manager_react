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
import useUploadFile from '../hooks/useUploadFile'

const ModalFile = ({ isOpen, onClose }) => {
    const {path} = useParams()
    const uploadFile = useUploadFile(path)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <form encType="multipart/form-data" method='post' onSubmit={uploadFile}>
                <ModalHeader>Upload File</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction='column'>
                            <FormControl>
                                <FormLabel htmlFor='email'>File</FormLabel>
                                <Input id='file' name='upload_file' type='file'/>
                            </FormControl>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme='messenger' type='submit'>Upload</Button>
                </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ModalFile