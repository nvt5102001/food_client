
import { Box, Typography } from '@mui/material'
import { Icon } from "../assets/icon"

export const HeaderApp = () => {
    return (
        <Box className="flex"
            sx={{
                backgroundColor: "primary.light",
                justifyContent: "space-between",
                color: "primary.dark",
                height: { md: "85px", sm: "45px" },
                padding: "0 80px"
            }}>
            <Box className="flex" sx={{ columnGap: "10px" }}  >
                <Typography>LOGO</Typography>
                <Typography>CỬA HÀNG TƯ HƯỜNG</Typography>
            </Box>
            <Box className="flex" sx={{ columnGap: "20px" }}>
                <Box>HOME</Box>
                <Box>ABOUT</Box>
                <Box>CONTACT</Box>
            </Box>
        </Box >

    )
}