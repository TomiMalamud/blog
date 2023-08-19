interface ArgentineFormattedDateProps {
  date: string; // Assuming the date is provided as an ISO string
}

const ArgentineFormattedDate: React.FC<ArgentineFormattedDateProps> = ({
  date
}) => {
  const formattedDate = new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long"
  }).format(new Date(date));
  return (
    <time dateTime={date} className="text-gray-500">
      {formattedDate}
    </time>
  );
};

export default ArgentineFormattedDate;
