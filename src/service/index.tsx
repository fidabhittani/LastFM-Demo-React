import axios from "axios";
import React from "react";
import { setLoading, resetLoading } from "actions";
import { API_HOSTS } from "config/api";
import { dispatch } from "store";
import toast from "toasted-notes";
import Message from "components/ui/message";
/** SERVICE : This service will be use to handle api calls and trigger loaders
 * This will be an abstraction to actually dispatch messages onto the store if we encounter any errors
 * in API calls
 */

const axiosDefaults = {
  method: "get"
};

export default async (options: any) => {
  const { host = "APP", context = "app", ...clientOptions } = options;

  const { [host]: API_HOST }: any = API_HOSTS;

  const axiosOptions = {
    ...axiosDefaults,
    ...clientOptions,
    url: `${API_HOST}/${clientOptions.url}`
  };

  try {
    dispatch(setLoading({ status: true, text: "Loading" }, context));
    const response = await axios(axiosOptions);
    return response;
  } catch (error) {
    toast.notify(
      ({ onClose }) => (
        <Message className="error" onClose={onClose}>
          Something went wrong with Server/Network!
        </Message>
      ),
      { position: "top-left" }
    );
  } finally {
    dispatch(resetLoading(context));
  }
  return {};
};
