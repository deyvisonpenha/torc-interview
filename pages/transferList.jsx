import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from '@mui/material/Paper';

export default function TransferList() {
  const [lists, setLists] = useState([
    { title: "Device", items: ["laptop", "smartphone"] },
    { title: "food", items: ["bread", "chicken"] },
    { title: "List 1", items: ["item 1", "item2"] },
  ]);

  function handleAddItem(index) {
    const input = window.prompt("Add new item");
    const newLists = [...lists];
    newLists[index].items.push(input);
    setLists(newLists);
  }

  function moveItem(item, fromIndex, toIndex) {
    const newLists = [...lists];
    newLists[fromIndex].items = newLists[fromIndex].items.filter(
      (i) => i !== item
    );
    newLists[toIndex].items.unshift(item);
    setLists(newLists);
  }

  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

  return (
    <Box sx={{ display: "flex", gap: 10 }}>
      {lists.map((list, index) => (
        <Paper elevation={4} sx={{display:"flex", flexDirection: "column", width: 400 }} key={list.title}>
          <Typography
            component="h1"
            sx={{
              fontSize: "1.5rem",
              py: 1,
              color: "#fff",
              backgroundColor: randColor(),
              textAlign: "center"
            }}
          >
            {list.title}
          </Typography>
          <List>
            {list.items.map((item) => (
              <ListItem
                key={item}
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  px: 0,
                }}
              >
                <Button
                  variant="text"
                  sx={{ padding: 0 }}
                  onClick={() =>
                    index > 0 ? moveItem(item, index, index - 1) : null
                  }
                >
                  <ArrowBackIos
                    fontSize="small"
                    color={index > 0 ? "primary" : "disabled"}
                  />
                </Button>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  {item}
                </Typography>

                <Button
                  variant="text"
                  sx={{ padding: 0 }}
                  onClick={() =>
                    index < lists.length - 1
                      ? moveItem(item, index, index + 1)
                      : null
                  }
                >
                  <ArrowForwardIos
                    fontSize="small"
                    color={index < lists.length - 1 ? "primary" : "disabled"}
                  />
                </Button>
              </ListItem>
            ))}
          </List>
          <Button sx={{justifySelf: "center", mx: 6, my: 3}} variant="outlined" onClick={() => handleAddItem(index)}>+ Add a Task</Button>
        </Paper>
      ))}
    </Box>
  );
}
