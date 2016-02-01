export const Actions = {
  ADD_TODO: 'Todo/ADD_TODO'
};

export const add = (txt) => {
  return { type: Actions.ADD_TODO, txt };
};
