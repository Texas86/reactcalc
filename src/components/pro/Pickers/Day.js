import React from "react";
import format from "date-fns/format";
import Button from "../../Button";

const Day = ({ day }) => {
  return (
    <div>
      <Button floating>{format(day, "D")}</Button>
    </div>
  );
};

export default Day;
