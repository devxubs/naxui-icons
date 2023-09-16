'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Stack from 'naxui/Stack'
import Box from 'naxui/Box'
import Text from 'naxui/Text'
import IconButton from 'naxui/IconButton'

import ContentCopyIcon from "naxui-icons/filled/ContentCopy"
import CheckIcon from 'naxui-icons/filled/Check'
import AbcIcon from 'naxui-icons/filled/Abc'
import dynamic from 'next/dynamic'

interface IconCardProps {
    name: string,
    iconType: 'filled' | "outlined" | 'rounded' | 'two-tone' | "sharp"
}

export const Icon = ({ name, iconType }: IconCardProps) => {


    const [state, setState] = useState<any>()

    useEffect(() => {
        (async () => {
            try {
                const I = dynamic(() => import(`naxui-icons/filled/10k`))
                // let n = '10k'
                // const comp = await import(`naxui-icons/filled/${n}`)
                setState(I)
            } catch (err) {

            }
        })();
    }, [])

    return state && state
}

const IconCard = ({ name, iconType }: IconCardProps) => {

    // const [copy, setCopy] = useState(false)

    // setTimeout(() => {
    //     setCopy(false)
    // }, 1500);

    return (

        <Stack
            alignItems="center"
            justifyContent="center"
            position="relative"
            bgcolor="color.common"
            width={150}
            height={150}
            p={3}
            border={1}
            borderColor="transparent"
            borderRadius={1}
            transition="0.3s"

            hover={{
                borderColor: 'color.divider',

                '& .copy': {
                    visibility: 'visible',
                }
            }}
        >
            <Box
                mb={3}
                sx={{
                    '& > svg': {
                        fontSize: 40,
                    }
                }}
            >
                <Icon name={name} iconType={iconType} />
                {/* <AbcIcon /> */}
                {/* {icon} */}
            </Box>
            <Text variant='subtext' fontSize={13} >
                {name.slice(0, 8)}...
            </Text>
            <Box
                className='copy'
                position="absolute"
                right={5}
                bottom={5}
                visibility={'hidden'}
            >
                <IconButton
                    size={30}
                // disabled={copy}
                // onClick={() => {
                //     setCopy(true)
                //     navigator.clipboard.writeText(`import ${title}Icon from 'naxui-icons/filled/${title}'`)
                // }}
                >
                    <ContentCopyIcon fontSize={16} />
                    {/* {
                        !copy ? <ContentCopyIcon fontSize={16} />
                            : <CheckIcon fontSize={16} />
                    } */}
                </IconButton>
            </Box>
        </Stack>
    )
}

export default IconCard