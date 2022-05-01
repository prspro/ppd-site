import { useSelector } from 'react-redux';


const useDataTable = () => {

    const dataList = useSelector((state) => state.ppd.list);

    return {
        dataList
    };
}

export default useDataTable;
