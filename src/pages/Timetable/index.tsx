import { useCallback, useEffect, useMemo } from "react";
import "./styles.scss";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addEvent } from "src/store/components/timetable/timetableSlice";
import { useSelector } from "react-redux";
import { getEventList } from "src/store/selector/RootSelector";
import { openModal } from "src/store/components/customModal/modalSlice";
import { useNavigate } from "react-router-dom";

const classNamePrefix = "timetable";

const Timetable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventList = useSelector(getEventList);

  const localizer = momentLocalizer(moment);

  const handleSelectSlot = useCallback(
    ({ start, end }: any) => {
      dispatch(
        openModal({
          template: "event-create-view",
          data: { start, end },
        })
      );
    },
    [dispatch]
  );

  const handleSelectEvent = useCallback(
    (event: any) => {
      dispatch(
        openModal({
          template: "event-edit-view",
          size: "normal",
          data: event,
        })
      );
    },
    [dispatch]
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2023, 8, 13),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  useEffect(() => {
    const isLogin = localStorage.getItem("is-login");

    if (isLogin !== "true") navigate("/auth");
  }, []);

  return (
    <div className={classNamePrefix}>
      <Calendar
        defaultDate={defaultDate}
        defaultView={Views.WEEK}
        events={eventList}
        localizer={localizer}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
      />
    </div>
  );
};

export default Timetable;
