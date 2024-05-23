import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asset: "",
  location: "",
  locationId: null,
  assetCategory: "",
  assetCategoryId: null,
  selectedAssets: [],
  assetListIds: [],
  ticketTitle: "",
  ticketDescription: "",
  assignedTeam: {},
  assignedUser: {},
  signatureRequiredToCompleteWork: false,
  estimatedHours: null,
  projectedParts: [],
  checklistIds: [],
  ticketPriorityId: null,
  ticketPriority: "",
  files: [],
  categoryOfWorkId: null,
  categoryOfWork: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload.location;
      state.locationId = action.payload.locationId;
    },
    setAssetCategory: (state, action) => {
      state.assetCategory = action.payload.assetCategory;
      state.assetCategoryId = action.payload.assetCategoryId;
    },
    setCategory: (state, action) => {
      state.categoryOfWork = action.payload.categoryOfWork;
      state.categoryOfWorkId = action.payload.categoryOfWorkId;
    },
    setSelectedAssets: (state, action) => {
      state.selectedAssets = action.payload;
    },
    addSelectedAssets: (state, action) => {
      state.selectedAssets.push(action.payload);
    },
    removeSelectedAsset: (state, action) => {
      state.selectedAssets = state.selectedAssets.filter(
        (asset) => asset !== action.payload
      );
    },
    setAssetListId: (state, action) => {
      state.assetListIds = action.payload;
    },
    addAssetListId: (state, action) => {
      state.assetListIds.push(action.payload);
    },
    removeAssetListId: (state, action) => {
      state.assetListIds = state.assetListIds.filter(
        (id) => id !== action.payload
      );
    },
    setTicketTitle: (state, action) => {
      state.ticketTitle = action.payload;
    },
    setTicketDescription: (state, action) => {
      state.ticketDescription = action.payload;
    },
    setAssignedTeam: (state, action) => {
      state.assignedTeam = action.payload;
    },
    setAssignedUser: (state, action) => {
      state.assignedUser = action.payload;
    },
    setSignatureRequired: (state, action) => {
      state.signatureRequiredToCompleteWork = action.payload;
    },
    setEstimatedHours: (state, action) => {
      state.estimatedHours = action.payload;
    },
    setProjectedParts: (state, action) => {
      state.projectedParts = action.payload;
    },
    setChecklistIds: (state, action) => {
      state.checklistIds = action.payload;
    },
    setTicketPriority: (state, action) => {
      state.ticketPriorityId = action.payload.priorityId;
      state.ticketPriority = action.payload.priority;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    addFile: (state, action) => {
      state.files.push(action.payload);
    },
    deleteFile: (state, action) => {
      state.files = state.files.filter(
        (file) => file.fileName !== action.payload
      );
    },
    addProjectedPart: (state, action) => {
      state.projectedParts.push(action.payload);
    },
    addChecklistId: (state, action) => {
      state.checklistIds.push(action.payload);
    },
    removeChecklistId: (state, action) => {
      state.checklistIds = state.checklistIds.filter(
        (id) => id !== action.payload
      );
    },
    resetForm: () => initialState,
  },
});

export const {
  setLocation,
  setAssetCategory,
  setSelectedAssets,
  setTicketTitle,
  setTicketDescription,
  setAssignedTeam,
  setAssignedUser,
  setSignatureRequired,
  setEstimatedHours,
  setProjectedParts,
  setChecklistIds,
  setTicketPriority,
  setFiles,
  setCategory,
  addFile,
  deleteFile,
  addProjectedPart,
  resetForm,
  addChecklistId,
  removeChecklistId,
  setAssetListId,
  addAssetListId,
  addSelectedAssets,
  removeAssetListId,
  removeSelectedAsset,
} = formSlice.actions;

export default formSlice.reducer;
