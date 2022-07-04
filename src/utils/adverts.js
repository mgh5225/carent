import { adverts } from "./axios";

export const create_advert = ({
  car: {
    type,
    creation_date,
    mileage_rate,
    value,
    plate_1,
    plate_2,
    plate_3,
    plate_4,
    color,
  },
  rental_time,
  rental_daily_rate,
  deposit_amount,
  city,
  delivery_location,
  return_location,
}) => {
  return async () => {
    const { data } = await adverts.post("/", {
      type,
      creation_date,
      mileage_rate,
      value,
      plate_1,
      plate_2,
      plate_3,
      plate_4,
      color,
      rental_time,
      rental_daily_rate,
      deposit_amount,
      city,
      delivery_location,
      return_location,
    });
    return data;
  };
};

export const update_advert = ({
  advert_id,
  car: {
    type,
    creation_date,
    mileage_rate,
    value,
    plate_1,
    plate_2,
    plate_3,
    plate_4,
    color,
  },
  rental_time,
  rental_daily_rate,
  deposit_amount,
  city,
  delivery_location,
  return_location,
}) => {
  return async () => {
    const { data } = await adverts.patch(`/${advert_id}/`, {
      type,
      creation_date,
      mileage_rate,
      value,
      plate_1,
      plate_2,
      plate_3,
      plate_4,
      color,
      rental_time,
      rental_daily_rate,
      deposit_amount,
      city,
      delivery_location,
      return_location,
    });
    return data;
  };
};

export const get_adverts = ({
  page,
  limit,
  car_type,
  city,
  rental_daily_rate,
}) => {
  return async () => {
    const { data } = await adverts.get("/", {
      params: {
        page,
        limit,
        car_type,
        city,
        rental_daily_rate,
      },
    });

    if (Array.isArray(data)) {
      for (const i in data) {
        data[i].image = `https://source.unsplash.com/400x304/?car&sig=${i}`;
        data[i].vehicleType = data[i].type;
      }
    }
    return data;
  };
};

export const get_my_adverts = ({ page, limit }) => {
  return async () => {
    const { data } = await adverts.get("/my/", {
      params: {
        page,
        limit,
      },
    });

    if (Array.isArray(data)) {
      for (const i in data) {
        data[i].image = `https://source.unsplash.com/400x304/?car&sig=${i}`;
        data[i].vehicleType = data[i].type;
      }
    }
    return data;
  };
};
