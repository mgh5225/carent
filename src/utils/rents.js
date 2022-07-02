import { rents } from "./axios";

export const rent = ({ advert_id, start_date, end_date }) => {
  return async () => {
    const { data } = await rents.post("/", {
      advert_id,
      start_date,
      end_date,
    });
    return data;
  };
};

export const get_my_rents_in = ({ page, limit, advert_id }) => {
  return async () => {
    const { data } = await rents.get("/my/in/", {
      params: {
        page,
        limit,
        advert_id,
      },
    });

    return data;
  };
};

export const get_my_rents_out = ({ page, limit }) => {
  return async () => {
    const { data } = await rents.get("/my/out/", {
      params: {
        page,
        limit,
      },
    });

    return data;
  };
};

export const change_rent = ({ advert_id, client_id, status }) => {
  return async () => {
    const { data } = rents.patch("/", {
      advert_id,
      client_id,
      status,
    });

    return data;
  };
};
