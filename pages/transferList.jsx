import React, {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowBackIos } from '@mui/icons-material';
import Button from '@mui/material/Button';

export default function TransferList() {
  const [lists, setLists] = useState([
    {title: "Device", items: ["laptop", "smartphone"]},
    {title: "food", items: ["bread", "chicken"]},
    {title: "List 1", items: ["item 1", "item2"]}
  ]);

  function handleAddItem (index) {
    const input = window.prompt("Add new item")
    const newLists = [...lists];
    newLists[index].items.push(input)
    setLists(newLists);
  }

  function moveItem (item, fromIndex, toIndex) {
    const newLists = [...lists];
    newLists[fromIndex].items = newLists[fromIndex].items.filter(i => i !== item)
    newLists[toIndex].items.unshift(item);
    setLists(newLists)
  }

  return (
  <Box sx={{display: "flex", gap: 10}} >
    {lists.map((list,index)=> (
      <div key={list.title}>
        <Typography component="h1" sx={{fontSize: "1.5rem", padding: 2, color: "#fff", backgroundColor: "blue"}}>{list.title}</Typography>
        <ul style={{listStyleType: "none"}}>
          {list.items.map(item=> (
            <li key={item}>
                <button onClick={()=> moveItem(item, index, index-1)}>
                  <ArrowBackIos color={index > 0 ? "primary" : "disabled"}/>
                </button>
              {item}
              {index < lists.length -1 && (
                <button onClick={()=> moveItem(item, index, index+1)}>{">"}</button>
              )}
            </li>
          ) )}
        </ul>
        <button onClick={()=> handleAddItem(index)}>Add Item</button>
      </div>
    ))}
  </Box>
  )
}