const splitTime = (numberOfMinutes: number): { Days: number; Hours: number; Minutes: number } => {
  const minutesInDay = 24 * 60;
  const minutesInHour = 60;
  const days = Math.floor(numberOfMinutes / minutesInDay);
  const remainingMinutes = numberOfMinutes % minutesInDay;
  const hours = Math.floor(remainingMinutes / minutesInHour);
  const minutes = remainingMinutes % minutesInHour;

  return { Days: days, Hours: hours, Minutes: minutes };
};

export { splitTime };
