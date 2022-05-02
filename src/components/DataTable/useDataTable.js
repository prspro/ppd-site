import { useSelector } from 'react-redux';

const useDataTable = () => {

    const filterValue = useSelector((state) => state.ppd.filterValue);
    const dataList = useSelector((state) => state.ppd.list).filter( (entry) => {
        return entry.id.includes(filterValue);
    });

    return {
        dataList
    };
}

export default useDataTable;
