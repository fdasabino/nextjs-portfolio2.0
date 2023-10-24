export const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
