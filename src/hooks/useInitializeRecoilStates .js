import { useRecoilState } from "recoil";
import store from "../context";

const useInitializeRecoilStates = () => {
  //  Recoil States for the WorkOrderDetails page>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [workOrderSummary, setWorkOrderSummary] = useRecoilState(
    store.workOrderSummary
  );
  const [addPartShow, setAddPartShow] = useRecoilState(store.addPartShow);
  const [selectedWork, setSelectedWork] = useRecoilState(store.selectedWork);
  const [selectedTeam, setSelectedTeam] = useRecoilState(store.selectedTeam);
  const [selectedAssignWorker, setSelectedAssignWorker] = useRecoilState(
    store.selectedAssignWorker
  );
  const [selectedPart, setSelectedPart] = useRecoilState(store.selectedPart);
  const [workData, setWorkData] = useRecoilState(store.workData);
  const [priorityData, setPriorityData] = useRecoilState(store.priorityData);
  const [teamData, setTeamData] = useRecoilState(store.teamData);
  const [workOrderTitle, setWorkOrderTitle] = useRecoilState(
    store.workOrderTitle
  );
  const [workOrderDescription, setWorkOrderDescription] = useRecoilState(
    store.workOrderDescription
  );
  const [assignWorkerData, setAssignWorkerData] = useRecoilState(
    store.assignWorkerData
  );
  const [checklistItemsData, setChecklistItemsData] = useRecoilState(
    store.checklistItemsData
  );
  const [selectedCheckList, setSelectedCheckList] = useRecoilState(
    store.selectedCheckList
  );
  const [estimateHours, setEstimateHours] = useRecoilState(store.estimateHours);
  const [isSigned, setIsSigned] = useRecoilState(store.isSigned);
  const [selectedPriority, setSelectedPriority] = useRecoilState(
    store.selectedPriority
  );
  const [projectParts, setProjectParts] = useRecoilState(store.projectParts);
  // end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Start of Recoil States for the WorkOrderAssets page>>>>>>>>>>>>>>>>>>>>>>
  const [locatonAndAssetCategoryIds, setLocatonAndAssetCategoryIds] =
    useRecoilState(store.locatonAndAssetCategoryIds);
  const [selectedAssets, setSelectedAssets] = useRecoilState(
    store.selectedAssets
  );
  const [selectedLocation, setSelectedLocation] = useRecoilState(
    store.selectedLocation
  );
  const [selectedAssetCategory, setSelectedAssetCategory] = useRecoilState(
    store.selectedAssetCategory
  );
  // end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return {
    workOrderSummary,
    setWorkOrderSummary,
    addPartShow,
    setAddPartShow,
    selectedWork,
    setSelectedWork,
    selectedTeam,
    setSelectedTeam,
    selectedAssignWorker,
    setSelectedAssignWorker,
    selectedPart,
    setSelectedPart,
    workData,
    setWorkData,
    priorityData,
    setPriorityData,
    teamData,
    setTeamData,
    workOrderTitle,
    setWorkOrderTitle,
    workOrderDescription,
    setWorkOrderDescription,
    assignWorkerData,
    setAssignWorkerData,
    checklistItemsData,
    setChecklistItemsData,
    selectedCheckList,
    setSelectedCheckList,
    estimateHours,
    setEstimateHours,
    isSigned,
    setIsSigned,
    selectedPriority,
    setSelectedPriority,
    projectParts,
    setProjectParts,
    locatonAndAssetCategoryIds,
    setLocatonAndAssetCategoryIds,
    selectedAssets,
    setSelectedAssets,
    selectedLocation,
    setSelectedLocation,
    selectedAssetCategory,
    setSelectedAssetCategory,
  };
};

export default useInitializeRecoilStates;
