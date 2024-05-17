import { debounce } from "lodash";

//Define Service Base URL
export const BASE_URL = "https://saharadeskbackendpm.azurewebsites.net/api/";
export const BASE_URL1 = "https://saharadeskbackendpm.azurewebsites.net/api/";

// 'https://localhost:7160/api/Checklists/GetRoutineInspectionScheduleCategories?PageSize=10&PageNumber=1&Search=compressors&AssetCategory=5

// Authentication API

export const SEND_OTP = BASE_URL + "Auth/SendTOTP";
export const VERIFY_OTP = BASE_URL + "Auth/VerifyTOTP";
export const RESSET_PASSWORD = BASE_URL + "Auth/ResetPasswordWithOTP";


export const GET_INSPECTION_CATEGORIES = (
  pageSize,
  pageNumber,
  search,
  assetCategory
) => {
  if (search && assetCategory) {
    return (
      BASE_URL +
      `Checklists/GetRoutineInspectionScheduleCategories?PageSize=${pageSize}&PageNumber=${pageNumber}&Search=${search}&AssetCategory=${assetCategory}`
    );
  }
  if (search) {
    return (
      BASE_URL +
      `Checklists/GetRoutineInspectionScheduleCategories?PageSize=${pageSize}&PageNumber=${pageNumber}&Search=${search}`
    );
  }
  if (assetCategory) {
    return (
      BASE_URL +
      `Checklists/GetRoutineInspectionScheduleCategories?PageSize=${pageSize}&PageNumber=${pageNumber}&AssetCategory=${assetCategory}`
    );
  }
  return (
    BASE_URL +
    `Checklists/GetRoutineInspectionScheduleCategories?PageSize=${pageSize}&PageNumber=${pageNumber}`
  );
};
export const GET_INSPECTION_CATEGORY_BY_ID = (id) =>
  BASE_URL + `Checklists/GetInspectionCategoryById?CategoryId=${id}`;
export const GET_INSPECTION_BY_ASETID_AND_STATUS =
  BASE_URL +
  "Checklists/GetRoutineInspectionTransactionByStatusandAssetId?PageNumber=1&PageSize=2&Status=New&AssetId=";
export const GET_INSPECTION_BY_ASETID_AND_STATUSES = (assetId, status) =>
  BASE_URL +
  `Checklists/GetAssetTransactionsById?PageNumber=1&PageSize=10&Status=${status}&AssetId=${assetId}`;
export const GET_ASSET_TRANSACTION_BY_ID = (
  assetId,
  status,
  pageNumber,
  pageSize
) =>
  BASE_URL +
  `Checklists/GetAssetTransactionsById?AssetId=53&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
export const GET_ROUTINE_INSPECTIONS_BY_CATEGORY_ID = (
  categoryId,
  status,
  pageNumber,
  pageSize
) =>
  BASE_URL +
  `Checklists/GetAssetTransactionsById?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
