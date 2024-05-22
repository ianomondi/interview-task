import { atom } from "recoil";

const workOrderSummary = atom({
  key: "workOrderSummary",
  default: {},
});

const workOrderAssets = atom({
  key: "workOrderAssets",
  default: {},
});

const workOrderDetails = atom({
  key: "workOrderDetails",
  default: [],
});

const workOrderInformation = atom({
  key: "workOrderInformation",
  default: [],
});

const locatonAndAssetCategoryIds = atom({
  key: "locatonAndAssetCategoryIds",
  default: [],
});

const projectParts = atom({
  key: "projectParts",
  default: [],
});

export default {
  workOrderDetails,
  workOrderAssets,
  workOrderInformation,
  workOrderSummary,
  locatonAndAssetCategoryIds,
  projectParts,
};
