import { atom } from "recoil";

const workOrderSummary = atom({
  key: "workOrderSummary",
  default: {},
});

const addPartShow = atom({
  key: "addPartShow",
  default: false,
});

const selectedWork = atom({
  key: "selectedWork",
  default: "Select",
});

const selectedTeam = atom({
  key: "selectedTeam",
  default: "Select",
});

const selectedAssignWorker = atom({
  key: "selectedAssignWorker",
  default: "Select",
});

const selectedPart = atom({
  key: "selectedPart",
  default: [],
});

const workData = atom({
  key: "workData",
  default: [],
});

const priorityData = atom({
  key: "priorityData",
  default: [],
});

const teamData = atom({
  key: "teamData",
  default: [],
});

const assignWorkerData = atom({
  key: "assignWorkerData",
  default: [],
});

const checklistItemsData = atom({
  key: "checklistItemsData",
  default: [],
});

const locationData = atom({
  key: "locationData",
  default: [],
});

const assetData = atom({
  key: "assetData",
  default: [],
});

const assetCheckData = atom({
  key: "assetCheckData",
  default: [],
});

const selectedCheckList = atom({
  key: "selectedCheckList",
  default: [],
});

const estimateHours = atom({
  key: "estimateHours",
  default: null,
});

const isSigned = atom({
  key: "isSigned",
  default: false,
});

const selectedPriority = atom({
  key: "selectedPriority",
  default: null,
});

const selectedAssets = atom({
  key: "selectedAssets",
  default: [],
});

const selectedLocation = atom({
  key: "selectedLocation",
  default: "Select",
});

const selectedAssetCategory = atom({
  key: "selectedAssetCategory",
  default: "Select",
});

const locatonAndAssetCategoryIds = atom({
  key: "locatonAndAssetCategoryIds",
  default: [],
});

const projectParts = atom({
  key: "projectParts",
  default: [],
});

const workOrderTitle = atom({
  key: "workOrderTitle",
  default: [],
});

const workOrderDescription = atom({
  key: "workOrderDescription",
  default: [],
});

const attachments = atom({
  key: "attachments",
  default: [],
});

export default {
  workOrderSummary,
  addPartShow,
  selectedWork,
  selectedTeam,
  selectedAssignWorker,
  selectedPart,
  selectedCheckList,
  estimateHours,
  isSigned,
  selectedPriority,
  selectedAssets,
  selectedLocation,
  selectedAssetCategory,
  locatonAndAssetCategoryIds,
  projectParts,
  workData,
  priorityData,
  teamData,
  assignWorkerData,
  checklistItemsData,
  locationData,
  assetData,
  assetCheckData,
  workOrderTitle,
  workOrderDescription,
  attachments,
};
