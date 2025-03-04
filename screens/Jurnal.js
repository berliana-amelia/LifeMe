import React, { useState } from 'react'
import { Box, Text } from 'native-base'
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


const Jurnal = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    const items = items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  const renderItem = (item) => {

  }

  return(
    <Box flex={1}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-01-25'}
        renderItem ={renderItem}
      />
    </Box>
  )
}
export default Jurnal
