import { Response, Request, NextFunction } from "express";

interface ValidationError {
    errors: {
        message: string;
    }[];
}

export const validateSchema = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        // return res.status(400).send({ message: error.errors[0] });
        console.log(">>>>> error", error.errors);
        return res
            .status(400)
            .json({ error: error.errors.map((err: any) => err.message) });
    }
}