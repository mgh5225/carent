import { rents } from "./axios";

export const status_type = {
  request: "R",
  in_rent: "I",
  expired: "E",
  denied: "D",
  pending: "P",
};

export const rent = ({ advert_id, start_date, end_date, description }) => {
  return async () => {
    const { data } = await rents.post("/", {
      car: advert_id,
      start_date,
      end_date,
      desc: description,
    });
    return data;
  };
};

export const get_my_rents_in = ({ page, limit, advert_id }) => {
  return async () => {
    console.log(advert_id);
    const { data } = await rents.get("/my/", {
      params: {
        page,
        limit,
        owner: 1,
        rentalcar: advert_id,
      },
    });

    return data;
  };
};

export const get_my_rents_out = ({ page, limit }) => {
  return async () => {
    const { data } = await rents.get("/my/", {
      params: {
        page,
        limit,
        owner: 0,
      },
    });

    if (Array.isArray(data)) {
      for (const i in data) {
        data[i].image = `https://source.unsplash.com/400x304/?car&sig=${i}`;
        data[i].vehicleType = data[i].car.type;
        data[i].status = data[i].rent_status;
        data[i].rental_daily_rate = data[i].car.rental_daily_rate;
      }
    }

    return data;
  };
};

export const change_status = ({ rent_id, status }) => {
  return async () => {
    const { data } = rents.patch(`/${rent_id}/`, {
      status: status,
    });

    return data;
  };
};
