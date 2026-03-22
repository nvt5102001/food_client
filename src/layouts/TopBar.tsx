
import { Box, Typography } from '@mui/material'
import { Icon } from "../assets/icon"

export const TopBarApp = () => {
    return (
        <Box className="flex"
            sx={{
                backgroundColor: "primary.dark",
                justifyContent: "space-between",
                color: "primary.light",
                height: { lg: "45px" },
                padding: "0 80px"
            }}>
            <Box className="flex" sx={{ columnGap: "10px" }}  >
                <Icon.LocalPhoneIcon sx={{ fontSize: "20px" }} />
                <Typography>0989308772</Typography>
            </Box>
            <Box className="flex" sx={{ columnGap: "10px" }}>
                <Box className="flex box__icon" >
                    <Icon.FacebookIcon />
                </Box>
                <Box className="flex box__icon" >
                    <Icon.YouTubeIcon />
                </Box>
            </Box>
        </Box >

    )
}