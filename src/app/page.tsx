'use client'
import { useEffect, useState } from 'react'
import Stack from 'naxui/Stack'
import Box from 'naxui/Box'
import Text from 'naxui/Text'
import Input from 'naxui/Input'
import IconButton from 'naxui/IconButton'
import Button from 'naxui/Button'
import Container from 'naxui/Container'
import ViewBox from 'naxui/ViewBox'

import SearchIcon from "naxui-icons/filled/Search"

import AccessTimeIcon from "naxui-icons/filled/AccessTime"
import AccountCircleIcon from "naxui-icons/filled/AccountCircle"
import AddAPhotoIcon from "naxui-icons/filled/AddAPhoto"
import AddIcon from "naxui-icons/filled/Add"
import CheckIcon from "naxui-icons/filled/Check"
import CallIcon from "naxui-icons/filled/Call"

import IconCard from '@src/components/IconCard'

import handlers from './handlers'

// "$startWith()"

export default function Home() {

	const [iconType, setIconType] = useState('filled')

	const [search, setSearch] = useState('')
	const handler = handlers['filled'] as any
	const icons = search ? handler.find({ name: `$startWith(${search})` }) : handler.getAll()

	return (
		<Box>
			<Stack alignItems="center" bgcolor="color.common" p={3} mb={2} >
				<Box my={2} >
					<Text
						variant='h4'
						fontWeight={500}
					>
						NAXUI-ICONS
					</Text>
				</Box>
				<Box mb={2} width="100%" maxWidth={500} >
					<Input
						width={"100%"}
						placeholder='Search'
						px={3}
						onChange={(e: any) => setSearch(e.target.value)}
						endIcon={<Box
							border={0}
							borderLeft={1}
							borderColor="color.divider"
							pl={.5}
							pr={2}
						>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</Box>}
					/>
				</Box>
				<Stack
					my={2}
					direction="row"
					alignItems="center"
				>
					<Button
						size='small'
						variant={iconType === 'filled' ? 'filled' : "outlined"}
						mr={1}
						textTransform="capitalize"
						onClick={() => {
							setIconType('filled')
						}}
					>
						Filled
					</Button>
					<Button
						size='small'
						variant={iconType === 'outlined' ? 'filled' : "outlined"}
						mr={1}
						textTransform="capitalize"
						onClick={() => {
							setIconType('outlined')
						}}
					>
						Outlined
					</Button>
					<Button
						size='small'
						variant={iconType === 'rounded' ? 'filled' : "outlined"}
						mr={1}
						textTransform="capitalize"
						onClick={() => {
							setIconType('rounded')
						}}
					>
						Rounded
					</Button>
					<Button
						size='small'
						variant={iconType === 'two-tone' ? 'filled' : "outlined"}
						mr={1}
						textTransform="capitalize"
						onClick={() => {
							setIconType('two-tone')
						}}
					>
						Two tone
					</Button>
					<Button
						size='small'
						variant={iconType === 'sharp' ? 'filled' : "outlined"}
						mr={1}
						textTransform="capitalize"
						onClick={() => {
							setIconType('sharp')
						}}
					>
						Sharp
					</Button>
				</Stack>
			</Stack>

			<Container>
				<Stack
					spacing={2}
					p={2}
					direction="row"
					flexWrap="wrap"
				>

					<Box >
						<IconCard name={'10k'} iconType={iconType} />
					</Box>

					{/* {
						icons.map((icon: any) => {
							return (
								<Box key={icon._id} >
									<IconCard name={icon.name} iconType={iconType} />
								</Box>
							)
						})
					} */}
				</Stack>
			</Container>
		</Box >
	)
}
