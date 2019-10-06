/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import Booking from '../models/Booking';

export default {
    async store(req: Request, res: Response) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking
            .populate('spot')
            .populate('user')
            .execPopulate();

        return res.json(booking);
    },
};
