export const isUserRole = (role: string) => {
  const userRole = localStorage.getItem("vega-user-role");
  if (userRole === role) return true;
  return false;
};
