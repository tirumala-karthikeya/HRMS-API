// API Endpoints data
export const apiEndpoints = {
  // Employee Data endpoints (HRMS)
  "get-employee-by-id": {
    id: "get-employee-by-id",
    category: "Employee Data",
    title: "Get Employee by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM11188", "EM6265", "EM21821"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "first_name": "Mark",
      "last_name": "Figueroa",
      "email": "jeffreydoyle@example.net",
      "phone_number": "001-581-896-0013x3890",
      "hire_date": "2021-02-19",
      "job_title": "Theme park manager",
      "job_id": 284,
      "gov_id": "829-01-2616",
      "hiring_manager_id": "E001",
      "hr_manager_id": "E009",
      "marital_status": "single",
      "state": "California",
      "emergency_contact_name": "Gina Moore",
      "emergency_contact_phone": "001-851-316-1559x40781",
      "sex": "Male",
      "department": "Carter, Fuller and Mcclure",
      "date_of_birth": "1978-12-26",
      "status": "Active"
    }
  },
  
  "get-all-employees": {
    id: "get-all-employees",
    category: "Employee Data",
    title: "Get All Employees",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/all_employee_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: [
      {
        "employee_id": "EM3278888",
        "first_name": "Mark",
        "last_name": "Figueroa",
        "email": "jeffreydoyle@example.net",
        "phone_number": "001-581-896-0013x3890",
        "hire_date": "2021-02-19",
        "job_title": "Theme park manager",
        "job_id": 284,
        "gov_id": "829-01-2616",
        "hiring_manager_id": "E001",
        "hr_manager_id": "E009",
        "marital_status": "single",
        "state": "California",
        "emergency_contact_name": "Gina Moore",
        "emergency_contact_phone": "001-851-316-1559x40781",
        "sex": "Male",
        "department": "Carter, Fuller and Mcclure",
        "date_of_birth": "1978-12-26",
        "status": "Active"
      }
    ]
  },
  
  "create-employee": {
    id: "create-employee",
    category: "Employee Data",
    title: "Create Employee",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "first_name", type: "string", required: false, description: "First name of the employee" },
      { name: "last_name", type: "string", required: false, description: "Last name of the employee" },
      { name: "email", type: "string", required: false, description: "Email of the employee" },
      { name: "phone_number", type: "string", required: false, description: "Phone number of the employee" },
      { name: "hire_date", type: "string", required: false, description: "Hire date of the employee" },
      { name: "job_title", type: "string", required: false, description: "Job title of the employee" },
      { name: "job_id", type: "integer", required: false, description: "Job ID of the employee" },
      { name: "gov_id", type: "string", required: false, description: "Government ID of the employee" },
      { name: "hiring_manager_id", type: "string", required: false, description: "Hiring manager ID" },
      { name: "hr_manager_id", type: "string", required: false, description: "HR manager ID" },
      { name: "marital_status", type: "string", required: false, description: "Marital status of the employee" },
      { name: "state", type: "string", required: false, description: "State of the employee" },
      { name: "emergency_contact_name", type: "string", required: false, description: "Emergency contact name" },
      { name: "emergency_contact_phone", type: "string", required: false, description: "Emergency contact phone" },
      { name: "sex", type: "string", required: false, description: "Sex of the employee" },
      { name: "department", type: "string", required: false, description: "Department of the employee" },
      { name: "date_of_birth", type: "string", required: false, description: "Date of birth of the employee" },
      { name: "status", type: "string", required: false, description: "Status of the employee" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "first_name": "Mark",
      "last_name": "Figueroa",
      "email": "jeffreydoyle@example.net",
      "phone_number": "001-581-896-0013x3890",
      "hire_date": "2021-02-19",
      "job_title": "Theme park manager",
      "job_id": 284,
      "gov_id": "829-01-2616",
      "hiring_manager_id": "E001",
      "hr_manager_id": "E009",
      "marital_status": "single",
      "state": "California",
      "emergency_contact_name": "Gina Moore",
      "emergency_contact_phone": "001-851-316-1559x40781",
      "sex": "Male",
      "department": "Carter, Fuller and Mcclure",
      "date_of_birth": "1978-12-26",
      "status": "Active"
    },
    responseExample: {
      "message": "Employee created successfully",
      "employee_id": "EM3278888"
    }
  },
  
  "update-employee": {
    id: "update-employee",
    category: "Employee Data",
    title: "Update Employee",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM11188", "EM6265", "EM21821"] }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "first_name", type: "string", required: false, description: "First name of the employee" },
      { name: "last_name", type: "string", required: false, description: "Last name of the employee" },
      { name: "email", type: "string", required: false, description: "Email of the employee" },
      { name: "phone_number", type: "string", required: false, description: "Phone number of the employee" },
      { name: "hire_date", type: "string", required: false, description: "Hire date of the employee" },
      { name: "job_title", type: "string", required: false, description: "Job title of the employee" },
      { name: "job_id", type: "integer", required: false, description: "Job ID of the employee" },
      { name: "gov_id", type: "string", required: false, description: "Government ID of the employee" },
      { name: "hiring_manager_id", type: "string", required: false, description: "Hiring manager ID" },
      { name: "hr_manager_id", type: "string", required: false, description: "HR manager ID" },
      { name: "marital_status", type: "string", required: false, description: "Marital status of the employee" },
      { name: "state", type: "string", required: false, description: "State of the employee" },
      { name: "emergency_contact_name", type: "string", required: false, description: "Emergency contact name" },
      { name: "emergency_contact_phone", type: "string", required: false, description: "Emergency contact phone" },
      { name: "sex", type: "string", required: false, description: "Sex of the employee" },
      { name: "department", type: "string", required: false, description: "Department of the employee" },
      { name: "date_of_birth", type: "string", required: false, description: "Date of birth of the employee" },
      { name: "status", type: "string", required: false, description: "Status of the employee" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "first_name": "Mark",
      "last_name": "Figueroa",
      "email": "jeffreydoyle@example.net",
      "phone_number": "001-581-896-0013x3890",
      "hire_date": "2021-02-19",
      "job_title": "Theme park manager",
      "job_id": 284,
      "gov_id": "829-01-2616",
      "hiring_manager_id": "E001",
      "hr_manager_id": "E009",
      "marital_status": "single",
      "state": "California",
      "emergency_contact_name": "Gina Moore",
      "emergency_contact_phone": "001-851-316-1559x40781",
      "sex": "Male",
      "department": "Carter, Fuller and Mcclure",
      "date_of_birth": "1978-12-26",
      "status": "Active"
    },
    responseExample: {
      "message": "Employee updated successfully",
      "employee_id": "EM3278888"
    }
  },
  
  "delete-employee": {
    id: "delete-employee",
    category: "Employee Data",
    title: "Delete Employee",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM11188", "EM6265", "EM21821"] }
    ],
    responseExample: {
      "message": "Employee deleted successfully",
      "employee_id": "EM3278888"
    }
  },
  
  // Full Employee Data endpoints (HRMS)
  "get-full-employee-data-by-id": {
    id: "get-full-employee-data-by-id",
    category: "Employee Data",
    title: "Get Full Employee Data by ID",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/full_employee_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM11188", "EM6265", "EM21821"] }
    ],
    responseExample: {
      "employee_data": {
        "employee_id": "EM11188",
        "first_name": "Brandon",
        "last_name": "Davis",
        "email": "garnernathan@example.org",
        "phone_number": "+1-809-288-5165",
        "hire_date": "2024-12-30",
        "job_title": "Tourism officer",
        "job_id": 319,
        "gov_id": "361-14-9469",
        "hiring_manager_id": "E004",
        "hr_manager_id": "E005",
        "marital_status": "single",
        "state": "Oregon",
        "emergency_contact_name": "Brittney Olson",
        "emergency_contact_phone": "258-651-4936",
        "sex": "Male",
        "department": "White Ltd",
        "date_of_birth": "1995-06-02",
        "status": "Active"
      },
      "employee_insurance_data": {
        "employee_id": "EM11188",
        "plan_name": "SecureHealth",
        "insurance_plan_id": "INS003",
        "enrollment_date": "2024-12-19",
        "coverage_type": "employee_only",
        "employee_contribution": "165.78",
        "enrollment_time": null
      },
      "harassment_reports": [],
      "insurance_data": null,
      "leave_balance_data": {
        "employee_id": "EM11188",
        "annual_leave_balance": 25,
        "sick_leave_balance": 13,
        "personal_leave_balance": 19,
        "unpaid_leave_taken": 0,
        "leave_balance_updated_date": "2025-02-28"
      },
      "leave_requests": [],
      "payroll": {
        "employee_id": "EM11188",
        "base_salary": "85621.04",
        "federal_tax": "14144.13",
        "state_tax": "0.00",
        "total_tax": "14144.13",
        "month": "April",
        "salary_received_day": "2024-04-30"
      },
      "salary_info": {
        "employee_id": "EM11188",
        "base_salary": "85621.04",
        "salary_type": "Annual",
        "bonus": "4187.40",
        "commission": "4338.90",
        "currency": "USD",
        "salary_grade": "Mid",
        "last_salary_increase_date": "2024-07-01"
      }
    }
  },
  
  
  // Employee Insurance Data endpoints (HRMS)
  "get-employee-insurance-data": {
    id: "get-employee-insurance-data",
    category: "Employee Insurance Data",
    title: "Get Employee Insurance Data",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM9116", "EM34179", "EM3278"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "plan_name": "Gold Health Plan",
      "insurance_plan_id": "IP00123",
      "enrollment_date": "2021-03-01",
      "coverage_type": "Family",
      "employee_contribution": 250.50,
      "enrollment_time": "09:30:00"
    }
  },
  
  "create-employee-insurance-data": {
    id: "create-employee-insurance-data",
    category: "Employee Insurance Data",
    title: "Create Employee Insurance Data",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "plan_name", type: "string", required: false, description: "Name of the insurance plan" },
      { name: "insurance_plan_id", type: "string", required: false, description: "Insurance plan ID" },
      { name: "enrollment_date", type: "string", required: false, description: "Date of enrollment" },
      { name: "coverage_type", type: "string", required: false, description: "Type of coverage" },
      { name: "employee_contribution", type: "number", required: false, description: "Employee contribution amount" },
      { name: "enrollment_time", type: "string", required: false, description: "Time of enrollment" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "plan_name": "Gold Health Plan",
      "insurance_plan_id": "IP00123",
      "enrollment_date": "2021-03-01",
      "coverage_type": "Family",
      "employee_contribution": 250.50,
      "enrollment_time": "09:30:00"
    },
    responseExample: {
      "message": "Employee insurance data created successfully",
      "employee_id": "EM3278888"
    }
  },
  
  "update-employee-insurance-data": {
    id: "update-employee-insurance-data",
    category: "Employee Insurance Data",
    title: "Update Employee Insurance Data",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888", "EM1234567"] }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "plan_name", type: "string", required: false, description: "Name of the insurance plan" },
      { name: "insurance_plan_id", type: "string", required: false, description: "Insurance plan ID" },
      { name: "enrollment_date", type: "string", required: false, description: "Date of enrollment" },
      { name: "coverage_type", type: "string", required: false, description: "Type of coverage" },
      { name: "employee_contribution", type: "number", required: false, description: "Employee contribution amount" },
      { name: "enrollment_time", type: "string", required: false, description: "Time of enrollment" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "plan_name": "Gold Health Plan",
      "insurance_plan_id": "IP00123",
      "enrollment_date": "2021-03-01",
      "coverage_type": "Family",
      "employee_contribution": 250.50,
      "enrollment_time": "09:30:00"
    },
    responseExample: {
      "message": "Employee insurance data updated successfully",
      "employee_id": "EM3278888"
    }
  },
  
  "delete-employee-insurance-data": {
    id: "delete-employee-insurance-data",
    category: "Employee Insurance Data",
    title: "Delete Employee Insurance Data",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/employee_insurance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM3278888", "EM1234567"] }
    ],
    responseExample: {
      "message": "Employee insurance data deleted successfully",
      "employee_id": "EM3278888"
    }
  },
  
  // Harassment Reports endpoints (HRMS)
  "get-harassment-report": {
    id: "get-harassment-report",
    category: "Harassment Reports",
    title: "Get Harassment Report",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports/{complaint_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "complaint_id", type: "string", required: true, description: "Unique identifier for the harassment report", examples: ["1591", "1513", "1941"] }
    ],
    responseExample: {
      "complaint_id": 1001,
      "victim_employee_id": 5001,
      "harasser_employee_id": 5002,
      "harassment_level": "Moderate",
      "description": "Inappropriate comments during team meeting",
      "status": "Under Review",
      "review_body": "HR Committee",
      "incident_date": "2023-05-15",
      "incident_time": "14:30:00",
      "reported_date": "2023-05-16",
      "reported_time": "09:45:00",
      "level": "Verbal"
    }
  },
  
  "create-harassment-report": {
    id: "create-harassment-report",
    category: "Harassment Reports",
    title: "Create Harassment Report",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "complaint_id", type: "integer", required: false, description: "Unique identifier for the complaint" },
      { name: "victim_employee_id", type: "integer", required: false, description: "Employee ID of the victim" },
      { name: "harasser_employee_id", type: "integer", required: false, description: "Employee ID of the harasser" },
      { name: "harassment_level", type: "string", required: false, description: "Level of harassment" },
      { name: "description", type: "string", required: false, description: "Description of the incident" },
      { name: "status", type: "string", required: false, description: "Status of the complaint" },
      { name: "review_body", type: "string", required: false, description: "Body reviewing the complaint" },
      { name: "incident_date", type: "string", required: false, description: "Date of the incident" },
      { name: "incident_time", type: "string", required: false, description: "Time of the incident" },
      { name: "reported_date", type: "string", required: false, description: "Date the incident was reported" },
      { name: "reported_time", type: "string", required: false, description: "Time the incident was reported" },
      { name: "level", type: "string", required: false, description: "Type of harassment" }
    ],
    requestBodyExample: {
      "complaint_id": 1001,
      "victim_employee_id": 5001,
      "harasser_employee_id": 5002,
      "harassment_level": "Moderate",
      "description": "Inappropriate comments during team meeting",
      "status": "Under Review",
      "review_body": "HR Committee",
      "incident_date": "2023-05-15",
      "incident_time": "14:30:00",
      "reported_date": "2023-05-16",
      "reported_time": "09:45:00",
      "level": "Verbal"
    },
    responseExample: {
      "message": "Harassment report created successfully",
      "complaint_id": 1001
    }
  },
  
  "delete-harassment-report": {
    id: "delete-harassment-report",
    category: "Harassment Reports",
    title: "Delete Harassment Report",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/harassment_reports/{complaint_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "complaint_id", type: "string", required: true, description: "Unique identifier for the harassment report", examples: ["1591", "1513", "1941"] }
    ],
    responseExample: {
      "message": "Harassment report deleted successfully",
      "complaint_id": 1001
    }
  },
  
  // Insurance Plan endpoints (HRMS)
  "get-insurance-plan": {
    id: "get-insurance-plan",
    category: "Insurance Plans",
    title: "Get Insurance Plan",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/insurance_plan/{plan_name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan", examples: ["INS005", "INS001", "INS002"] }
    ],
    responseExample: {
      "plan_name": "Gold Health Plan",
      "plan_id": "IP00123",
      "network": "Preferred Provider Network",
      "deductible_individual_family": "$500/$1000",
      "out_of_pocket_maximum_individual_family": "$3000/$6000",
      "coinsurance": "20%",
      "overall_lifetime_maximum": "Unlimited",
      "rates_premium_employee_only": 250.50,
      "rates_premium_employer_contribution_employee_only": 200.00,
      "rates_premium_employee_contribution_employee_only": 50.50,
      "rates_premium_employee_spouse": 450.75,
      "rates_premium_employer_contribution_employee_spouse": 350.00,
      "rates_premium_employee_contribution_employee_spouse": 100.75,
      "rates_premium_employee_children": 400.25,
      "rates_premium_employer_contribution_employee_children": 320.00,
      "rates_premium_employee_contribution_employee_children": 80.25,
      "rates_premium_family": 650.00,
      "rates_premium_employer_contribution_family": 500.00,
      "rates_premium_employee_contribution_family": 150.00
    }
  },
  
  "update-insurance-plan": {
    id: "update-insurance-plan",
    category: "Insurance Plans",
    title: "Update Insurance Plan",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/insurance_plan/{plan_name}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan", examples: ["INS005", "INS001", "INS002"] }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "plan_name", type: "string", required: true, description: "Name of the insurance plan" },
      { name: "plan_id", type: "string", required: false, description: "ID of the insurance plan" },
      { name: "network", type: "string", required: false, description: "Network of providers" },
      { name: "deductible_individual_family", type: "string", required: false, description: "Deductible amounts for individual/family" },
      { name: "out_of_pocket_maximum_individual_family", type: "string", required: false, description: "Out-of-pocket maximum for individual/family" },
      { name: "coinsurance", type: "string", required: false, description: "Coinsurance percentage" },
      { name: "overall_lifetime_maximum", type: "string", required: false, description: "Lifetime maximum coverage" },
      { name: "rates_premium_employee_only", type: "number", required: false, description: "Premium for employee only" },
      { name: "rates_premium_employer_contribution_employee_only", type: "number", required: false, description: "Employer contribution for employee only" },
      { name: "rates_premium_employee_contribution_employee_only", type: "number", required: false, description: "Employee contribution for employee only" },
      { name: "rates_premium_employee_spouse", type: "number", required: false, description: "Premium for employee and spouse" },
      { name: "rates_premium_employer_contribution_employee_spouse", type: "number", required: false, description: "Employer contribution for employee and spouse" },
      { name: "rates_premium_employee_contribution_employee_spouse", type: "number", required: false, description: "Employee contribution for employee and spouse" },
      { name: "rates_premium_employee_children", type: "number", required: false, description: "Premium for employee and children" },
      { name: "rates_premium_employer_contribution_employee_children", type: "number", required: false, description: "Employer contribution for employee and children" },
      { name: "rates_premium_employee_contribution_employee_children", type: "number", required: false, description: "Employee contribution for employee and children" },
      { name: "rates_premium_family", type: "number", required: false, description: "Premium for family coverage" },
      { name: "rates_premium_employer_contribution_family", type: "number", required: false, description: "Employer contribution for family coverage" },
      { name: "rates_premium_employee_contribution_family", type: "number", required: false, description: "Employee contribution for family coverage" }
    ],
    requestBodyExample: {
      "plan_name": "Gold Health Plan",
      "plan_id": "IP00123",
      "network": "Preferred Provider Network",
      "deductible_individual_family": "$500/$1000",
      "out_of_pocket_maximum_individual_family": "$3000/$6000",
      "coinsurance": "20%",
      "overall_lifetime_maximum": "Unlimited",
      "rates_premium_employee_only": 250.50,
      "rates_premium_employer_contribution_employee_only": 200.00,
      "rates_premium_employee_contribution_employee_only": 50.50,
      "rates_premium_employee_spouse": 450.75,
      "rates_premium_employer_contribution_employee_spouse": 350.00,
      "rates_premium_employee_contribution_employee_spouse": 100.75,
      "rates_premium_employee_children": 400.25,
      "rates_premium_employer_contribution_employee_children": 320.00,
      "rates_premium_employee_contribution_employee_children": 80.25,
      "rates_premium_family": 650.00,
      "rates_premium_employer_contribution_family": 500.00,
      "rates_premium_employee_contribution_family": 150.00
    },
    responseExample: {
      "message": "Insurance plan updated successfully",
      "plan_name": "Gold Health Plan"
    }
  },
  
  // Leave Balance Data endpoints (HRMS)
  "get-leave-balance": {
    id: "get-leave-balance",
    category: "Leave Balance",
    title: "Get Leave Balance",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_balance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM34179", "EM18726", "EM44793"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "annual_leave_balance": 15,
      "sick_leave_balance": 10,
      "personal_leave_balance": 3,
      "unpaid_leave_taken": 0,
      "leave_balance_updated_date": "2023-01-01"
    }
  },
  
  "update-leave-balance": {
    id: "update-leave-balance",
    category: "Leave Balance",
    title: "Update Leave Balance",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_balance_data/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM34179", "EM18726", "EM44793"] }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee" },
      { name: "annual_leave_balance", type: "integer", required: false, description: "Annual leave balance" },
      { name: "sick_leave_balance", type: "integer", required: false, description: "Sick leave balance" },
      { name: "personal_leave_balance", type: "integer", required: false, description: "Personal leave balance" },
      { name: "unpaid_leave_taken", type: "integer", required: false, description: "Unpaid leave taken" },
      { name: "leave_balance_updated_date", type: "string", required: false, description: "Date when leave balance was last updated" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "annual_leave_balance": 15,
      "sick_leave_balance": 10,
      "personal_leave_balance": 3,
      "unpaid_leave_taken": 0,
      "leave_balance_updated_date": "2023-01-01"
    },
    responseExample: {
      "message": "Leave balance updated successfully",
      "employee_id": "EM3278888"
    }
  },
  
  // Leave Requests endpoints (HRMS)
  "get-leave-request": {
    id: "get-leave-request",
    category: "Leave Requests",
    title: "Get Leave Request",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the leave request", examples: ["EM3278", "EM70855", "EM69514"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "application_id": 1001,
      "start_date": "2023-07-01",
      "total_working_days_off": 5,
      "total_days_off": 7,
      "end_date": "2023-07-07",
      "deduction_from_salary": 0,
      "leave_type": "Annual",
      "reason": "Family vacation",
      "request_date": "2023-06-01",
      "request_time": "10:15:00",
      "reviewed_by": "E001",
      "status": "Approved",
      "approved_by": "E009"
    }
  },
  
  "create-leave-request": {
    id: "create-leave-request",
    category: "Leave Requests",
    title: "Create Leave Request",
    method: "POST",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: false, description: "Employee ID" },
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" },
      { name: "start_date", type: "string", required: false, description: "Start date of leave" },
      { name: "total_working_days_off", type: "integer", required: false, description: "Total working days off" },
      { name: "total_days_off", type: "integer", required: false, description: "Total calendar days off" },
      { name: "end_date", type: "string", required: false, description: "End date of leave" },
      { name: "deduction_from_salary", type: "integer", required: false, description: "Amount to deduct from salary" },
      { name: "leave_type", type: "string", required: false, description: "Type of leave" },
      { name: "reason", type: "string", required: false, description: "Reason for leave" },
      { name: "request_date", type: "string", required: false, description: "Date of request" },
      { name: "request_time", type: "string", required: false, description: "Time of request" },
      { name: "reviewed_by", type: "string", required: false, description: "ID of reviewer" },
      { name: "status", type: "string", required: false, description: "Status of leave request" },
      { name: "approved_by", type: "string", required: false, description: "ID of approver" }
    ],
    requestBodyExample: {
      "employee_id": "EM3278888",
      "application_id": 1001,
      "start_date": "2023-07-01",
      "total_working_days_off": 5,
      "total_days_off": 7,
      "end_date": "2023-07-07",
      "deduction_from_salary": 0,
      "leave_type": "Annual",
      "reason": "Family vacation",
      "request_date": "2023-06-01",
      "request_time": "10:15:00",
      "status": "Pending"
    },
    responseExample: {
      "message": "Leave request created successfully",
      "application_id": 1001
    }
  },
  
  "update-leave-request": {
    id: "update-leave-request",
    category: "Leave Requests",
    title: "Update Leave Request",
    method: "PUT",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the leave request", examples: ["EM3278", "EM70855", "EM69514"] }
    ],
    headerParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" },
      { name: "Content-Type", type: "string", required: true, description: "Content type of the request", example: "application/json" }
    ],
    bodyParams: [
      { name: "employee_id", type: "string", required: false, description: "Employee ID" },
      { name: "application_id", type: "integer", required: true, description: "Unique identifier for the leave application" },
      { name: "start_date", type: "string", required: false, description: "Start date of leave" },
      { name: "total_working_days_off", type: "integer", required: false, description: "Total working days off" },
      { name: "total_days_off", type: "integer", required: false, description: "Total calendar days off" },
      { name: "end_date", type: "string", required: false, description: "End date of leave" },
      { name: "deduction_from_salary", type: "integer", required: false, description: "Amount to deduct from salary" },
      { name: "leave_type", type: "string", required: false, description: "Type of leave" },
      { name: "reason", type: "string", required: false, description: "Reason for leave" },
      { name: "request_date", type: "string", required: false, description: "Date of request" },
      { name: "request_time", type: "string", required: false, description: "Time of request" },
      { name: "reviewed_by", type: "string", required: false, description: "ID of reviewer" },
      { name: "status", type: "string", required: false, description: "Status of leave request" },
      { name: "approved_by", type: "string", required: false, description: "ID of approver" }
    ],
    requestBodyExample: {
      "application_id": 1001,
      "status": "Approved",
      "reviewed_by": "E001",
      "approved_by": "E009"
    },
    responseExample: {
      "message": "Leave request updated successfully",
      "application_id": 1001
    }
  },
  
  "delete-leave-request": {
    id: "delete-leave-request",
    category: "Leave Requests",
    title: "Delete Leave Request",
    method: "DELETE",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/leave_requests/{application_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "application_id", type: "string", required: true, description: "Unique identifier for the leave request", examples: ["EM3278", "EM70855", "EM69514"] }
    ],
    responseExample: {
      "message": "Leave request deleted successfully",
      "application_id": 1001
    }
  },
  
  // Payroll endpoints (HRMS)
  "get-payroll": {
    id: "get-payroll",
    category: "Payroll",
    title: "Get Payroll",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/payroll/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM97647", "EM69514", "EM24914"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "base_salary": 75000.00,
      "federal_tax": 15000.00,
      "state_tax": 5000.00,
      "total_tax": 20000.00,
      "month": "January 2023",
      "salary_received_day": "31"
    }
  },
  
  // Salary Info endpoints (HRMS)
  "get-salary-info": {
    id: "get-salary-info",
    category: "Salary Info",
    title: "Get Salary Info",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/salary_info/{employee_id}",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    pathParams: [
      { name: "employee_id", type: "string", required: true, description: "Unique identifier for the employee", examples: ["EM9116", "EM7212", "EM8444"] }
    ],
    responseExample: {
      "employee_id": "EM3278888",
      "base_salary": 75000.00,
      "salary_type": "Annual",
      "bonus": 5000.00,
      "commission": 0.00,
      "currency": "USD",
      "salary_grade": "G3",
      "last_salary_increase_date": "2022-01-01"
    }
  },
  
  // Taxes endpoints (HRMS)
  "get-all-taxes": {
    id: "get-all-taxes",
    category: "Taxes",
    title: "Get All Taxes",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/all_taxes",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: [
      {
        "state": "California",
        "state_tax_rate": 0.093,
        "federal_tax_rate": 0.24,
        "medicare_rate": 0.0145,
        "social_security_rate": 0.062,
        "total_tax_rate": 0.4095
      },
      {
        "state": "Texas",
        "state_tax_rate": 0.0,
        "federal_tax_rate": 0.24,
        "medicare_rate": 0.0145,
        "social_security_rate": 0.062,
        "total_tax_rate": 0.3165
      }
    ]
  },
  
  // Company Policies endpoints (HRMS)
  "get-sexual-harassment-policy": {
    id: "get-sexual-harassment-policy",
    category: "Company Policies",
    title: "Get Sexual Harassment Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/Prevention_of_Sexual_Harassment_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: {
      "policy_name": "Prevention of Sexual Harassment Policy",
      "version": "2.1",
      "last_updated": "2023-01-15",
      "policy_text": "Our company is committed to providing a work environment...",
      "reporting_procedure": "Any employee who feels they have been subject to sexual harassment...",
      "investigation_process": "All reports will be investigated promptly...",
      "disciplinary_actions": "Violations of this policy will result in disciplinary action..."
    }
  },
  
  "get-hr-complaint-policy": {
    id: "get-hr-complaint-policy",
    category: "Company Policies",
    title: "Get HR Complaint Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/General_HR_Complaint_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: {
      "policy_name": "General HR Complaint Policy",
      "version": "1.5",
      "last_updated": "2023-02-10",
      "policy_text": "Our company values open communication...",
      "complaint_procedure": "Employees with concerns should first speak with their supervisor...",
      "resolution_process": "HR will review all complaints and work towards a resolution...",
      "non_retaliation": "The company prohibits retaliation against any employee who files a complaint..."
    }
  },
  
  "get-leave-policy": {
    id: "get-leave-policy",
    category: "Company Policies",
    title: "Get Leave Policy",
    method: "GET",
    baseUrl: "https://hrms-api.xpectrum-ai.com",
    path: "/hrms/api/v1/company_policies/Leave_Policy",
    queryParams: [
      { name: "api_key", type: "string", required: true, description: "API Key for authentication", example: "xpectrum_api_key_123@ai" }
    ],
    responseExample: {
      "policy_name": "Leave Policy",
      "version": "3.2",
      "last_updated": "2023-03-01",
      "annual_leave": "Employees are entitled to 15 days of annual leave per year...",
      "sick_leave": "Employees are entitled to 10 days of sick leave per year...",
      "personal_leave": "Employees are entitled to 3 days of personal leave per year...",
      "unpaid_leave": "Unpaid leave may be granted at the discretion of management...",
      "application_procedure": "Leave requests must be submitted at least 2 weeks in advance...",
      "approval_process": "Leave requests must be approved by the direct supervisor and HR..."
    }
  }
};