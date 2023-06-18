import TimelineEvent from "./timeline-event"

const Timeline = ({ data }: any) => {
  return (
    <div className="border-l-2 border-muted ml-3 mt-3 py-16 space-y-14">
      {data.map((event: any, index: any) => (
        <TimelineEvent
          key={event.id}
          date={event.date}
          event={event.event}
          desc={event.desc}
          where={event.where}
          img={event.img}
        />
      ))}
    </div>
  )
}

export default Timeline
