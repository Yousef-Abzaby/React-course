import dayjs from "dayjs";

export function DeliveryDate({ selctedDeliveryOption }) {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selctedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
