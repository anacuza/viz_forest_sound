import styles from '@/styles/Content.module.css'
import Image from 'next/image'
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { useState } from "react";
import { active } from 'd3';

//TO DO create state that saves all animals selected
function ImageSelection({animal, label_list, setLabelList, labelList}) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current)
        if(isActive) 
        {
            // var index = label_list.indexOf(animal);
            // if (index !== -1) {
            //     label_list.splice(index, 1);
            // } 
            setLabelList(
                labelList.filter(a =>
                  a !== animal
                )
            )

        }
        else 
        {
            // label_list.push(animal)
            setLabelList([
                ...labelList,
                animal
            ])
        }
        console.log(label_list)
        

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
                        border: isActive ? '2px solid black' : 'none',
                      }}
                      onClick={handleClick}
                    >
                <Image key={animal} src={"/animal_gallery/"+animal+".jpg"} alt={'aardvark'} width={250} height={250}/>
                </WrapItem>
    )

}

export default function LabelPage({setLabelList, labelList}) {
    const animals_ls = ['aardvark', 'beeeater', 'bluebelly', 'coucal', 'dove', 'hartebeest', 'hornbill', 'jacana', 'lapwing', 'mongoose', 'roller', 'turaco']
//     const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleClick = (e) => {
//     // 👇️ toggle
//     setSelectedOptions(...selectedOptions, e.target.key);
//   }
    const label_list = labelList
    console.log(label_list)


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
            <Wrap px="0.5rem" spacing={4} justify="center" maxH="75%">
            {
            animals_ls.map((animal, index) => (
                <ImageSelection animal={animal} label_list={label_list} setLabelList={setLabelList} labelList={labelList} key={animal} />
            ))
            }
            </Wrap>
            </Container>
        </Box>
        </>
    )
}