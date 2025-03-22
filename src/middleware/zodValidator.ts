import { Request } from 'express';
import z, { ZodError } from 'zod';

const zodValidator = (schema: z.Schema) => (req: Request, res, next) => {
  try {
    req.body = schema.parse(req.body);
  } catch (error) {
    if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      next(error); // Pass other errors to the global error handler
  }
};

export default zodValidator;