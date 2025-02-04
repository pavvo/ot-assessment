import { z } from 'zod';

import { accountSchema } from './schema';

export type AccountFormData = z.infer<typeof accountSchema>;