export const GET_INSPECTIONS_BY_CATEGORY_ID = (
  categoryId,
  status,
  pageNumber,
  pageSize,
  search,
  selectedTeam
) => {
  if (search) {
    return (
      BASE_URL +
      `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}&Search=${search}`
    );
  } else if (selectedTeam) {
    return (
      BASE_URL +
      `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}&Search=${search}&Filter.TeamId=${selectedTeam}`
    );
  } else {
    return (
      BASE_URL +
      `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}`
    );
  }
};
export const GET_INSPECTIONS_BY_CATEGORY_IDs = (
  categoryId,
  status,
  pageNumber,
  pageSize,
  search,
  selectedTeam
) =>
  BASE_URL +
  `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
export const GET_INSPECTION_BY_ID = (id) =>
  BASE_URL + `Checklists/GetInspectionById?InspectionId=${id}`;
export const GET_INSPECTIONS_BY_CATEGORY_ID_FILTER = (
  categoryId,
  status,
  pageNumber,
  pageSize,
  selectedTeam,
  search
) =>
  BASE_URL +
  `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}&Filter.TeamId=${selectedTeam}`;
export const GET_INSPECTIONS_BY_ASSETS_ID_FILTER = (
  categoryId,
  status,
  pageNumber,
  pageSize,
  selectedAsset,
  search
) =>
  BASE_URL +
  `Checklists/GetInspectionsByCategoryId?CategoryId=${categoryId}&Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}&Filter.AssetId=${selectedAsset}`;
export const GET_FORM_AND_SECTION_TASK_ANSWERS = (transactionId, checklistId) =>
  BASE_URL +
  `Checklists/GetFormAndSectionTaskAnswers?FormAndSectionTransactionsId=${transactionId}&FormAndSectionId=${checklistId}`;
export const CREATE_ROUTINE_INSPECTION_SCHEDULE =
  BASE_URL + "Checklists/CreateRoutineInspectionSchedule";
export const EDIT_ROUTINE_INSPECTION_SCHEDULE =
  BASE_URL + "Checklists/EditRoutineInspectionSchedule";
export const DELETE_ROUTINE_INSPECTION_SCHEDULE =
  BASE_URL + "Checklists/DeleteRoutineInspectionSchedule";

export const DELETE_INSPECTION_CATEGORY =
  BASE_URL + "Checklists/DeleteInspectionCategory";
export const GET_CALENDAR_TYPES = BASE_URL + "Checklists/GetCalendarTypes";
export const GET_CHECKLISTS =
  BASE_URL + "Checklists/GetChecklists?PageNumber=1&PageSize=100";
export const CREATE_ROUTINE_INSPECTION_CATEGORY =
  BASE_URL + "Checklists/CreateRoutineInspectionCategory";
export const EDIT_ROUTINE_INSPECTION_CATEGORY =
  BASE_URL + "Checklists/EditInspectionCategory";

  export const GET_CHECKLIST_FORM_ANSWERS_BY_INSPECTION_ID = (inspectionId) => BASE_URL + `Checklists/GetChecklistFormAnswersByInspectionId?InspectionId=${inspectionId}`

//Locations API

// Category of works Assets    API
export const GET_ASSET_CATEGORIES =  BASE_URL + "Assets/Categories"
export const GET_CATEGORY_OF_WORKS = `${BASE_URL}CategoryOfWorks`

//Users API

//Teams API
export const GET_ALL_USERS_BY_TEAM = (teamId) =>
  BASE_URL + `Team/GetAllUsersByTeam/${teamId}`;
export const GET_TEAMS_TO_ASSIGN_TICKET =
  BASE_URL + "Team/GetTeamsToAssignTicket";

// Asset API

export const GET_CATEGORIES = BASE_URL + "Assets/Categories";
export const GET_ASSET_FAULTS = (assetId) =>
  BASE_URL + `Assets/GetFaultsByAsset/${assetId}`;

// request API
export const GET_REQUESTS = (pageSize, pageNumber, status, search) => {
  if (search) {
    return (
      BASE_URL +
      `Requests/GetRequestsByStatus?Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}&Search=${search}`
    );
    //  &PageNumber=${pageNumber}&Search=${search}`
  }
return (
    BASE_URL +
    `Requests/GetRequestsByStatus?Status=${status}&PageNumber=${pageNumber}&PageSize=${pageSize}`
  );
  // &PageNumber=${pageNumber}
};

export const CREATE_REQUEST = BASE_URL + "Requests/New";

//shared API
export const GET_ASSETS_BY_LOCATION = (locationId) =>
  BASE_URL + `Assets/GetAssetsByLocation/${locationId}`;

export const GET_SIMPLE_LOCATION_LIST =
  BASE_URL + "Locations/LocationsList";
export const GET_USER_LOCATIONS =(userId)=>  
BASE_URL + `Locations/GetUserLocations?UserId=${userId}`;
export const GET_ASSET_BY_LOCATIO_AND_ASSET_CATEGORY =(locationId,categoryId) =>`${BASE_URL}Assets/GetAssetsByLocationAndCategory/${locationId}/${categoryId}`

export const DELETE_REQUESTS = BASE_URL + "Requests/Delete";

