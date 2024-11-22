import { Box, useTheme } from "@mui/material";

export function SpanButton(props: { children: React.ReactNode, onClick: () => void }) {
    const { children, onClick } = props;
    const theme = useTheme();
    const hoverColor = theme.palette.primary.main;
    return <Box
        component="span"
        onClick={onClick}
        sx={{
            cursor: "pointer",
            "&:hover": { color: hoverColor }
        }}
    >
        {children}
    </Box>
}
