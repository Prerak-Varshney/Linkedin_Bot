import { config } from 'dotenv';

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
    AUTH_EMAIL,
    AUTH_PASSWORD,
    AUTH_JOBTITLE,
    AUTH_LOCATION,
    GLOBAL_WAIT_TIME_BETWEEN_LOCAL_EVENTS,
    GLOBAL_WAIT_TIME_FOR_SELECTORS
} = process.env;