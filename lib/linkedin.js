import loginToLinkedIn from './login.js';
import searchJobs from './searchJobs.js';

export default async function linkedinBot( page ){
    await loginToLinkedIn(page);
    await searchJobs(page);
}