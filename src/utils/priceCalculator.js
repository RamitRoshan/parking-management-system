const calculatePrice = (vehicleType, entryTime, exitTime) => {
  const diffMillsec = exitTime - entryTime;

  let hours = Math.ceil(diffMillsec / (1000 * 60 * 60));

  let amount = 0;

  if (vehicleType === "bike") {
    amount = 10 + (hours - 1) * 5;

  } else if (vehicleType === "car") {
    amount = 20 + (hours - 1) * 10;

  } else if (vehicleType === "truck") {
    
    amount = 30 + (hours - 1) * 15;
  }

  return amount;
};

module.exports = calculatePrice;


