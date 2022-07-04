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
      rentalcar: advert_id,
      start_date,
      end_date,
      description,
    });
    return data;
  };
};

export const get_my_rents_in = ({ page, limit, advert_id }) => {
  return async () => {
    const { data } = await rents.get("/my/", {
      params: {
        page,
        limit,
        rentalcar: advert_id,
        owener: 1,
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

    return data;
  };
};

export const change_status = ({ rent_id, status }) => {
  return async () => {
    const { data } = rents.patch(`/${rent_id}/`, {
      status,
    });

    return data;
  };
};
