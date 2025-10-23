import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

export const applySecurity = (app: any) => {
  app.use(helmet());
  app.use(cors({ origin: [/hoverla\.vercel\.app$/, /hoverlaplzen\.cz$/], credentials: false }));
  app.use(morgan('tiny'));

  const limiter = rateLimit({ windowMs: 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });
  app.use('/api/', limiter);
};
