import { usePlanFetch } from './usePlanFetch';
import { useResultsFetch } from './useResultsFetch';

export default () => {
    usePlanFetch();
    useResultsFetch();
    return null;
}
