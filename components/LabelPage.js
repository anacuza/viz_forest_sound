import styles from '@/styles/Content.module.css'
import Image from 'next/image'
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { useState } from "react";
import { active } from 'd3';

//TO DO create state that saves all animals selected
function ImageSelection({animal}) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current)
    }

    return(
        <WrapItem
                    key={animal}
                    boxShadow="base"
                    rounded="20px"
                    overflow="hidden"
                    bg=""
                    lineHeight="0"
                    //_hover={{ boxShadow: "dark-lg" }}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}
                    style={{
                        border: isActive ? '3px solid black' : 'none',
                      }}
                      onClick={handleClick}
                    >
                <Image key={animal} src={"/animal_gallery/"+animal+".jpg"} alt={'aardvark'} width={250} height={250}/>
                </WrapItem>
    )

}

export default function LabelPage() {
    const animals_ls = ['aardvark', 'beeeater', 'bluebelly', 'coucal', 'dove', 'hartebeest', 'hornbill', 'jacana', 'lapwing', 'mongoose', 'roller', 'turaco']
//     const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleClick = (e) => {
//     // 👇️ toggle
//     setSelectedOptions(...selectedOptions, e.target.key);
//   }

    return(
        <>
        <Box overflow={'hidden'} overflowY={'scroll'} position={'fixed'} right={'2%'} top={'13%'} w="50%" maxH="75%">
            <Container maxH="75%">
            {/* <Text
                color="pink.800"
                fontWeight="semibold"
                mb="1rem"
                textAlign="center"
                textDecoration="underline"
                fontSize={["4xl", "4xl", "5xl", "5xl"]}
            >
                Image Gallery
            </Text> */}
            <Wrap px="1rem" spacing={4} justify="center" maxH="75%">
            {
            animals_ls.map((animal, index) => (
                <ImageSelection animal={animal} key={animal} />
            ))
            }
            </Wrap>
            </Container>
        </Box>
        </>
    )
}