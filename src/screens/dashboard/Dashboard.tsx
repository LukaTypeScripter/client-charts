
import DashboardBox from '@/components/DashboardBox';
import { Box,useMediaQuery,useTheme } from '@mui/material'
import React from 'react'
const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h j"
    "g h j"
`

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;
function Dashboard() {
    const {palette} = useTheme()
    const isAboveMediumScreens = useMediaQuery("(min-width:1200px)")
  return (
    <Box width={'100%'} display={"grid"} gap={'1.5rem'}
    sx={
       isAboveMediumScreens ? {
        gridTemplateColumns:"repeat(3,minmax(370px,1fr))",
        gridTemplateRows:"repeat(10,minmax(60px,1fr))",
        gridTemplateAreas:   gridTemplateLargeScreens,
       }: {
        gridTemplateAreas:gridTemplateSmallScreens,
        gridAutoColumns:"1fr",
        gridAutoRows:"80px",
       }
    }
    >
        <DashboardBox  gridArea={'a'}>
        </DashboardBox>
        <DashboardBox  gridArea={'b'}>
        </DashboardBox>
        <DashboardBox  gridArea={'c'}>
        </DashboardBox>
        <DashboardBox  gridArea={'d'}>
        </DashboardBox>
        <DashboardBox  gridArea={'e'}>
        </DashboardBox>
        <DashboardBox  gridArea={'f'}>
        </DashboardBox>
        <DashboardBox  gridArea={'g'}>
        </DashboardBox>
        <DashboardBox  gridArea={'h'}>
        </DashboardBox>
        <DashboardBox  gridArea={'i'}>
        </DashboardBox>
        <DashboardBox  gridArea={'j'}>
        </DashboardBox>

    </Box>
  )
}

export default Dashboard