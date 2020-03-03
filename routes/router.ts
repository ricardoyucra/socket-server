import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Correcto'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    const body = req.body;

    res.json({
        ok: true,
        body
    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const body = req.body;
    const id = req.params.id;

    res.json({
        ok: true,
        body,
        id
    });

});

export default router;