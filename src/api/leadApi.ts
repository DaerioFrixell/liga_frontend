import { $host } from "../core/url"

// what is "lead"????
export const createLead = async (lead: any) => {
  const { data } = await $host.post("api/lead", lead)
  return data
}

export const fetchFeedbacks = async () => {
  const { data } = await $host.get("api/lead")
  return data
}