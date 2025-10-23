import express from 'express';
import bodyParser from 'body-parser';
import contactRoute from './routes/contact';
import { applySecurity } from './security';

const app = express();
app.use(bodyParser.json());
applySecurity(app);

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
