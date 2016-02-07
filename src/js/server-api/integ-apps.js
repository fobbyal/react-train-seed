import ajax from '../util/ajax';


export const getAllApps = () => ajax().get('/api');
