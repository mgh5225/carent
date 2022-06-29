import { adverts } from "./axios";

export const create_advert = ({
  car: {
    type,
    creation_date,
    milelage_rate,
    value,
    plate_1,
    plate_2,
    plate_3,
    plate_4,
    color,
    owner,
    photo,
    birth_certificate,
    insurance,
    deed,
  },
  rental_time,
  rental_daily_rate,
  deposit_amount,
  city,
  delivery_location,
  return_location,
}) => {
  return async () => {
    const car = {
      type,
      creation_date,
      milelage_rate,
      value,
      plate_1,
      plate_2,
      plate_3,
      plate_4,
      color,
      owner,
    };

    const advert = {
      rental_time,
      rental_daily_rate,
      deposit_amount,
      city,
      delivery_location,
      return_location,
    };

    const car_blob = new Blob([JSON.stringify(car)], {
      type: "application/json",
    });

    const advert_blob = new Blob([JSON.stringify(advert)], {
      type: "application/json",
    });

    const form = new FormData();

    form.append("photo", photo);
    form.append("birth_certificate", birth_certificate);
    form.append("insurance", insurance);
    form.append("deed", deed);
    form.append("car", car_blob);
    form.append("advert", advert_blob);

    const { data } = await adverts.post("/", form);
    return data;
  };
};

export const update_advert = ({
  advert_id,
  car: {
    type,
    creation_date,
    milelage_rate,
    value,
    plate_1,
    plate_2,
    plate_3,
    plate_4,
    color,
    owner,
    photo,
    birth_certificate,
    insurance,
    deed,
  },
  rental_time,
  rental_daily_rate,
  deposit_amount,
  city,
  delivery_location,
  return_location,
}) => {
  return async () => {
    const car = {
      type,
      creation_date,
      milelage_rate,
      value,
      plate_1,
      plate_2,
      plate_3,
      plate_4,
      color,
      owner,
    };

    const advert = {
      rental_time,
      rental_daily_rate,
      deposit_amount,
      city,
      delivery_location,
      return_location,
    };

    const car_blob = new Blob([JSON.stringify(car)], {
      type: "application/json",
    });

    const advert_blob = new Blob([JSON.stringify(advert)], {
      type: "application/json",
    });

    const form = new FormData();

    form.append("photo", photo);
    form.append("birth_certificate", birth_certificate);
    form.append("insurance", insurance);
    form.append("deed", deed);
    form.append("car", car_blob);
    form.append("advert", advert_blob);

    const { data } = await adverts.patch(`/${advert_id}`, form);
    return data;
  };
};

export const get_last_car = () => {
  return async () => {
    const { data } = await adverts.get("/last-car/");
    return data;
  };
};