export const SORT_REQUEST_BY_LOCATION_LIST = (debouncedSearch, locationId) => BASE_URL + `Requests/GetRequestsByStatus?Status=Approved&Filter.LocationId=${locationId}&Search=${debouncedSearch}`
export const SORT_NEW_REQUEST_BY_LOCATION_LIST = (debouncedSearch, locationId) => BASE_URL + `Requests/GetRequestsByStatus?Status=Pending&Filter.LocationId=${locationId}&Search=${debouncedSearch}`

export const SORT_APPROVED_REQUEST_BY_SUBMITTED_BY = (debouncedSearch, submittedById) => BASE_URL + `Requests/GetRequestsByStatus?Status=Approved&Filter.SubmittedById=${submittedById}&Search=${debouncedSearch}`
export const SORT_NEW_REQUEST_BY_SUBMITTED_BY = (debouncedSearch, submittedById) => BASE_URL + `Requests/GetRequestsByStatus?Status=Pending&Filter.SubmittedById=${submittedById}&Search=${debouncedSearch}`

export const SORT_APPROVED_REQUEST_BY_APPROVED_BY = (debouncedSearch, approvedById) => BASE_URL + `Requests/GetRequestsByStatus?Status=Approved&Filter.ModifiedById=${approvedById}&Search=${debouncedSearch}`
export const SORT_APPROVED_REQUEST_BY_START_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Approved&Filter.StartDate=${date}&Search=${debouncedSearch}`
export const SORT_APPROVED_REQUEST_BY_END_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Approved&Filter.EndDate=${date}&Search=${debouncedSearch}`

export const SORT_DECLINED_REQUEST_BY_START_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Declined&Filter.StartDate=${date}&Search=${debouncedSearch}`
export const SORT_DECLINED_REQUEST_BY_END_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Declined&Filter.EndDate=${date}&Search=${debouncedSearch}`

export const SORT_NEW_REQUEST_BY_START_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Pending&Filter.StartDate=${date}&Search=${debouncedSearch}`
export const SORT_NEW_REQUEST_BY_END_DATE = (debouncedSearch, date) => BASE_URL + `Requests/GetRequestsByStatus?Status=Pending&Filter.EndDate=${date}&Search=${debouncedSearch}`

export const SORT_DECLINED_REQUEST_BY_LOCATION_LIST = (debouncedSearch, locationId) => BASE_URL + `Requests/GetRequestsByStatus?Status=Declined&Filter.LocationId=${locationId}&Search=${debouncedSearch}`
export const SORT_DECLINED_REQUEST_BY_SUBMITTED_BY  = (debouncedSearch, submittedById) => BASE_URL + `Requests/GetRequestsByStatus?Status=Declined&Filter.SubmittedById=${submittedById}&Search=${debouncedSearch}`
export const SORT_DECLINED_REQUEST_BY_MODIFIED_BY  = (debouncedSearch, modifiedById) => BASE_URL + `Requests/GetRequestsByStatus?Status=Declined&Filter.ModifiedById=${modifiedById}&Search=${debouncedSearch}`

export const GET_REQUEST_DETAILS_BY_ID =(id) => BASE_URL + `Requests/RequestDetails/${id}`
export const APPROVE_REQUEST = BASE_URL + "Requests/Approve"
export const REJECT_REQUEST = BASE_URL + "Requests/Reject"
export const EXTEND_RFQ_TIME = BASE_URL + "Requests/ExtendRFQTime"
export const CLOSE_RFQ = BASE_URL + "Requests/CloseRFQ"
export const INVITE_RFQ_DIAGNOSIS = BASE_URL + "Requests/InviteRFQDiagnosis"
export const GET_TEAM_TO_ASSIGN_BY_CATEGORY = (categoryOfWorkIds) => "Team/GetTeamsToAssignRequestByCategoryOfWork"


export const GET_REQUEST_SUMMARY_BY_ID = (id) => BASE_URL + `Requests/GetRequestSummaryById/${id}`;

export const GET_RFQDIAGNOSIS_LIST = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Requests/GetDiagnosisByTeam?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`;
export const GET_DIAGNOSIS_SUMMARY_BY_ID =(id) => BASE_URL + `Requests/GetDiagnosisSummaryById/${id}`;
export const ADD_RFQ_DIAGNOSIS = BASE_URL + "Requests/AddDiagnosis";
export const DELETE_RFQ_DIAGNOSIS = BASE_URL + "Requests/DeleteDiagnosis";
export const ADD_RFQ_PROJECTEDPART = BASE_URL + "Requests/AddProjectedPart";
export const DELETE_RFQ_PROJECTEDPART = BASE_URL + "Requests/DeleteProjectedPart";
export const EDIT_RFQ_PROJECTEDPART = BASE_URL + "Requests/EditProjectedPart";
export const ADD_RFQ_QUOTEITEM = BASE_URL + "Requests/AddQuoteItem";
export const GET_REQUEST_PROJECTEDPART_BY_TEAM = (requestId) => BASE_URL + `Requests/GetRequestProjectedPartsByTeam/${requestId}`;
export const DELETE_QUOTE_ITEM = BASE_URL + "Requests/DeleteQuoteItem";
export const EDIT_RFQ_QUOTEITEM = BASE_URL + "Requests/EditQuoteItem";
export const ADD_RFQ_QUOTENOTES = BASE_URL + "Requests/AddQuoteNotes";
export const SUBMIT_QUOTE = BASE_URL + "Requests/SubmitQuote";
export const RECALL_QUOTE = BASE_URL + "Requests/RecallQuote";



