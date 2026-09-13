import { z } from "zod";

export const vehicleSchema = z.object({
  customerId: z.coerce.number().int().positive(),
  brand: z.string().min(1, "Hãng xe là bắt buộc"),
  model: z.string().min(1, "Model xe là bắt buộc"),
  licensePlate: z.string().min(5, "Biển số không hợp lệ"),
  year: z.coerce.number().int().min(1900).max(2100).optional(),
  mileage: z.coerce.number().int().min(0).optional()
});

export type VehicleInput = z.infer<typeof vehicleSchema>;
