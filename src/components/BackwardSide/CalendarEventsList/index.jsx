import { useEffect, useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import dateBuilder from "../../../utils/dateBuilder";
import { ListItem, ListWrapper, Wrapper } from "./components";

const CalendarEventsList = () => {
  const [events, setEvents] = useState([]);

  const printCalendarEvents = (events) => {
    return events.map((item) => {
      const date = new Date(item.start.dateTime);
      return (
        <ListItem key={item.htmlLink} href={item.htmlLink}>
          <Wrapper>{dateBuilder(date)}</Wrapper>
        </ListItem>
      );
    });
  };

  useEffect(() => {
    if (ApiCalendar.sign)
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        setEvents(result.items);
      });
  }, [ApiCalendar.sign]);

  return <ListWrapper>{printCalendarEvents(events)}</ListWrapper>;
};

export default CalendarEventsList;
