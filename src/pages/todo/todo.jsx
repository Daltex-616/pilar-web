import React, { useEffect } from "react";
import {
    Grid,
    Paper,
    Box,
    Button
} from "@mui/material";

const Todo = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box p={10}>
                        Todo  <Button variant="contained" color="success">container</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Todo;
