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
import useUploadFile from '../hooks/useUploadFile'

const ModalFile = ({ isOpen, onClose }) => {
    const uploadFile = useUploadFile()
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload File</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction='column'>
                        <form encType="multipart/form-data" method='post' onSubmit={uploadFile}>
                            <FormControl onSubmit={uploadFile}>
                                <FormLabel htmlFor='email'>File</FormLabel>
                                <Input id='file' name='upload_file' type='file'/>
                                
                            </FormControl>
                            <Button colorScheme='messenger' type='submit'>Upload</Button>
                        </form>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalFile