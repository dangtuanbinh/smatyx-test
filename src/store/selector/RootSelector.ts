// Modal
export const modalStatus = (state: any) => state.modal.isOpen;
export const modalTemplate = (state: any) => state.modal.template;
export const modalData = (state: any) => state.modal.data;
export const modalSize = (state: any) => state.modal.size;

// Login
export const getUserLogin = (state: any) => state.auth.isUserLogin;

// Timetable
export const getEventList = (state: any) => state.timetable.data;