export const ASSIGN_WORK = BASE_URL + "Tickets/AssignWork";
export const ACCEPTREJECT_WORK = BASE_URL + "Tickets/AcceptRejectWork";
export const REQUEST_ARRIVAL = BASE_URL + "Tickets/RequestArrival";
export const CONFIRMREJECT_ARRIVAL = BASE_URL + "Tickets/ConfirmRejectArrival";
export const START_WORK = BASE_URL + "Tickets/StartJob";
export const REQUEST_CLOSURE = BASE_URL + "Tickets/RequestClosure";
export const CONFIRMREJECT_CLOSURE = BASE_URL + "Tickets/ConfirmRejectClosure";
export const GET_TICKETASSIGNMENTS_BY_TICKETID = (ticketId) =>
  BASE_URL + `Tickets/GetTicketAssigmentsByTicketId/${ticketId}`;

export const GET_NEW_WORKORDERS = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`
export const GET_NEW_WORKORDERS_BY_START_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}`
export const GET_NEW_WORKORDERS_BY_END_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}`
export const GET_NEW_WORKORDERS_BY_PRIORITY = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}`
export const GET_NEW_WORKORDERS_BY_LOCATION = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}`
export const GET_NEW_WORKORDERS_BY_ASSETCATEGORY = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}`
// Tickets/GetNewTickets?search=serach&pageNumber=2&pageSize=12&filter.StartDate=12&filter.EndDate=132&filter.TicketTypeId=2&filter.TicketPriorityId=3&filter.LocationId=2&filter.AssetCategoryId=2&filter.TeamId=2

export const GET_ONGOING_WORKORDERS = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`
export const GET_ONGOING_WORKORDERS_BY_ASSIGNED_TO = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}`
export const GET_ONGOING_WORKORDERS_BY_START_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}`
export const GET_ONGOING_WORKORDERS_BY_END_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}`
export const GET_ONGOING_WORKORDERS_BY_PRIORITY = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}`
export const GET_ONGOING_WORKORDERS_BY_LOCATION = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}`
export const GET_ONGOING_WORKORDERS_BY_ASSETCATEGORY = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}`

export const GET_MAINTENANCE_BY_ASSET_CATEGORY = (debouncedSearch,pageNumber, pageSize, assetCategoryId) => BASE_URL + `Maintenance/GetPmTemplates?search=${debouncedSearch}&pageNumber=${pageNumber}&pageSize=${pageSize}&filter.AssetCategoryId=${assetCategoryId}`
export const GET_MAINTENANCE_BY_WORK_CATEGORY = (debouncedSearch,pageNumber, pageSize, categoryOfWorkId) => BASE_URL + `Maintenance/GetPmTemplates?search=${debouncedSearch}&pageNumber=${pageNumber}&pageSize=${pageSize}&filter.CategoryOfWorkId=${categoryOfWorkId}`
export const GET_MAINTENANCE_BY_PRIORITY = (debouncedSearch,pageNumber, pageSize, ticketPriorityId) => BASE_URL + `Maintenance/GetPmTemplates?search=${debouncedSearch}&pageNumber=${pageNumber}&pageSize=${pageSize}&filter.TicketPriorityId=${ticketPriorityId}`

export const GET_PENDING_WORKORDERS = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`
export const GET_PENDING_WORKORDERS_BY_ASSIGNED_TO = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}`
export const GET_PENDING_WORKORDERS_BY_START_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}`
export const GET_PENDING_WORKORDERS_BY_END_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}`
export const GET_PENDING_WORKORDERS_BY_PRIORITY = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}`
export const GET_PENDING_WORKORDERS_BY_LOCATION = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}`
export const GET_PENDING_WORKORDERS_BY_ASSETCATEGORY = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}`

