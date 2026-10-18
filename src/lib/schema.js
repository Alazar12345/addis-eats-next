// src/lib/schema.js

import { z } from "zod";

export const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .min(10, "Phone number is too short"),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters"),
});