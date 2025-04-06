import axios from 'axios';

// API Configuration
const API_URL = 'https://hrms-api.xpectrum-ai.com';
const API_KEY = 'xpectrum_api_key_123@ai';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  }
});

// API helper functions for Employee Data (HRMS)
export const employeeDataApi = {
  getAll: async () => {
    const response = await api.get(`/hrms/api/v1/all_employee_data?api_key=${API_KEY}`);
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/employee_data/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/hrms/api/v1/employee_data?api_key=${API_KEY}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/hrms/api/v1/employee_data/${id}?api_key=${API_KEY}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/hrms/api/v1/employee_data/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Employee Insurance Data (HRMS)
export const employeeInsuranceDataApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/employee_insurance_data/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/hrms/api/v1/employee_insurance_data?api_key=${API_KEY}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/hrms/api/v1/employee_insurance_data/${id}?api_key=${API_KEY}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/hrms/api/v1/employee_insurance_data/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Harassment Reports (HRMS)
export const harassmentReportsApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/harassment_reports/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/hrms/api/v1/harassment_reports?api_key=${API_KEY}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/hrms/api/v1/harassment_reports/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Insurance Plan (HRMS)
export const insurancePlanApi = {
  getById: async (planName: string) => {
    const response = await api.get(`/hrms/api/v1/insurance_plan/${planName}?api_key=${API_KEY}`);
    return response.data;
  },
  update: async (planName: string, data: any) => {
    const response = await api.put(`/hrms/api/v1/insurance_plan/${planName}?api_key=${API_KEY}`, data);
    return response.data;
  }
};

// API helper functions for Leave Balance Data (HRMS)
export const leaveBalanceDataApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/leave_balance_data/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/hrms/api/v1/leave_balance_data/${id}?api_key=${API_KEY}`, data);
    return response.data;
  }
};

// API helper functions for Leave Requests (HRMS)
export const leaveRequestsApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/leave_requests/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/hrms/api/v1/leave_requests?api_key=${API_KEY}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/hrms/api/v1/leave_requests/${id}?api_key=${API_KEY}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/hrms/api/v1/leave_requests/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Payroll (HRMS)
export const payrollApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/payroll/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Salary Info (HRMS)
export const salaryInfoApi = {
  getById: async (id: string) => {
    const response = await api.get(`/hrms/api/v1/salary_info/${id}?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Taxes (HRMS)
export const taxesApi = {
  getAll: async () => {
    const response = await api.get(`/hrms/api/v1/all_taxes?api_key=${API_KEY}`);
    return response.data;
  }
};

// API helper functions for Company Policies (HRMS)
export const companyPoliciesApi = {
  getSexualHarassmentPolicy: async () => {
    const response = await api.get(`/hrms/api/v1/company_policies/Prevention_of_Sexual_Harassment_Policy?api_key=${API_KEY}`);
    return response.data;
  },
  getHRComplaintPolicy: async () => {
    const response = await api.get(`/hrms/api/v1/company_policies/General_HR_Complaint_Policy?api_key=${API_KEY}`);
    return response.data;
  },
  getLeavePolicy: async () => {
    const response = await api.get(`/hrms/api/v1/company_policies/Leave_Policy?api_key=${API_KEY}`);
    return response.data;
  }
};

export default {
  employeeDataApi,
  employeeInsuranceDataApi,
  harassmentReportsApi,
  insurancePlanApi,
  leaveBalanceDataApi,
  leaveRequestsApi,
  payrollApi,
  salaryInfoApi,
  taxesApi,
  companyPoliciesApi
}; 