export const GET_CLOSED_WORKORDERS = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`
export const GET_CLOSED_WORKORDERS_BY_ASSIGNED_TO = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}`
export const GET_CLOSED_WORKORDERS_BY_START_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}`
export const GET_CLOSED_WORKORDERS_BY_END_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}`
export const GET_CLOSED_WORKORDERS_BY_PRIORITY = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}`
export const GET_CLOSED_WORKORDERS_BY_LOCATION = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}`
export const GET_CLOSED_WORKORDERS_BY_ASSETCATEGORY = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}`

export const GET_WORKORDER_DETAILS_BY_ID =(id) => BASE_URL + `Tickets/GetTicketSummaryById/${id}`
export const GET_LOCATION_BY_PART_ID =(id) => BASE_URL + `Parts/GetPartLocations/${id}`
export const DELETE_WORKORDER = BASE_URL + "Tickets/DeleteTicket";
export const GET_ALL_PARTS = BASE_URL + "Parts/GetAllParts";
export const RAISE_TICKET = BASE_URL + "Tickets/RaiseTicket";
export const GET_PRIORITIES = BASE_URL + "Tickets/GetAllTicketPriorities";
// export const GET_TICKET_OTHER_COST_BY_TICKET_ID = (id) => BASE_URL + `TicketCostings/GetAllTicketCosts/${id}`;
export const GET_TICKET_LABOUR_COST =(id) => BASE_URL + `Tickets/GetTicketLabourByTicketId/${id}`
export const Add_Ticket_Additional_Labour= BASE_URL + "Tickets/AddTicketAdditionalLabour";
export const TICKET_ON_HOLD = BASE_URL + "Tickets/RequestOnHold";
export const TICKET_CONFIRM_REJECT_ON_HOLD= BASE_URL + "Tickets/ConfirmRejectOnHold";
export const TICKET_RESUME_WORK= BASE_URL + "Tickets/Resume";
export const ADD_TICKET_OTHER_COSTS = BASE_URL + "Tickets/AddTicketOtherCosts";
export const ADD_TICKET_USED_PARTS = BASE_URL + "Tickets/AddTicketAssetUsedPart";
export const ADD_TICKET_RETURNED_PARTS = BASE_URL + "Tickets/AddTicketAssetReturnedPart";
export const ADD_TICKET_DIAGNOSIS = BASE_URL + "Tickets/AddTicketAssetDiagnosis";
export const ADD_TICKET_FILES = BASE_URL + "Tickets/AddTicketFile";
export const ADD_TICKET_JOBCARDS = BASE_URL + "Tickets/AddTicketJobCards";
export const ADD_TICKET_COSTING = BASE_URL + "Tickets/AddTicketCostedPart";
export const GET_TICKET_OTHER_COST_BY_TICKET_ID = BASE_URL + "TicketCostings/GetAllTicketCostItemsTypes";
export const EDIT_LABOUR_COST = BASE_URL + "Tickets/EditTicketAdditionalLabour";
export const EDIT_LABOUR_OTHER_COST = BASE_URL + "Tickets/EditTicketOtherCosts";
export const EDIT_TICKET_USED_PARTS = BASE_URL + "Tickets/EditTicketAssetUsedPart";
export const EDIT_TICKET_RETURNED_PARTS = BASE_URL + "Tickets/EditTicketAssetReturnedPart";
export const DELETE_TICKET_USED_PARTS = BASE_URL + "Tickets/DeleteTicketAssetUsedPartById";
export const DELETE_TICKET_RETURNED_PARTS = BASE_URL + "Tickets/DeleteTicketAssetReturnedPartById";
export const DELETE_TICKET_DIAGNOSIS = BASE_URL + "Tickets/DeleteTicketAssetDiagnosisById";
export const DELETE_TICKET_LABOUR_COST = BASE_URL + "Tickets/DeleteTicketAdditionalLabourById";
export const DELETE_TICKET_OTHER_COST = BASE_URL + "Tickets/DeleteTicketOtherCostsById";
export const DELETE_TICKET_PART_COST = BASE_URL + "Tickets/DeleteTicketCostedItemById";
export const DELETE_TICKET_JOB_CARDS = BASE_URL + "Tickets/DeleteTicketJobCardById";
export const DELETE_TICKET_FILE = BASE_URL + "Tickets/DeleteTicketFile";


export const GET_TICKET_LABOUR_COST_BY_TICKET_ID = (ticketId) => BASE_URL + `Tickets/GetTicketLabourByTicketId/${ticketId}`;
export const GET_TICKET_USED_PARTS_BY_TICKET_ID = (ticketId) => BASE_URL + `Tickets/GetTicketUsedPartsByTicketId/${ticketId}`;
export const GET_TICKET_OTHERCOST_BY_TICKET_ID = (ticketId) => BASE_URL + `Tickets/GetTicketOtherCostsByTicketId/${ticketId}`;

export const ADD_TICKET_COSTED_ITEMS= BASE_URL + `Tickets/AddTicketCostedItems`;
export const FILTER_CHECKLIST_IDS = BASE_URL + `Checklists/GetFilteredChecklist`;
export const CREATE_ROUTINE_INSPC_LIST = BASE_URL + `Checklists/CreateRoutineInspectionScheduleList`;

export const GET_TEAMS = BASE_URL + "Team/GetAllTeams";

export const GET_TEAM_TO_ASSIGN_BY_LOCATION_AND_CATEGORY= (locationId, categoryofworkId) => {
  if (locationId && categoryofworkId) {
    return (
      BASE_URL +
      `Team/GetTeamsToAssignTicket?locationId=${locationId}&categoryofworkId=${categoryofworkId}`
    );
  }
  if (locationId) {
    return (
      BASE_URL + `Team/GetTeamsToAssignTicket?locationId=${locationId}`
    );
  }
  if (categoryofworkId) {
    return (
      BASE_URL + `Team/GetTeamsByLocationAndCategory?categoryofworkId=${categoryofworkId}`
    );
  }
  return  `Team/GetTeamsToAssignTicket?locationId=${locationId}&categoryofworkId=${categoryofworkId}`;
}


// PM Templates API

export const GET_PM_TEMPLATES = BASE_URL + "Maintenance/GetPmTemplates";
export const GET_PM_TEMPLATE_BY_ID = (id) =>
  BASE_URL + `maintenance/GetPmTemplateSummaryById/${id}`;
export const DELETE_PM_TEMPLATE = BASE_URL + "Maintenance/DeletePMTempate";
export const CREATE_PM_TEMPLATE = BASE_URL + "Maintenance/CreatePmTemplate";
export const EDIT_PM_TEMPLATE = BASE_URL + "Maintenance/EditPmTemplateDetails";
export const ADD_PM_CHECKLIST= BASE_URL + "Maintenance/AddPMChecklist";
export const DELETE_PM_CHECKLIST= BASE_URL + "Maintenance/DeletePMChecklist";
export const DELETE_PM_PROJECTED_PART = BASE_URL + "Maintenance/DeletePMProjectedPart";
export const EDIT_PM_PROJECTED_PART = BASE_URL + "Maintenance/EditPMProjectedPart";
export const ADD_PM_PROJECTED_PART = BASE_URL + "Maintenance/AddPMProjectedPart";
export const GET_PM_SCHEDULES = BASE_URL + "Maintenance/GetPmTemplates?pageNumber=1&pageSize=100"
export const CREATE_PM_WORK = BASE_URL + "Maintenance/CreatePmWork"


export const EDIT_PROJECTED_PART = BASE_URL + "Requests/EditProjectedPart";

export const GET_NEW_WORKORDERS_PM = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&ticketType=preventive`
export const GET_NEW_WORKORDERS_BY_START_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}&ticketType=preventive`
export const GET_NEW_WORKORDERS_BY_END_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}&ticketType=preventive`
export const GET_NEW_WORKORDERS_BY_PRIORITY_PM = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}&ticketType=preventive`
export const GET_NEW_WORKORDERS_BY_LOCATION_PM = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}&ticketType=preventive`
export const GET_NEW_WORKORDERS_BY_ASSETCATEGORY_PM = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetNewTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}&ticketType=preventive`
// Tickets/GetNewTickets?search=serach&pageNumber=2&pageSize=12&filter.StartDate=12&filter.EndDate=132&filter.TicketTypeId=2&filter.TicketPriorityId=3&filter.LocationId=2&filter.AssetCategoryId=2&filter.TeamId=2
export const START_PM_WORK = BASE_URL + "Maintenance/StartPmWork";
export const DELETE_WORKORDER_PM = BASE_URL + "Tickets/DeleteTicketFile";
export const GET_ONGOING_WORKORDERS_PM = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_ASSIGNED_TO_PM = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_START_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_END_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_PRIORITY_PM = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_LOCATION_PM = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}&ticketType=preventive`
export const GET_ONGOING_WORKORDERS_BY_ASSETCATEGORY_PM = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetOnGoingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}&ticketType=preventive`

export const GET_UPCOMING = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}`
export const GET_UPCOMING_PM = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&ticketType=preventive`
export const GET_UPCOMING_BY_ASSIGNED_TO = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}`
export const GET_UPCOMING_BY_ASSIGNED_TO_PM = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}&ticketType=preventive`
export const GET_UPCOMING_BY_START_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}`
export const GET_UPCOMING_BY_START_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}&ticketType=preventive`
export const GET_UPCOMING_BY_END_DATE = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}`
export const GET_UPCOMING_BY_END_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}&ticketType=preventive`
export const GET_UPCOMING_BY_PRIORITY = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}`
export const GET_UPCOMING_BY_PRIORITY_PM = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}&ticketType=preventive`
export const GET_UPCOMING_BY_LOCATION = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}`
export const GET_UPCOMING_BY_LOCATION_PM = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}&ticketType=preventive`
export const GET_UPCOMING_BY_ASSETCATEGORY = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}`
export const GET_UPCOMING_BY_ASSETCATEGORY_PM = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetUpcomingTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}&ticketType=preventive`

export const GET_PENDING_WORKORDERS_PM = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_ASSIGNED_TO_PM = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_START_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_END_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_PRIORITY_PM = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_LOCATION_PM = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}&ticketType=preventive`
export const GET_PENDING_WORKORDERS_BY_ASSETCATEGORY_PM = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetCloseMeTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}&ticketType=preventive`

export const GET_CLOSED_WORKORDERS_PM = (debouncedSearch,RequestsPerPage, currentPage) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_ASSIGNED_TO_PM = (debouncedSearch,RequestsPerPage, currentPage, assignedToId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TeamId=${assignedToId}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_START_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.StartDate=${date}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_END_DATE_PM = (debouncedSearch,RequestsPerPage, currentPage, date) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.EndDate=${date}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_PRIORITY_PM = (debouncedSearch,RequestsPerPage, currentPage, ticketPriorityId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.TicketPriorityId=${ticketPriorityId}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_LOCATION_PM = (debouncedSearch,RequestsPerPage, currentPage, locationId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.LocationId=${locationId}&ticketType=preventive`
export const GET_CLOSED_WORKORDERS_BY_ASSETCATEGORY_PM = (debouncedSearch,RequestsPerPage, currentPage, assetCategoryId) => BASE_URL + `Tickets/GetClosedTickets?search=${debouncedSearch}&pageNumber=${currentPage}&pageSize=${RequestsPerPage}&filter.AssetCategoryId=${assetCategoryId}&ticketType=preventive`
