export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const INCBYFIVE="incbyfive";

export const DECBYFIVE="decbyfive"

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incbyfive=(value)=>({
  type:INCBYFIVE,
  payload:value
})


export const decbyfive=(value)=>({
  type:DECBYFIVE,
  payload:value
})