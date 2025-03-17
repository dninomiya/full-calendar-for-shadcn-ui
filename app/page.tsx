import { ModeToggle } from "@/components/theme-toggle"
import {
  Calendar,
  CalendarCurrentDate,
  CalendarDayView,
  CalendarMonthView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
  CalendarViewTrigger,
  CalendarWeekView,
  CalendarYearView,
} from "@/components/ui/full-calendar"
import { addHours } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Page() {
  return (
    <Calendar
      events={[
        {
          id: "1",
          start: new Date(),
          end: addHours(new Date(), 2),
          title: "event A",
          color: "pink",
        },
        {
          id: "2",
          start: addHours(new Date(), 1.5),
          end: addHours(new Date(), 3),
          title: "event B",
          color: "blue",
        },
        {
          id: "3",
          fullDate: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDay() + 1,
          ),
          title: "Full Day Event",
          color: "green",
        },
      ]}
    >
      <div className="h-dvh p-14 flex flex-col">
        <div className="flex px-6 items-center gap-2 mb-6">
          <CalendarViewTrigger
            className="aria-[current=true]:bg-accent"
            view="day"
          >
            Day
          </CalendarViewTrigger>
          <CalendarViewTrigger
            view="week"
            className="aria-[current=true]:bg-accent"
          >
            Week
          </CalendarViewTrigger>
          <CalendarViewTrigger
            view="month"
            className="aria-[current=true]:bg-accent"
          >
            Month
          </CalendarViewTrigger>
          <CalendarViewTrigger
            view="year"
            className="aria-[current=true]:bg-accent"
          >
            Year
          </CalendarViewTrigger>

          <span className="flex-1" />

          <CalendarCurrentDate />

          <CalendarPrevTrigger>
            <ChevronLeft size={20} />
            <span className="sr-only">Previous</span>
          </CalendarPrevTrigger>

          <CalendarTodayTrigger>Today</CalendarTodayTrigger>

          <CalendarNextTrigger>
            <ChevronRight size={20} />
            <span className="sr-only">Next</span>
          </CalendarNextTrigger>

          <ModeToggle />
        </div>

        <div className="flex-1 px-6 overflow-hidden">
          <CalendarDayView />
          <CalendarWeekView />
          <CalendarMonthView />
          <CalendarYearView />
        </div>
      </div>
    </Calendar>
  )
}
