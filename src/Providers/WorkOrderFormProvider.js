import { useState, createContext } from 'react';


export const WorkOrderFormContext = createContext()

export default function WorkOrderFormProvider({ children }) {
  const [formData, setFormData] = useState({
    location: {
      locationName: '',
      locationId: null
    },
    assetCategory: {
      categoryName: '',
      categoryId: null
    },
    assetList: [],
    ticketTitle: '',
    ticketDescription: '',
    workCategory: {
      id: null,
      name: ''
    },
    files: [],
    checklistIds: [],
    ticketPriority: { 
      id: 0,
      name: ''
    },
    assignedTeam: {
      id: null,
      name: ''
    },
    assignedUser: {
      id: null,
      name: ''
    },
    signatureRequiredToCompleteWork: false,
    estimatedHours: 0,
    projectedParts: [],
    checklist: [],
    requestId: 0,
  })
  return (
    <WorkOrderFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </WorkOrderFormContext.Provider>
  )
}