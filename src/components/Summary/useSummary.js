import { useSelector } from "react-redux";

const useSummary = () => {
  const dataList = useSelector((state) => state.ppd.list);

  const viewsCount = dataList.reduce((prev, current) => {
    return prev + current.views;
  }, 0);

  const totalAdsCount = dataList.length;

  return {
    viewsCount,
    totalAdsCount,
  };
};

export default useSummary;
